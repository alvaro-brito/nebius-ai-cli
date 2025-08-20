import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat";

export type NebiusMessage = ChatCompletionMessageParam;

export interface NebiusTool {
  type: "function";
  function: {
    name: string;
    description: string;
    parameters: {
      type: "object";
      properties: Record<string, any>;
      required: string[];
    };
  };
}

export interface NebiusToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
}

export interface NebiusResponse {
  choices: Array<{
    message: {
      role: string;
      content: string | null;
      tool_calls?: NebiusToolCall[];
    };
    finish_reason: string;
  }>;
}

// Available models in Nebius
export const NEBIUS_MODELS = {
  QWEN: "Qwen/Qwen3-235B-A22B-Instruct-2507",
  DEEPSEEK: "deepseek-ai/DeepSeek-R1-0528", 
  LLAMA: "meta-llama/Llama-3.3-70B-Instruct"
} as const;

export type NebiusModelType = typeof NEBIUS_MODELS[keyof typeof NEBIUS_MODELS];

export interface LastErrorDetails {
  timestamp: string;
  status: number;
  message: string;
  response?: any;
  headers?: any;
  payload: {
    model: string;
    messages: any[];
    tools?: any[];
    temperature: number;
    max_tokens: number;
    stream?: boolean;
  };
}

export class NebiusClient {
  private client: OpenAI;
  private currentModel: NebiusModelType = NEBIUS_MODELS.QWEN; // Qwen como padrão
  private logCallback?: (message: string) => void;
  private lastErrorDetails: LastErrorDetails | null = null;

  constructor(apiKey: string, model?: NebiusModelType, baseURL?: string) {
    this.client = new OpenAI({
      apiKey,
      baseURL: baseURL || process.env.NEBIUS_BASE_URL || "https://api.studio.nebius.ai/v1",
      timeout: 360000,
    });
    if (model && this.isValidModel(model)) {
      this.currentModel = model;
    }
  }

  setLogCallback(callback: (message: string) => void): void {
    this.logCallback = callback;
  }

  private log(message: string): void {
    if (this.logCallback) {
      this.logCallback(message);
    } else {
      console.log(message);
    }
  }

  private logError(message: string, data?: any): void {
    const fullMessage = data ? `${message} ${JSON.stringify(data)}` : message;
    if (this.logCallback) {
      this.logCallback(fullMessage);
    } else {
      console.error(message, data);
    }
  }

  private isValidModel(model: string): model is NebiusModelType {
    return Object.values(NEBIUS_MODELS).includes(model as NebiusModelType);
  }

  setModel(model: string): void {
    if (this.isValidModel(model)) {
      this.currentModel = model;
    } else {
      throw new Error(`Invalid model: ${model}. Available models: ${Object.values(NEBIUS_MODELS).join(", ")}`);
    }
  }

  getCurrentModel(): string {
    return this.currentModel;
  }

  getAvailableModels(): NebiusModelType[] {
    return Object.values(NEBIUS_MODELS);
  }

  getLastErrorDetails(): LastErrorDetails | null {
    return this.lastErrorDetails;
  }

  clearLastErrorDetails(): void {
    this.lastErrorDetails = null;
  }

