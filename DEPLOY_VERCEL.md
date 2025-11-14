# Deploy na Vercel - Guia Completo

## ✅ SIM! Vercel aceita arrastar pasta (mais fácil!)

A Vercel é a empresa criadora do Next.js, então tem suporte **perfeito** e **nativo**.

## 🎯 Opção 1: Arrastar Pasta (MAIS FÁCIL)

### Passo a Passo:

1. **Acesse a Vercel:**
   - Vá para https://vercel.com
   - Faça login (pode usar GitHub, Google, etc.)

2. **Arraste sua pasta:**
   - Clique em "Add New..." > "Project"
   - Na tela de importação, você pode:
     - **Arrastar a pasta do projeto** diretamente
     - OU clicar em "Browse" e selecionar a pasta
   
3. **Configure (se necessário):**
   - Framework Preset: Next.js (detecta automaticamente)
   - Build Command: `npm run build` (já vem configurado)
   - Output Directory: `.next` (já vem configurado)
   - Install Command: `npm install` (já vem configurado)

4. **Deploy:**
   - Clique em "Deploy"
   - Aguarde alguns minutos
   - **Pronto!** Seu site estará online

## 🎯 Opção 2: Via Git (Recomendado para produção)

1. **Crie repositório no GitHub/GitLab/Bitbucket**

2. **Na Vercel:**
   - Clique em "Add New..." > "Project"
   - Conecte com GitHub/GitLab/Bitbucket
   - Selecione seu repositório
   - Clique em "Import"

3. **Configure:**
   - Framework: Next.js (detecta automaticamente)
   - Deixe tudo padrão

4. **Deploy:**
   - Clique em "Deploy"
   - Cada push no Git faz deploy automático!

## 🎯 Opção 3: Vercel CLI

```bash
# Instale a Vercel CLI
npm install -g vercel

# Faça login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

## ✨ Vantagens da Vercel:

- ✅ **Suporte nativo ao Next.js** (criadores do framework)
- ✅ **Deploy instantâneo** (arrastar pasta funciona!)
- ✅ **Detecção automática** de configurações
- ✅ **SSL gratuito** automático
- ✅ **CDN global** incluído
- ✅ **Preview deployments** para cada branch
- ✅ **Domínio gratuito** (.vercel.app)

## 📝 Notas Importantes:

- A Vercel detecta automaticamente que é Next.js
- Não precisa configurar nada manualmente
- Funciona com App Router (Next.js 14)
- Rotas dinâmicas funcionam automaticamente
- Imagens otimizadas automaticamente

## 🚀 Resumo:

**Mais fácil:** Arraste a pasta na Vercel e pronto!
**Melhor para produção:** Conecte com Git para deploys automáticos

