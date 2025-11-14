# Como Fazer Deploy na Netlify

## ⚠️ IMPORTANTE: Next.js precisa de BUILD

O Netlify Drop (arrastar pasta) **NÃO funciona** para Next.js porque precisa compilar o código.

## ✅ Opção 1: Via Git (RECOMENDADO - Mais Fácil)

### Passo a Passo:

1. **Crie um repositório no GitHub:**
   - Vá para https://github.com
   - Crie um novo repositório
   - Faça upload do seu código

2. **No Netlify:**
   - Acesse https://app.netlify.com
   - Clique em "Add new site" > "Import an existing project"
   - Conecte com GitHub
   - Selecione seu repositório
   - **Deixe as configurações padrão:**
     - Build command: `npm run build`
     - Publish directory: (deixe vazio - o plugin cuida)
   - Clique em "Deploy site"

3. **Pronto!** O Netlify vai:
   - Instalar dependências
   - Fazer o build automaticamente
   - Publicar seu site

## ✅ Opção 2: Build Local + Deploy Manual

Se você não quer usar Git:

1. **Faça o build local:**
   ```bash
   npm run build
   ```

2. **Crie uma pasta para deploy:**
   - O Next.js gera a pasta `.next` com os arquivos compilados
   - Mas o Netlify precisa do plugin do Next.js para funcionar

3. **Use o Netlify CLI (Melhor opção):**
   ```bash
   # Instale o Netlify CLI globalmente
   npm install -g netlify-cli
   
   # Faça login
   netlify login
   
   # Faça o deploy
   netlify deploy --prod
   ```

## ❌ NÃO FUNCIONA: Netlify Drop Simples

O Netlify Drop (arrastar pasta) **NÃO funciona** para Next.js porque:
- Next.js precisa compilar TypeScript/JSX
- Precisa processar as rotas
- Precisa otimizar imagens
- Precisa gerar arquivos estáticos

## 🎯 Resumo: Use Git ou Netlify CLI

**Mais fácil:** Conecte seu repositório Git no Netlify
**Alternativa:** Use `netlify deploy --prod` via CLI

