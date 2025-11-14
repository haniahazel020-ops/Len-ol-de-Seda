# Instruções para Enviar Código para GitHub

## ⚠️ Problema com Terminal

O terminal automático está tendo problemas com caracteres especiais no caminho. Execute os comandos manualmente:

## 📋 Passo a Passo Manual

### 1. Abra o Terminal/PowerShell na pasta do projeto

Navegue até a pasta do projeto:
```
C:\Users\Usuário\Desktop\projetos 24092024\Projetos\Fat
```

### 2. Execute os comandos (um por vez):

```powershell
# Configurar Git
git config --global user.email "haniahazel020@gmail.com"
git config --global user.name "haniahazel020-ops"

# Inicializar Git
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Initial commit - Lençol de Seda"

# Conectar com GitHub
git remote add origin https://github.com/haniahazel020-ops/Len-ol-de-Seda.git

# Criar branch main
git branch -M main

# Enviar para GitHub
git push -u origin main
```

### 3. Quando pedir autenticação

O GitHub pode pedir login. Use:
- **Usuário:** haniahazel020-ops
- **Senha:** Sua senha do GitHub (ou token de acesso pessoal)

## 🔑 Se pedir Token de Acesso

Se o GitHub pedir um token:

1. Vá para: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Dê um nome (ex: "Lençol de Seda")
4. Selecione escopo: `repo` (marcar tudo)
5. Clique em "Generate token"
6. Copie o token e use como senha quando pedir

## ✅ Alternativa: Usar GitHub Desktop

Se preferir interface gráfica:

1. Baixe GitHub Desktop: https://desktop.github.com
2. Faça login
3. File > Add Local Repository
4. Selecione a pasta do projeto
5. Publish repository
6. Escolha o repositório "Len-ol-de-Seda"

## 🚀 Depois de enviar

Volte ao Railway e:
1. Escolha "GitHub Repository"
2. Selecione "Len-ol-de-Seda"
3. Clique em "Deploy"

