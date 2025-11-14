# Script para fazer deploy no GitHub
# Execute este script no terminal dentro da pasta do projeto

Write-Host "Configurando Git..." -ForegroundColor Green

# Configurar Git (se ainda não estiver configurado)
git config user.email "haniahazel020@gmail.com"
git config user.name "haniahazel020-ops"

Write-Host "Inicializando repositório Git..." -ForegroundColor Green
git init

Write-Host "Adicionando arquivos..." -ForegroundColor Green
git add .

Write-Host "Fazendo commit..." -ForegroundColor Green
git commit -m "Initial commit - Lençol de Seda"

Write-Host "Conectando com GitHub..." -ForegroundColor Green
git remote remove origin 2>$null
git remote add origin https://github.com/haniahazel020-ops/Len-ol-de-Seda.git

Write-Host "Criando branch main..." -ForegroundColor Green
git branch -M main

Write-Host "Enviando para GitHub..." -ForegroundColor Green
Write-Host "Você precisará fazer login no GitHub quando solicitado." -ForegroundColor Yellow
git push -u origin main

Write-Host "Concluído! Seu código foi enviado para o GitHub." -ForegroundColor Green

