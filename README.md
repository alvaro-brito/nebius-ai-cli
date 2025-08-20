# 🌱 Nebius AI CLI

<div align="center">

**O agente de IA mais avançado para seu terminal**

*Transforme sua linha de comando em um assistente inteligente com o poder dos modelos Nebius*

[![npm version](https://badge.fury.io/js/nebius-ai-cli.svg)](https://badge.fury.io/js/nebius-ai-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green.svg)](https://nodejs.org/)

[🚀 Instalação](#-instalação) • [✨ Recursos](#-recursos) • [📖 Guia de Uso](#-guia-de-uso) • [🔧 Configuração](#-configuração) • [🤝 Contribuição](#-contribuição)

</div>

---

## 🎯 **O que é o Nebius AI CLI?**

O **Nebius AI CLI** é um agente de IA revolucionário que traz inteligência artificial diretamente para seu terminal. Com interface conversacional natural e ferramentas avançadas, ele transforma tarefas complexas em conversas simples.

### 🌟 **Por que escolher o Nebius AI CLI?**

- 🧠 **IA Conversacional Avançada** - Converse naturalmente com modelos de última geração
- 🛠️ **Automação Inteligente** - IA escolhe e executa ferramentas automaticamente
- 🎨 **Interface Moderna** - Terminal bonito e responsivo com React + Ink
- 🔌 **Extensível** - Suporte completo ao Model Context Protocol (MCP)
- 🌍 **Pronto para Usar** - Instalação global em segundos

---

## ✨ **Recursos Principais**

### 🤖 **Conversational AI**
Interface de linguagem natural alimentada pelos melhores modelos Nebius
- Conversação contextual inteligente
- Múltiplos modelos disponíveis (Qwen, DeepSeek, Llama)
- Streaming de respostas em tempo real
- Histórico de conversas persistente

### 📝 **Smart File Operations**
IA usa ferramentas automaticamente para visualizar, criar e editar arquivos
- **Visualização inteligente**: `"Mostre-me o conteúdo do arquivo config.json"`
- **Criação automática**: `"Crie um README para meu projeto Python"`
- **Edição precisa**: `"Substitua a versão 1.0 por 2.0 no package.json"`

### ⚡ **Bash Integration**
Execute comandos shell através de conversação natural
- **Comandos**: `"Liste todos os arquivos .js no projeto"`
- **Operações complexas**: `"Encontre arquivos modificados nos últimos 7 dias"`
- **Automação**: `"Instale as dependências e execute os testes"`

### 🔧 **Automatic Tool Selection**
IA escolhe inteligentemente as ferramentas certas para suas solicitações
- Análise automática de requisições
- Execução de múltiplas ferramentas em sequência
- Sistema de loop de agente para tarefas complexas
- Prevenção de loops infinitos

### 🔌 **MCP Tools**
Estenda capacidades com servidores Model Context Protocol
- Integração com Linear, GitHub, Slack e mais
- Configuração dinâmica de servidores
- Protocolo padrão da indústria
- Extensibilidade ilimitada

### 💬 **Interactive UI**
Interface terminal linda construída com React + Ink
- Componentes modernos e responsivos
- Indicadores visuais de progresso
- Histórico de chat interativo
- Seleção de modelos em tempo real

### 🌍 **Global Installation**
Instale e use em qualquer lugar
- Comando `nebius` disponível globalmente
- Compatibilidade multiplataforma
- Configuração persistente
- Atualizações automáticas

---

## 🚀 **Instalação**

### **Instalação Global (Recomendada)**

```bash
npm install -g nebius-ai-cli
```

### **Verificação da Instalação**

```bash
nebius --version
nebius --help
```

### **Configuração Inicial**

```bash
# Configure sua chave da API Nebius
export NEBIUS_API_KEY="sua-chave-aqui"

# Ou use o arquivo .env
echo "NEBIUS_API_KEY=sua-chave-aqui" > ~/.nebius/.env
```

---

## 🎮 **Modelos Suportados**

O Nebius AI CLI suporta os melhores modelos do Nebius:

| Modelo | Descrição | Function Calling | Recomendação |
|--------|-----------|------------------|--------------|
| **Qwen/Qwen3-235B-A22B-Instruct-2507** | Modelo padrão de alta performance | ✅ Completo | 🥇 **Padrão** |
| **deepseek-ai/DeepSeek-R1-0528** | Raciocínio transparente com `<think>` | ✅ Completo | 🥈 **Debugging** |
| **meta-llama/Llama-3.3-70B-Instruct** | Modelo Llama de última geração | ✅ Completo | 🥉 **Alternativa** |

**Nota**: Todos os três modelos oferecem suporte completo a function calling com todas as ferramentas funcionando perfeitamente!

---

## 📖 **Guia de Uso**

### **🎯 Modo Interativo (Recomendado)**

```bash
# Inicie uma sessão interativa
nebius

# Com modelo específico
nebius --model "deepseek-ai/DeepSeek-R1-0528"
```

### **⚡ Modo Headless (Prompt Único)**

```bash
# Execute um comando direto
nebius --prompt "Liste os arquivos do diretório atual"

# Com modelo específico
nebius --model "meta-llama/Llama-3.3-70B-Instruct" --prompt "Crie um arquivo de teste"
```

### **📋 Comandos Úteis**

```bash
# Ver modelos disponíveis
nebius models

# Configurar MCP servers
nebius mcp add linear

# Ver status dos servidores MCP
nebius mcp status

# Ajuda completa
nebius --help
```

---

## 🛠️ **Exemplos Práticos**

### **📁 Operações de Arquivo**

```bash
# Visualizar estrutura do projeto
"Mostre-me a estrutura de arquivos do projeto"

# Criar documentação
"Crie um README.md para meu projeto React com seções de instalação e uso"

# Editar configurações
"No arquivo package.json, atualize a versão para 2.1.0 e adicione o script 'deploy'"
```

### **⚡ Automação com Bash**

```bash
# Análise de projeto
"Conte quantos arquivos .ts existem no projeto e mostre o tamanho total"

# Limpeza automática
"Remova todos os arquivos .log e .tmp do diretório atual"

# Deploy automatizado
"Execute npm run build e depois npm run deploy"
```

### **🔍 Busca Avançada**

```bash
# Busca de código
"Encontre todas as funções que contêm 'async' nos arquivos TypeScript"

# Busca de arquivos
"Liste todos os arquivos modificados hoje"

# Busca com regex
"Procure por emails válidos em todos os arquivos .md"
```

### **✅ Gerenciamento de Tarefas**

```bash
# Criar lista de tarefas
"Crie uma lista de tarefas para implementar autenticação no projeto"

# Marcar como concluído
"Marque a tarefa 'configurar banco de dados' como concluída"

# Ver progresso
"Mostre o status atual das minhas tarefas"
```

---

## 🔧 **Configuração Avançada**

### **🌐 Variáveis de Ambiente**

```bash
# API do Nebius
NEBIUS_API_KEY=sua-chave-aqui
NEBIUS_BASE_URL=https://api.studio.nebius.ai/v1/

# Modelo padrão
NEBIUS_MODEL=Qwen/Qwen3-235B-A22B-Instruct-2507

# Configurações opcionais
NEBIUS_MAX_TOKENS=4000
NEBIUS_TEMPERATURE=0.7
```

### **📁 Estrutura de Configuração**

```
~/.nebius/
├── settings.json          # Configurações globais
├── mcp-servers.json       # Servidores MCP
├── custom-instructions.md # Instruções personalizadas
└── chat-history/         # Histórico de conversas
```

### **🔌 Configuração MCP**

```json
{
  "servers": {
    "linear": {
      "transport": {
        "type": "stdio",
        "command": "npx",
        "args": ["@linear/mcp-server"]
      }
    },
    "github": {
      "transport": {
        "type": "stdio", 
        "command": "npx",
        "args": ["@github/mcp-server"]
      }
    }
  }
}
```

---

## 🎨 **Interface e Experiência**

### **💬 Chat Interativo**

- **Histórico Persistente**: Todas as conversas são salvas
- **Indicadores Visuais**: Spinners e barras de progresso
- **Syntax Highlighting**: Código colorido no terminal
- **Streaming**: Respostas em tempo real

### **🎯 Seleção de Modelos**

- **Troca Dinâmica**: Mude modelos durante a conversa
- **Comparação**: Teste diferentes modelos no mesmo prompt
- **Otimização**: Cada modelo para diferentes tipos de tarefa

### **🔔 Confirmações Inteligentes**

- **Operações Sensíveis**: Confirmação antes de deletar arquivos
- **Comandos Perigosos**: Aviso antes de comandos destrutivos
- **Customizável**: Configure níveis de confirmação

---

## 🚀 **Casos de Uso**

### **👨‍💻 Para Desenvolvedores**

```bash
# Análise de código
"Analise este arquivo e sugira melhorias de performance"

# Debugging
"Encontre possíveis bugs neste código JavaScript"

# Documentação
"Gere documentação JSDoc para todas as funções deste arquivo"
```

### **📊 Para Análise de Dados**

```bash
# Processamento de logs
"Analise o arquivo access.log e mostre os IPs mais frequentes"

# Relatórios
"Crie um relatório CSV com estatísticas dos arquivos do projeto"

# Monitoramento
"Verifique o uso de CPU e memória do sistema"
```

### **🎯 Para Automação**

```bash
# Deploy automatizado
"Execute o pipeline completo: build, test e deploy"

# Backup inteligente
"Faça backup apenas dos arquivos modificados hoje"

# Limpeza de projeto
"Remova dependências não utilizadas e arquivos temporários"
```

---

## 🔍 **Ferramentas Disponíveis**

| Ferramenta | Descrição | Exemplo de Uso |
|------------|-----------|----------------|
| **view_file** | Visualizar arquivos e diretórios | `"Mostre o conteúdo do src/"` |
| **create_file** | Criar novos arquivos | `"Crie um arquivo .gitignore para Node.js"` |
| **str_replace_editor** | Editar arquivos com precisão | `"Substitua 'localhost' por '0.0.0.0'"` |
| **bash** | Executar comandos shell | `"Liste arquivos por tamanho"` |
| **search** | Busca unificada (texto/arquivos) | `"Encontre 'TODO' em todos os arquivos"` |
| **todo** | Gerenciar listas de tarefas | `"Adicione tarefa: implementar login"` |
| **MCP Tools** | Ferramentas externas | Linear, GitHub, Slack, etc. |

---

## 📈 **Performance e Limites**

### **⚡ Otimizações**

- **Streaming**: Respostas em tempo real
- **Cache**: Reutilização de contexto
- **Tokens**: Monitoramento inteligente de uso
- **Paralelo**: Execução simultânea quando possível

### **🎯 Limites Recomendados**

- **Máximo de ferramentas por round**: 10 (configurável)
- **Tamanho máximo de arquivo**: 1MB para visualização
- **Histórico de chat**: 100 mensagens (configurável)
- **Timeout de comandos**: 30 segundos (configurável)

---

## 🛡️ **Segurança**

### **🔒 Práticas de Segurança**

- **Confirmações**: Operações sensíveis requerem confirmação
- **Sandbox**: Execução isolada de comandos
- **Logs**: Auditoria completa de ações
- **Permissões**: Controle granular de acesso

### **⚠️ Comandos Perigosos**

O Nebius AI CLI detecta e confirma comandos potencialmente perigosos:
- Remoção de arquivos (`rm`, `del`)
- Modificação de sistema (`sudo`, `chmod`)
- Operações de rede (`curl`, `wget`)
- Instalação de pacotes (`npm install`, `pip install`)

---

## 🚀 **Como Publicar no NPM**

### **1. Preparação para Publicação**

O projeto já está configurado corretamente para publicação:

- ✅ `package.json` com configuração `bin` para CLI global
- ✅ `tsconfig.json` configurado para compilação
- ✅ `.npmignore` configurado para incluir apenas arquivos necessários
- ✅ Código compilado em `dist/`
- ✅ Licença MIT incluída

### **2. Passos para Publicar**

```bash
# 1. Fazer login no npm (se ainda não estiver logado)
npm login

# 2. Verificar se o build está atualizado
npm run build

# 3. Testar o pacote localmente
npm pack --dry-run

# 4. Publicar no npm
npm publish

# Para publicar como scoped package (recomendado para organizações)
npm publish --access public
```

### **3. Verificação Pós-Publicação**

```bash
# Instalar globalmente do npm
npm install -g nebius-ai-cli

# Testar instalação
nebius --version
nebius --help
```

## 🔧 **Como Instalar Localmente**

### **Método 1: Instalação Global Local**

```bash
# No diretório do projeto
npm run build
npm install -g .

# Testar
nebius --version
```

### **Método 2: Link Simbólico (Desenvolvimento)**

```bash
# No diretório do projeto
npm run build
npm link

# Testar
nebius --version

# Para remover o link
npm unlink -g nebius-ai-cli
```

### **Método 3: Execução Direta**

```bash
# Executar diretamente sem instalação global
node dist/index.js --help
node dist/index.js --prompt "Liste os arquivos do diretório atual"
```

## 📦 **Estrutura do Pacote NPM**

O pacote incluirá:

- **Código compilado** (`dist/`) - 451.3 kB descompactado
- **README.md** - Documentação completa
- **LICENSE** - Licença MIT
- **package.json** - Metadados e dependências

**Arquivos excluídos** (via `.npmignore`):

- Código fonte TypeScript (`src/`)
- Arquivos de configuração de desenvolvimento
- Testes e documentação de desenvolvimento
- Arquivos temporários e logs

## ⚙️ **Configuração de Uso**

### **Variáveis de Ambiente Necessárias:**

```bash
export NEBIUS_API_KEY="sua-chave-aqui"
export NEBIUS_BASE_URL="https://api.studio.nebius.ai/v1/"  # opcional
export NEBIUS_MODEL="Qwen/Qwen3-235B-A22B-Instruct-2507"  # opcional
```

### **Comandos Principais:**

```bash
# Modo interativo
nebius

# Modo headless
nebius --prompt "Crie um arquivo README.md"

# Listar modelos disponíveis
nebius models

# Operações Git com IA
nebius git commit-and-push

# Gerenciar servidores MCP
nebius mcp status
```

---

## 🤝 **Contribuição**

### **🔧 Desenvolvimento Local**

```bash
# Clone o repositório
git clone https://github.com/nebius-ai/nebius-ai-cli.git
cd nebius-ai-cli

# Instale dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

### **🧪 Testes**

```bash
# Execute testes
npm test

# Testes com coverage
npm run test:coverage

# Linting
npm run lint
```
