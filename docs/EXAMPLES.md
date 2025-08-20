# 🎯 Exemplos Práticos - Nebius AI CLI

Este guia apresenta exemplos reais de como usar o Nebius AI CLI para tarefas do dia a dia.

## 📁 **Operações de Arquivo**

### **Análise de Projeto**

```bash
# Analisar estrutura do projeto
nebius --prompt "Analise a estrutura deste projeto e me dê um resumo"

# Encontrar arquivos grandes
nebius --prompt "Liste os 10 maiores arquivos do projeto com seus tamanhos"

# Verificar dependências
nebius --prompt "Analise o package.json e me diga quais dependências estão desatualizadas"
```

### **Criação Automática de Documentação**

```bash
# README automático
nebius --prompt "Crie um README.md profissional para este projeto Python com seções de instalação, uso e exemplos"

# Documentação de API
nebius --prompt "Analise os arquivos .js na pasta routes/ e crie documentação da API"

# Changelog
nebius --prompt "Baseado nos commits recentes, crie um CHANGELOG.md"
```

### **Refatoração de Código**

```bash
# Modernizar JavaScript
nebius --prompt "Converta todas as funções function() para arrow functions no arquivo utils.js"

# Adicionar TypeScript
nebius --prompt "Adicione tipos TypeScript ao arquivo user.js"

# Melhorar performance
nebius --prompt "Analise o arquivo database.js e sugira otimizações de performance"
```

## ⚡ **Automação com Bash**

### **Deploy e CI/CD**

```bash
# Pipeline completo
nebius --prompt "Execute: npm install, npm run test, npm run build e npm run deploy"

# Verificação de saúde
nebius --prompt "Verifique se o servidor está rodando na porta 3000 e teste a rota /health"

# Backup automático
nebius --prompt "Crie um backup da pasta src/ com timestamp no nome"
```

### **Análise de Sistema**

```bash
# Monitoramento
nebius --prompt "Mostre uso de CPU, memória e espaço em disco"

# Logs de erro
nebius --prompt "Analise os logs dos últimos 30 minutos e mostre apenas os erros"

# Processos suspeitos
nebius --prompt "Liste processos que estão usando mais de 80% de CPU"
```

### **Limpeza e Manutenção**

```bash
# Limpeza de projeto
nebius --prompt "Remova node_modules, dist/, .cache/ e todos os arquivos .log"

# Otimização de imagens
nebius --prompt "Encontre todas as imagens PNG maiores que 1MB na pasta assets/"

# Remoção de código morto
nebius --prompt "Encontre arquivos .js que não são importados em nenhum lugar"
```

## 🔍 **Busca e Análise**

### **Busca de Código**

```bash
# Encontrar padrões
nebius --prompt "Encontre todas as funções async que não têm try/catch"

# Busca de vulnerabilidades
nebius --prompt "Procure por console.log, alert() e eval() em todos os arquivos JS"

# Análise de imports
nebius --prompt "Liste todas as dependências externas importadas nos arquivos TypeScript"
```

### **Análise de Dados**

```bash
# Estatísticas de código
nebius --prompt "Conte linhas de código por linguagem e mostre um resumo"

# Análise de commits
nebius --prompt "Analise os últimos 50 commits e mostre os autores mais ativos"

# Métricas de qualidade
nebius --prompt "Calcule a complexidade ciclomática dos arquivos na pasta src/"
```

## 🎨 **Desenvolvimento Frontend**

### **React/Next.js**

```bash
# Componente automático
nebius --prompt "Crie um componente React UserCard que recebe props name, email e avatar"

# Página completa
nebius --prompt "Crie uma página de login com formulário, validação e integração com API"

# Otimização
nebius --prompt "Analise os componentes React e sugira otimizações de performance"
```

### **CSS e Styling**

```bash
# Responsividade
nebius --prompt "Adicione media queries para mobile no arquivo styles.css"

# Tema escuro
nebius --prompt "Crie variáveis CSS para tema escuro e claro"

# Limpeza de CSS
nebius --prompt "Encontre classes CSS não utilizadas nos arquivos HTML/JSX"
```

## 🗄️ **Backend e Banco de Dados**

### **API Development**

```bash
# CRUD automático
nebius --prompt "Crie rotas CRUD completas para um modelo User com Express.js"

# Middleware de autenticação
nebius --prompt "Implemente middleware JWT para proteger rotas da API"

# Documentação Swagger
nebius --prompt "Gere documentação Swagger para as rotas em routes/api.js"
```

### **Banco de Dados**