  async chat(
    messages: NebiusMessage[],
    tools?: NebiusTool[],
    model?: NebiusModelType
  ): Promise<NebiusResponse> {
    const maxRetries = 3;
    let retryCount = 0;
    
    // Prepare payload outside the loop for error logging
    const requestPayload: any = {
      model: model || this.currentModel,
      messages,
      temperature: 0.7,
      max_tokens: 4000,
    };

    // Only add tools and tool_choice if tools are provided
    if (tools && tools.length > 0) {
      requestPayload.tools = tools;
      requestPayload.tool_choice = "auto";
    }
    
    while (retryCount <= maxRetries) {
      try {
        // Log payload size for debugging
        const payloadSize = JSON.stringify(requestPayload).length;
        this.log(`[NEBIUS CHAT] Attempt ${retryCount + 1}/${maxRetries + 1}`);
        this.log(`[NEBIUS CHAT] Payload size: ${payloadSize} bytes`);
        
        if (payloadSize > 100000) { // 100KB threshold
          this.log(`[NEBIUS CHAT] Large payload detected: ${payloadSize} bytes`);
        }

        const response = await this.client.chat.completions.create(
          requestPayload
        );

        return response as NebiusResponse;
        
      } catch (error: any) {
        retryCount++;
        
        // Enhanced error handling with more details
        let errorMessage = `Nebius API error: ${error.message}`;
        
        if (error.status) {
          errorMessage += ` (status: ${error.status})`;
        }
        
        if (error.response?.data) {
          errorMessage += ` - ${JSON.stringify(error.response.data)}`;
        } else if (error.response?.text) {
          errorMessage += ` - ${error.response.text}`;
        }
        
        // Log the full error for debugging
        this.logError(`[NEBIUS CHAT] Error on attempt ${retryCount}/${maxRetries + 1}:`, {
          status: error.status,
          message: error.message,
          response: error.response?.data || error.response?.text,
          headers: error.response?.headers
        });

        // Store detailed error info for 4xx errors (for /last-error-log command)
        if (error.status >= 400 && error.status < 500) {
          this.lastErrorDetails = {
            timestamp: new Date().toISOString(),
            status: error.status,
            message: error.message,
            response: error.response?.data || error.response?.text,
            headers: error.response?.headers,
            payload: {
              model: requestPayload.model,
              messages: requestPayload.messages,
              tools: requestPayload.tools,
              temperature: requestPayload.temperature,
              max_tokens: requestPayload.max_tokens,
              stream: false
            }
          };
        }
        
        // Check if this is a retryable error (400, 429, 500, 502, 503, 504)
        const isRetryable = error.status === 400 || error.status === 429 || 
                           error.status >= 500 && error.status <= 504;
        
        if (retryCount <= maxRetries && isRetryable) {
          // Calculate exponential backoff delay (1s, 2s, 4s)
          const delay = Math.pow(2, retryCount - 1) * 1000;
          this.log(`[NEBIUS CHAT] Retrying in ${delay}ms...`);
          
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        
        // If we've exhausted retries or it's not a retryable error, throw
        throw new Error(errorMessage);
      }
    }
    
    // This should never be reached, but TypeScript requires it
    throw new Error('Unexpected error: exceeded retry loop');
  }

  async *chatStream(
    messages: NebiusMessage[],
    tools?: NebiusTool[],
    model?: NebiusModelType
  ): AsyncGenerator<any, void, unknown> {
    const maxRetries = 3;
    let retryCount = 0;
    
    // Prepare payload outside the loop for error logging
    const requestPayload: any = {
      model: model || this.currentModel,
      messages,
      temperature: 0.7,
      max_tokens: 4000,
      stream: true,
    };

    // Only add tools and tool_choice if tools are provided
    if (tools && tools.length > 0) {
      requestPayload.tools = tools;
      requestPayload.tool_choice = "auto";
    }
    
    while (retryCount <= maxRetries) {
      try {
        // Log payload size for debugging
        const payloadSize = JSON.stringify(requestPayload).length;
        this.log(`[NEBIUS STREAMING] Attempt ${retryCount + 1}/${maxRetries + 1}`);
        this.log(`[NEBIUS STREAMING] Payload size: ${payloadSize} bytes`);
        this.log(`[NEBIUS STREAMING] Messages count: ${messages.length}`);
        this.log(`[NEBIUS STREAMING] Model: ${requestPayload.model}`);
        this.log(`[NEBIUS STREAMING] Tools count: ${requestPayload.tools?.length || 0}`);
        
        if (payloadSize > 100000) { // 100KB threshold
          this.log(`[NEBIUS STREAMING] Large payload detected: ${payloadSize} bytes`);
        }

        this.log(`[NEBIUS STREAMING] Making request to Nebius API...`);
        const stream = (await this.client.chat.completions.create(
          requestPayload
        )) as any;
        this.log(`[NEBIUS STREAMING] Stream created successfully`);

        for await (const chunk of stream) {
          yield chunk;
        }
        
        // If we get here, the request was successful
        return;
        
      } catch (error: any) {
        retryCount++;
        
        // Enhanced error handling with more details
        let errorMessage = `Nebius API streaming error: ${error.message}`;
        
        if (error.status) {
          errorMessage += ` (status: ${error.status})`;
        }
        
        if (error.response?.data) {
          errorMessage += ` - ${JSON.stringify(error.response.data)}`;
        } else if (error.response?.text) {
          errorMessage += ` - ${error.response.text}`;
        }
        
        // Log the full error for debugging
        this.logError(`[NEBIUS STREAMING] Error on attempt ${retryCount}/${maxRetries + 1}:`, {
          status: error.status,
          message: error.message,
          response: error.response?.data || error.response?.text,
          headers: error.response?.headers
        });

        // Store detailed error info for 4xx errors (for /last-error-log command)
        if (error.status >= 400 && error.status < 500) {
          this.lastErrorDetails = {
            timestamp: new Date().toISOString(),
            status: error.status,
            message: error.message,
            response: error.response?.data || error.response?.text,
            headers: error.response?.headers,
            payload: {
              model: requestPayload.model,
              messages: requestPayload.messages,
              tools: requestPayload.tools,
              temperature: requestPayload.temperature,
              max_tokens: requestPayload.max_tokens,
              stream: true
            }
          };
        }
        
        // Check if this is a retryable error (400, 429, 500, 502, 503, 504)
        const isRetryable = error.status === 400 || error.status === 429 || 
                           error.status >= 500 && error.status <= 504;
        
        if (retryCount <= maxRetries && isRetryable) {
          // Calculate exponential backoff delay (1s, 2s, 4s)
          const delay = Math.pow(2, retryCount - 1) * 1000;
          this.log(`[NEBIUS STREAMING] Retrying in ${delay}ms...`);
          
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        
        // If we've exhausted retries or it's not a retryable error, throw
        throw new Error(errorMessage);
      }
    }
  }
}
