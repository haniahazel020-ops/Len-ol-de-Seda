# Deploy na Netlify

## Pré-requisitos

1. Conta na Netlify (gratuita): https://www.netlify.com
2. Projeto no GitHub, GitLab ou Bitbucket (recomendado)

## Opção 1: Deploy via Git (Recomendado)

### Passo a Passo:

1. **Faça commit do seu código no Git:**
   ```bash
   git add .
   git commit -m "Preparando para deploy"
   git push origin main
   ```

2. **Acesse o Netlify:**
   - Vá para https://app.netlify.com
   - Faça login com sua conta

3. **Conecte seu repositório:**
   - Clique em "Add new site" > "Import an existing project"
   - Conecte com GitHub/GitLab/Bitbucket
   - Selecione seu repositório

4. **Configure o build:**
   - Build command: `npm run build`
   - Publish directory: `.next` (ou deixe em branco, o plugin do Next.js cuida disso)
   - Node version: `18` (ou superior)

5. **Deploy:**
   - Clique em "Deploy site"
   - Aguarde o build completar

## Opção 2: Deploy Manual (Drag and Drop)

1. **Build local:**
   ```bash
   npm run build
   ```

2. **Acesse Netlify:**
   - Vá para https://app.netlify.com
   - Arraste a pasta `.next` para a área de deploy

## Configurações Importantes

### Variáveis de Ambiente (se necessário)

Se você precisar de variáveis de ambiente:
1. Vá em Site settings > Environment variables
2. Adicione suas variáveis (ex: API keys, URLs)

### Domínio Personalizado

1. Vá em Site settings > Domain management
2. Adicione seu domínio personalizado
3. Configure o DNS conforme instruções

## Notas

- O arquivo `netlify.toml` já está configurado
- O plugin `@netlify/plugin-nextjs` será instalado automaticamente
- O Next.js 14 funciona nativamente na Netlify

## Troubleshooting

### Erro de Build
- Verifique se todas as dependências estão no `package.json`
- Certifique-se de que o Node.js 18+ está configurado

### Imagens não carregam
- Verifique se as imagens estão na pasta `public/`
- Verifique as configurações de `next.config.js` para imagens remotas

### Erro 404 em rotas
- O plugin do Next.js cuida das rotas automaticamente
- Se persistir, verifique o `netlify.toml`

