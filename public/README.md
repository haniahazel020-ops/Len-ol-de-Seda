# Pasta de Arquivos Estáticos

Esta é a pasta `public` do Next.js, onde você coloca arquivos estáticos como imagens, ícones, etc.

## 📁 Estrutura Recomendada

```
/public
  /images
    hero.jpg          # Imagem do hero (homepage)
    logo.png          # Logo do site
    favicon.ico       # Ícone do site
  /icons
    icon-*.png        # Ícones diversos
```

## 🖼️ Como Usar Imagens

### No Hero (Homepage)
Coloque sua imagem em: `/public/images/hero.jpg`

**Recomendações:**
- Resolução: 1920x1080px ou maior
- Formato: JPG ou PNG
- Tamanho: Otimize para web (máx 500KB recomendado)
- Assunto: Imagem elegante e sofisticada que combine com o tema premium

### Exemplo de Uso no Código

```tsx
// A imagem em /public/images/hero.jpg
// é acessada como /images/hero.jpg no código
<Image src="/images/hero.jpg" alt="Hero" />
```

## 📝 Notas

- Arquivos em `/public` são servidos diretamente
- Não precisa importar, apenas use o caminho começando com `/`
- O Next.js otimiza automaticamente imagens usando o componente `Image`
- Se a imagem não existir, o gradiente de fundo será exibido como fallback