```bash
# Migrations
nebius --prompt "Crie migration para adicionar campo 'avatar' na tabela users"

# Queries otimizadas
nebius --prompt "Analise as queries SQL e sugira otimizações com índices"

# Backup de dados
nebius --prompt "Crie script de backup do banco PostgreSQL"
```

## 🧪 **Testes e Qualidade**

### **Testes Automatizados**

```bash
# Testes unitários
nebius --prompt "Crie testes Jest para todas as funções no arquivo utils.js"

# Testes de integração
nebius --prompt "Crie testes de API para as rotas de autenticação"

# Coverage report
nebius --prompt "Execute os testes e gere relatório de cobertura"
```

### **Qualidade de Código**

```bash
# Linting automático
nebius --prompt "Configure ESLint com regras para TypeScript e React"

# Formatação
nebius --prompt "Configure Prettier e formate todos os arquivos do projeto"

# Análise estática
nebius --prompt "Execute análise estática e corrija problemas de segurança"
```

## 📊 **DevOps e Infraestrutura**

### **Docker**

```bash
# Dockerfile otimizado
nebius --prompt "Crie Dockerfile multi-stage para aplicação Node.js"

# Docker Compose
nebius --prompt "Crie docker-compose.yml com app, banco e Redis"

# Otimização de imagem
nebius --prompt "Analise o Dockerfile e sugira otimizações de tamanho"
```

### **Kubernetes**

```bash
# Manifests básicos
nebius --prompt "Crie manifests K8s para deployment, service e ingress"

# ConfigMaps
nebius --prompt "Converta variáveis de ambiente em ConfigMap"

# Health checks
nebius --prompt "Adicione probes de saúde aos deployments"
```

## 🔧 **Configuração e Setup**

### **Ambiente de Desenvolvimento**

```bash
# Setup completo
nebius --prompt "Configure ambiente completo: Node.js, Git hooks, VS Code settings"

# Scripts úteis
nebius --prompt "Crie scripts npm para dev, build, test e deploy"

# Configuração de IDE
nebius --prompt "Crie configuração do VS Code com extensões recomendadas"
```

### **Ferramentas de Build**

```bash
# Webpack config
nebius --prompt "Configure Webpack para projeto React com hot reload"

# Vite setup
nebius --prompt "Migre configuração do Webpack para Vite"

# Otimização de bundle
nebius --prompt "Analise o bundle e sugira otimizações de tamanho"
```

## 🚀 **Casos de Uso Avançados**

### **Migração de Projetos**

```bash
# JavaScript para TypeScript
nebius --prompt "Converta gradualmente o projeto JS para TypeScript"

# Atualização de dependências
nebius --prompt "Atualize todas as dependências para versões compatíveis"

# Refatoração de arquitetura
nebius --prompt "Reorganize o projeto seguindo padrões de Clean Architecture"
```

### **Automação Complexa**

```bash
# Pipeline de release
nebius --prompt "Crie script que: atualiza versão, gera changelog, faz build e publica"

# Monitoramento automático
nebius --prompt "Configure monitoramento de logs com alertas por email"

# Backup inteligente
nebius --prompt "Implemente backup incremental com rotação de arquivos"
```

## 💡 **Dicas e Truques**

### **Comandos Compostos**

```bash
# Análise completa
"Analise o projeto, execute testes, gere relatório de cobertura e crie resumo"

# Setup rápido
"Clone o repo, instale dependências, configure ambiente e execute em modo dev"

# Deploy completo
"Execute testes, faça build, otimize assets e faça deploy para produção"
```

### **Uso de Contexto**

```bash
# Referência a arquivos
"Baseado no arquivo config.json, crie arquivo de ambiente para desenvolvimento"

# Continuação de tarefas
"Continue a implementação da função que começamos anteriormente"

# Comparação
"Compare este arquivo com a versão anterior e mostre as diferenças"
```

### **Personalização**

```bash
# Instruções customizadas
"Sempre use TypeScript strict mode e adicione JSDoc em funções públicas"

# Padrões de projeto
"Siga o padrão Repository para acesso a dados"

# Convenções de código
"Use camelCase para variáveis e PascalCase para componentes React"
```

---

## 🎯 **Próximos Passos**

Depois de dominar esses exemplos:

1. **Explore MCP Tools** - Integre com Linear, GitHub, Slack
2. **Customize Instruções** - Adapte o comportamento para seu workflow
3. **Automatize Workflows** - Crie scripts complexos com múltiplas etapas
4. **Contribua** - Compartilhe seus casos de uso com a comunidade

---

*Para mais exemplos e casos de uso, visite nossa [documentação completa](./GUIDE.md) ou participe da [comunidade](https://discord.gg/nebius-ai).*

