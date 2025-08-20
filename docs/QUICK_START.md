# 🚀 Guia de Início Rápido - Nebius AI CLI

Comece a usar o Nebius AI CLI em menos de 5 minutos!

## ⚡ **Instalação Rápida**

### **1. Instale o Nebius AI CLI**

```bash
npm install -g nebius-ai-cli
```

### **2. Configure sua API Key**

```bash
# Opção 1: Variável de ambiente
export NEBIUS_API_KEY="sua-chave-aqui"

# Opção 2: Arquivo .env (recomendado)
mkdir -p ~/.nebius
echo "NEBIUS_API_KEY=sua-chave-aqui" > ~/.nebius/.env
```

### **3. Teste a instalação**

```bash
nebius --version
nebius models
```

## 🎯 **Primeiros Passos**

### **Modo Interativo (Recomendado para iniciantes)**

```bash
# Inicie uma sessão interativa
nebius
```

Agora você pode conversar naturalmente:

```
💬 Você: Olá! Mostre-me os arquivos do diretório atual
🤖 Nebius: [Executa comando ls e mostra resultados]

💬 Você: Crie um arquivo README.md para meu projeto
🤖 Nebius: [Cria README com conteúdo apropriado]

💬 Você: Execute npm install
🤖 Nebius: [Instala dependências do projeto]
```

### **Modo Comando Único**

```bash
# Execute comandos diretos
nebius --prompt "Liste todos os arquivos .js no projeto"
nebius --prompt "Crie um arquivo .gitignore para Node.js"
nebius --prompt "Mostre o status do Git"
```

## 🎮 **Comandos Essenciais**

### **📋 Informações**

```bash
# Ver modelos disponíveis
nebius models

# Ajuda completa
nebius --help

# Versão atual
nebius --version
```

### **🔧 Configuração**

```bash
# Configurar modelo padrão
nebius --model "deepseek-ai/DeepSeek-R1-0528"

# Ver configurações atuais
cat ~/.nebius/settings.json
```

### **🔌 MCP Tools (Opcional)**

```bash
# Adicionar servidor Linear
nebius mcp add linear

# Ver status dos servidores
nebius mcp status

# Listar ferramentas disponíveis
nebius mcp list
```

## 💡 **Exemplos Práticos**

### **📁 Operações de Arquivo**

```bash
# Análise rápida do projeto
nebius --prompt "Analise este projeto e me dê um resumo"

# Criar documentação
nebius --prompt "Crie um README.md profissional para este projeto"

# Editar arquivo específico
nebius --prompt "No package.json, atualize a versão para 2.0.0"
```

### **⚡ Comandos do Sistema**

```bash
# Informações do sistema
nebius --prompt "Mostre uso de CPU, memória e espaço em disco"

# Análise de logs
nebius --prompt "Mostre os últimos 20 erros nos logs do sistema"

# Limpeza automática
nebius --prompt "Remova arquivos temporários e cache do projeto"
```

### **🔍 Busca e Análise**

```bash
# Buscar código
nebius --prompt "Encontre todas as funções que contêm 'async' nos arquivos .js"

# Estatísticas do projeto
nebius --prompt "Conte linhas de código por tipo de arquivo"

# Dependências
nebius --prompt "Liste todas as dependências npm instaladas"
```

## 🎨 **Escolhendo o Modelo Certo**

### **🥇 Qwen (Padrão) - Melhor para uso geral**

```bash
# Usa automaticamente o modelo padrão
nebius --prompt "Crie uma API REST com Express.js"
```

**Ideal para**: Tarefas gerais, criação de código, análise de projetos

### **🥈 DeepSeek - Melhor para debugging**

```bash
nebius --model "deepseek-ai/DeepSeek-R1-0528" --prompt "Analise este código e encontre bugs"
```

**Ideal para**: Debugging, análise detalhada, explicações passo a passo

### **🥉 Llama 3.3 - Alternativa robusta**

```bash
nebius --model "meta-llama/Llama-3.3-70B-Instruct" --prompt "Otimize este algoritmo"
```

**Ideal para**: Otimização, refatoração, tarefas complexas

## 🛠️ **Configuração Personalizada**

### **📁 Estrutura de Configuração**

```bash
# Criar estrutura personalizada
mkdir -p ~/.nebius/custom
```

### **⚙️ Arquivo de Configuração**

```json
{
  "defaultModel": "Qwen/Qwen3-235B-A22B-Instruct-2507",
  "maxTokens": 4000,
  "temperature": 0.7,
  "confirmDangerous": true,
  "saveHistory": true
}
```

### **📝 Instruções Customizadas**

```markdown
# ~/.nebius/custom-instructions.md

## Minhas Preferências
- Sempre use TypeScript quando possível
- Prefira arrow functions
- Adicione comentários JSDoc
- Use const/let ao invés de var
- Siga padrões do ESLint
```

## 🚨 **Solução de Problemas**

### **❌ Erro: "Command not found"**

```bash
# Reinstale globalmente
npm uninstall -g nebius-ai-cli
npm install -g nebius-ai-cli

# Verifique o PATH
echo $PATH
which nebius
```

### **🔑 Erro: "API Key not found"**

```bash
# Verifique se a chave está configurada
echo $NEBIUS_API_KEY

# Ou verifique o arquivo .env
cat ~/.nebius/.env

# Configure novamente
export NEBIUS_API_KEY="sua-chave-aqui"
```

### **🌐 Erro: "Network timeout"**

```bash
# Teste conectividade
curl -I https://api.studio.nebius.ai/v1/

# Use proxy se necessário
export HTTPS_PROXY=http://seu-proxy:porta
```

### **💾 Erro: "Permission denied"**

```bash
# Corrigir permissões
sudo chown -R $USER ~/.nebius/
chmod 755 ~/.nebius/
```

## 🎯 **Próximos Passos**

Agora que você tem o básico funcionando:

### **📚 Aprofunde seus conhecimentos**
- Leia o [Guia Completo](./GUIDE.md)
- Explore [Exemplos Práticos](./EXAMPLES.md)
- Configure [MCP Tools](./MCP.md)

### **🔧 Personalize sua experiência**
- Configure [Instruções Customizadas](./CUSTOMIZATION.md)
- Integre com seu [Workflow](./WORKFLOW.md)
- Automatize [Tarefas Repetitivas](./AUTOMATION.md)

### **🤝 Participe da comunidade**
- [Discord](https://discord.gg/nebius-ai)
- [GitHub Discussions](https://github.com/nebius-ai/nebius-ai-cli/discussions)
- [Twitter](https://twitter.com/nebius_ai)

## 💡 **Dicas Finais**

### **🎯 Para máxima eficiência:**

1. **Use modo interativo** para sessões longas
2. **Seja específico** nas suas solicitações
3. **Combine comandos** para tarefas complexas
4. **Salve comandos úteis** como aliases
5. **Explore diferentes modelos** para diferentes tarefas

### **🚀 Comandos que você usará todos os dias:**

```bash
# Análise rápida
nebius --prompt "Analise este projeto"

# Documentação automática
nebius --prompt "Crie README para este projeto"

# Deploy rápido
nebius --prompt "Execute build e deploy"

# Debugging
nebius --model "deepseek-ai/DeepSeek-R1-0528" --prompt "Encontre bugs neste código"
```

---

**🎉 Parabéns! Você está pronto para usar o Nebius AI CLI!**

*Transforme seu terminal em um assistente inteligente e aumente sua produtividade hoje mesmo.*

