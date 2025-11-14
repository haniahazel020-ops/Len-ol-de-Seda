# Plano de Implementação - Sistema Premium de Acompanhantes

## 📋 Visão Geral

Sistema web premium com três sessões principais:
1. **Sessão Quartos** - Aluguel de quartos (estilo Airbnb)
2. **Sessão Acompanhantes** - Anúncios de serviços com fotos e vídeos
3. **Sessão Contos** - Publicação e leitura de contos (free e premium)

## 🎯 Objetivo do MVP

Criar o layout inicial completo sem backend, focando em:
- Design premium e elegante
- Experiência de usuário "wow"
- Responsividade completa
- Estrutura modular e escalável

---

## 🏗️ Arquitetura e Tecnologias

### Stack Principal

- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript
- **UI Library**: Material UI (MUI) v5+
- **Estilização**: Emotion (padrão do MUI)
- **Formulários**: React Hook Form
- **Validação**: Zod
- **Datas**: date-fns
- **Utilitários**: clsx, date-fns

### Banco de Dados (Futuro)

- **Backend**: API separada e modular
- **Database**: Supabase
- **Pagamentos**: Stripe
- **Logs**: Winston

### Princípios de Design

1. **HIG (Apple Human Interface Guidelines)**
   - Clareza visual
   - Feedback imediato
   - Consistência
   - Profundidade e hierarquia

2. **Growth Hacking (Sean Ellis)**
   - CTAs estratégicos
   - Redução de fricção
   - Social proof
   - Estrutura pronta para testes A/B

3. **KISS (Keep It Simple, Stupid)**
   - Componentes reutilizáveis
   - Código limpo
   - Evitar over-engineering
   - Foco no essencial

4. **UI/UX "Wow"**
   - Animações sutis
   - Transições suaves
   - Feedback visual imediato
   - Design premium

---

## 📁 Estrutura de Arquivos

```
/fat
  /src
    /app
      /(auth)
        /login
        /register
      /(main)
        /
        /rooms
          /[id]
          /publish
        /escorts
          /[id]
          /publish
        /stories
          /[id]
          /publish
          /read/[id]
      /layout.tsx
      /page.tsx
    /components
      /common
        /Header
        /Footer
        /Button
        /Card
        /Modal
        /Loading
        /SearchBar
        /FilterPanel
      /rooms
        /RoomCard
        /RoomGallery
        /RoomCalendar
        /RoomFilters
        /RoomForm
      /escorts
        /EscortCard
        /EscortProfile
        /EscortFilters
        /EscortForm
        /MediaGallery
      /stories
        /StoryCard
        /StoryReader
        /StoryEditor
        /StoryFilters
        /CategoryTags
    /lib
      /utils
        /formatters.ts
        /validators.ts
        /constants.ts
      /hooks
        /useMediaQuery.ts
        /useDebounce.ts
      /theme
        /theme.ts
        /palette.ts
    /types
      /index.ts
      /rooms.ts
      /escorts.ts
      /stories.ts
      /user.ts
    /styles
      /globals.css
  /public
    /images
    /icons
  /doc
    /PLANO_IMPLEMENTACAO.md
  package.json
  tsconfig.json
  next.config.js
  .env.local.example
  README.md
```

---

## 🚀 Fases de Implementação

### Fase 1: Estrutura Base e Design System

**Objetivo**: Criar a base do projeto com design system premium

#### 1.1. Inicialização do Projeto
- [ ] Criar projeto Next.js 14+ com TypeScript
- [ ] Configurar ESLint e Prettier
- [ ] Configurar paths aliases no tsconfig.json
- [ ] Criar estrutura de pastas modular

#### 1.2. Design System Premium
- [ ] Instalar Material UI e dependências
- [ ] Criar paleta de cores premium
- [ ] Configurar tema customizado (MUI Theme)
- [ ] Definir tokens de design:
  - Cores primárias, secundárias, neutras
  - Tipografia (fontes, tamanhos, pesos)
  - Espaçamentos (grid system)
  - Sombras e elevações
  - Border radius
  - Transições e animações

#### 1.3. Componentes Base Reutilizáveis
- [ ] Button (variantes premium)
- [ ] Card (com elevações e sombras)
- [ ] Input/TextField (estilizado)
- [ ] Typography (variantes customizadas)
- [ ] Container/Grid (sistema responsivo)

**Entregáveis**:
- Projeto Next.js configurado
- Tema Material UI premium aplicado
- Componentes base funcionando
- Documentação do design system

---

### Fase 2: Layout Principal e Navegação

**Objetivo**: Criar a estrutura visual base da aplicação

#### 2.1. Layout Principal
- [ ] Criar componente Header:
  - Logo/Brand
  - Navegação principal (Quartos, Acompanhantes, Contos)
  - Menu de usuário (login/registro mock)
  - Ícone de notificações (mock)
  - Busca global (mock)
- [ ] Criar componente Footer:
  - Links importantes
  - Redes sociais
  - Informações legais
  - Copyright
- [ ] Criar Layout wrapper (app/layout.tsx)
- [ ] Aplicar responsividade mobile-first

#### 2.2. Sistema de Navegação (HIG Apple)
- [ ] Navegação principal clara e intuitiva
- [ ] Breadcrumbs quando necessário
- [ ] Estados de hover e active
- [ ] Transições suaves
- [ ] Menu mobile (drawer)

#### 2.3. Páginas Principais
- [ ] Homepage (/):
  - Hero section premium
  - Preview das 3 sessões
  - CTAs estratégicos
  - Social proof (mock)
- [ ] Página de Login (/login):
  - Formulário elegante
  - Validação visual
  - Links para registro
- [ ] Página de Registro (/register):
  - Formulário multi-step (opcional)
  - Seleção de perfil (cliente, acompanhante, proprietário, escritor)
  - Validação completa

**Entregáveis**:
- Layout principal responsivo
- Navegação funcional
- Homepage atrativa
- Páginas de autenticação (mock)

---

### Fase 3: Sessão Quartos (Airbnb-style)

**Objetivo**: Layout completo da funcionalidade de quartos

#### 3.1. Listagem de Quartos (/rooms)
- [ ] Componente RoomCard:
  - Imagem principal
  - Título e localização
  - Preço por noite
  - Avaliação (estrelas)
  - Badges (superhost, instant book, etc.)
  - Hover effects premium
- [ ] Grid responsivo de quartos
- [ ] Componente RoomFilters:
  - Filtro de localização (busca)
  - Filtro de datas (date picker)
  - Filtro de preço (range slider)
  - Filtros adicionais (quartos, banheiros, comodidades)
  - Botão de limpar filtros
- [ ] Componente SearchBar:
  - Busca por texto
  - Sugestões de localização (mock)
- [ ] Paginação elegante
- [ ] Loading states
- [ ] Empty states

#### 3.2. Detalhes do Quarto (/rooms/[id])
- [ ] Componente RoomGallery:
  - Galeria de imagens (lightbox)
  - Navegação entre imagens
  - Zoom
  - Indicadores
- [ ] Informações principais:
  - Título e localização
  - Avaliação e número de reviews
  - Host information (mock)
  - Descrição completa
  - Comodidades (lista)
  - Regras da casa
- [ ] Componente RoomCalendar:
  - Calendário de disponibilidade (mock)
  - Seleção de datas
  - Preços por data (mock)
  - Bloqueios visuais
- [ ] Seção de Avaliações:
  - Lista de reviews (mock)
  - Filtros de avaliação
  - Formulário de avaliação (mock, apenas para logados)
- [ ] Sidebar de reserva:
  - Preço por noite
  - Datas selecionadas
  - Cálculo de total
  - Botão de reserva (mock)
  - Informações de cancelamento
- [ ] Mapa de localização (mock, integração futura)

#### 3.3. Formulário de Publicação (/rooms/publish)
- [ ] Componente RoomForm:
  - Step 1: Informações básicas (título, descrição, tipo)
  - Step 2: Localização (endereço, mapa)
  - Step 3: Detalhes (quartos, banheiros, capacidade, comodidades)
  - Step 4: Fotos (upload múltiplo, drag & drop, preview)
  - Step 5: Preços e disponibilidade
  - Step 6: Regras e políticas
  - Navegação entre steps
  - Validação por step
  - Preview antes de publicar
  - Botão de salvar rascunho (mock)

**Entregáveis**:
- Listagem de quartos completa
- Página de detalhes rica
- Formulário de publicação multi-step
- Todos os componentes funcionais (mock)

---

### Fase 4: Sessão Acompanhantes

**Objetivo**: Layout para anúncios de serviços

#### 4.1. Listagem de Anúncios (/escorts)
- [ ] Componente EscortCard:
  - Foto principal (aspect ratio premium)
  - Nome e idade
  - Localização
  - Preço/hora
  - Badges (verificado, premium, novo)
  - Rating (estrelas)
  - Botão de favorito (mock)
  - Hover effects elegantes
- [ ] Grid responsivo (masonry ou uniforme)
- [ ] Componente EscortFilters:
  - Filtro de localização
  - Filtro de preço (range)
  - Filtro de características físicas
  - Filtro de serviços oferecidos
  - Filtro de disponibilidade
  - Filtro de verificação
  - Botão de limpar
- [ ] Busca avançada:
  - Busca por texto
  - Filtros combinados
  - Ordenação (preço, rating, recente)
- [ ] Sistema de favoritos (mock):
  - Ícone de coração
  - Lista de favoritos
  - Persistência local (localStorage)
- [ ] Paginação
- [ ] Loading e empty states

#### 4.2. Perfil Detalhado (/escorts/[id])
- [ ] Componente MediaGallery:
  - Galeria de fotos (grid)
  - Galeria de vídeos (se houver)
  - Lightbox para visualização
  - Navegação suave
  - Limite visual de 5MB por mídia
- [ ] Informações do perfil:
  - Nome e idade
  - Localização
  - Descrição completa
  - Características físicas
  - Serviços oferecidos
  - Disponibilidade
  - Preços detalhados
  - Badges e verificações
- [ ] Seção de Avaliações:
  - Reviews de clientes (mock)
  - Rating médio
  - Filtros de avaliação
  - Formulário de avaliação (mock)
- [ ] Botões de ação:
  - Contato (abre modal/chat mock)
  - Favoritar
  - Compartilhar
  - Reportar (mock)
- [ ] Informações de segurança (badges, verificação)

#### 4.3. Formulário de Anúncio (/escorts/publish)
- [ ] Componente EscortForm:
  - Step 1: Informações básicas (nome, idade, descrição)
  - Step 2: Localização e disponibilidade
  - Step 3: Características físicas
  - Step 4: Serviços e preços
  - Step 5: Fotos (upload múltiplo, drag & drop, preview, limite 5MB)
  - Step 6: Vídeos (upload, preview, limite 5MB)
  - Step 7: Verificação e segurança
  - Validação completa
  - Preview antes de publicar
  - Sistema de moderação (avisos visuais)

**Entregáveis**:
- Listagem de acompanhantes completa
- Perfil detalhado rico em mídia
- Formulário de publicação completo
- Sistema de favoritos (mock)

---

### Fase 5: Sessão Contos

**Objetivo**: Layout para publicação e leitura de contos

#### 5.1. Biblioteca de Contos (/stories)
- [ ] Componente StoryCard:
  - Capa/thumbnail
  - Título
  - Autor
  - Categorias/tags
  - Badge free/premium
  - Rating (estrelas)
  - Número de leituras (mock)
  - Preview de texto
  - Botão de ler/favoritar
  - Hover effects
- [ ] Grid/Lista responsiva
- [ ] Componente StoryFilters:
  - Filtro por categoria
  - Filtro free/premium
  - Filtro por rating
  - Filtro por tags
  - Ordenação (recente, popular, rating)
- [ ] Busca de contos:
  - Busca por título/autor
  - Busca por conteúdo
  - Sugestões
- [ ] Sistema de categorias/tags:
  - Nuvem de tags
  - Filtros por categoria
  - Badges coloridos
- [ ] Paginação
- [ ] Loading e empty states

#### 5.2. Leitor de Contos (/stories/read/[id])
- [ ] Componente StoryReader:
  - Visualização de contos free (completo)
  - Preview de contos premium (primeiras linhas + blur)
  - Tipografia otimizada para leitura
  - Controles de leitura:
    - Tamanho da fonte
    - Modo escuro/claro
    - Marcador de página (mock)
    - Progresso de leitura
  - Navegação (anterior/próximo capítulo se houver)
- [ ] Informações do conto:
  - Título e autor
  - Categorias/tags
  - Rating e reviews
  - Data de publicação
  - Número de leituras
- [ ] Seção de Comentários/Avaliações:
  - Lista de comentários (mock)
  - Formulário de comentário (mock)
  - Sistema de likes em comentários
  - Filtros de comentários
- [ ] Botão de assinatura (para contos premium):
  - Modal de assinatura (mock)
  - Informações de planos
  - CTA claro
- [ ] Recomendações relacionadas:
  - Contos do mesmo autor
  - Contos da mesma categoria
  - Contos similares

#### 5.3. Editor de Contos (/stories/publish)
- [ ] Componente StoryEditor:
  - Editor de texto rico (WYSIWYG ou markdown)
  - Formatação (negrito, itálico, listas, etc.)
  - Preview em tempo real
  - Contador de palavras
  - Auto-save (mock, localStorage)
- [ ] Formulário de publicação:
  - Título
  - Descrição/resumo
  - Seleção de categoria (múltipla)
  - Tags (input com autocomplete)
  - Upload de capa (thumbnail)
  - Seleção free/premium
  - Configurações de publicação (agendar, privado, etc.)
- [ ] Preview antes de publicar
- [ ] Validação completa
- [ ] Sistema de rascunhos (mock)

**Entregáveis**:
- Biblioteca de contos completa
- Leitor de contos elegante
- Editor de contos funcional
- Sistema de categorias/tags

---

### Fase 6: Elementos Premium e UX "Wow"

**Objetivo**: Adicionar elementos visuais e interações premium

#### 6.1. Animações e Transições
- [ ] Transições suaves entre páginas (Next.js transitions)
- [ ] Animações de hover em cards
- [ ] Loading states elegantes (skeleton loaders)
- [ ] Microinterações:
  - Botões com feedback visual
  - Inputs com animações
  - Modais com fade in/out
  - Toasts/notificações elegantes
- [ ] Scroll animations (fade in on scroll)
- [ ] Parallax effects sutis (se aplicável)

#### 6.2. Elementos Visuais Premium
- [ ] Gradientes sutis em backgrounds
- [ ] Sombras e elevações bem definidas
- [ ] Ícones premium (Material Icons ou custom)
- [ ] Tipografia refinada:
  - Hierarquia clara
  - Espaçamento adequado
  - Legibilidade otimizada
- [ ] Paleta de cores harmoniosa
- [ ] Espaçamento consistente (8px grid)

#### 6.3. Otimizações Growth Hacking
- [ ] CTAs estratégicos:
  - Posicionamento otimizado
  - Cores contrastantes
  - Textos persuasivos
  - Múltiplos pontos de conversão
- [ ] Social proof (mock):
  - Número de usuários
  - Reviews destacadas
  - Badges de confiança
  - Testimonials
- [ ] Elementos de urgência (mock):
  - "Últimas vagas"
  - "Oferta por tempo limitado"
  - Contadores (se aplicável)
- [ ] Onboarding visual (mock):
  - Tour guiado (opcional)
  - Tooltips informativos
  - Dicas contextuais

**Entregáveis**:
- Animações suaves implementadas
- Visual premium consistente
- Elementos de conversão otimizados

---

### Fase 7: Responsividade e Polimento

**Objetivo**: Garantir experiência consistente em todos os dispositivos

#### 7.1. Testes de Responsividade
- [ ] Mobile (320px - 767px):
  - Navegação mobile (drawer)
  - Cards em coluna única
  - Formulários otimizados
  - Touch targets adequados (min 44px)
- [ ] Tablet (768px - 1023px):
  - Grid adaptativo
  - Navegação híbrida
  - Layout otimizado
- [ ] Desktop (1024px - 1439px):
  - Layout completo
  - Sidebars quando necessário
  - Hover states
- [ ] Large screens (1440px+):
  - Max-width containers
  - Espaçamento otimizado
  - Não esticar demais

#### 7.2. Acessibilidade
- [ ] Navegação por teclado:
  - Tab order lógico
  - Skip links
  - Focus management
- [ ] Contraste adequado:
  - WCAG AA mínimo
  - Testes de contraste
- [ ] ARIA labels:
  - Labels descritivos
  - Roles apropriados
  - Estados anunciados
- [ ] Foco visível:
  - Outline customizado
  - Estados de foco claros

#### 7.3. Performance
- [ ] Otimização de imagens:
  - Next.js Image component
  - Lazy loading
  - Formatos otimizados (WebP)
  - Sizes apropriados
- [ ] Code splitting:
  - Dynamic imports
  - Route-based splitting
- [ ] Bundle optimization:
  - Tree shaking
  - Análise de bundle
  - Remoção de código não usado
- [ ] Loading strategies:
  - Skeleton loaders
  - Progressive loading
  - Prefetch estratégico

**Entregáveis**:
- Aplicação totalmente responsiva
- Acessibilidade implementada
- Performance otimizada

---

## 👥 Perfis de Usuário

### Cliente
- Visualizar quartos, acompanhantes e contos
- Fazer reservas (mock)
- Favoritar itens
- Avaliar e comentar
- Assinar contos premium (mock)

### Acompanhante
- Publicar anúncio
- Gerenciar perfil
- Responder mensagens (mock)
- Ver estatísticas (mock)

### Proprietário
- Publicar quartos
- Gerenciar reservas (mock)
- Calendário de disponibilidade
- Avaliações

### Escritor
- Publicar contos
- Gerenciar biblioteca
- Ver estatísticas (mock)
- Configurar preços premium

### Admin
- Moderação de conteúdo
- Gerenciamento de usuários
- Estatísticas gerais
- Configurações do sistema

---

## 🎨 Paleta de Cores Premium

### Cores Primárias
- **Primary**: Tons de dourado/ouro elegante
- **Secondary**: Tons de roxo/violeta sofisticado
- **Accent**: Tons de rosa/coral premium

### Cores Neutras
- **Background**: Branco puro / Cinza muito claro
- **Surface**: Branco / Cinza claro
- **Text Primary**: Preto / Cinza escuro
- **Text Secondary**: Cinza médio

### Cores de Estado
- **Success**: Verde elegante
- **Error**: Vermelho suave
- **Warning**: Laranja/âmbar
- **Info**: Azul premium

---

## 📱 Breakpoints Responsivos

```typescript
xs: 0px      // Mobile pequeno
sm: 600px    // Mobile grande
md: 960px    // Tablet
lg: 1280px   // Desktop
xl: 1920px   // Desktop grande
```

---

## 🔒 Segurança e Moderação (Estrutura para Futuro)

### Sistema de Moderação
- [ ] Flag de conteúdo inapropriado
- [ ] Review manual (mock no MVP)
- [ ] Badges de verificação
- [ ] Sistema de denúncias
- [ ] Filtros automáticos (futuro)

### Validações
- [ ] Validação de imagens (tipo, tamanho)
- [ ] Validação de vídeos (tipo, tamanho, duração)
- [ ] Sanitização de textos
- [ ] Rate limiting (futuro)

---

## 📊 Métricas e Analytics (Estrutura para Futuro)

- [ ] Eventos de conversão (mock)
- [ ] Tracking de navegação (mock)
- [ ] Heatmaps (futuro)
- [ ] A/B testing ready (estrutura)

---

## 🧪 Testes (Futuro)

- [ ] Testes unitários (Jest)
- [ ] Testes de integração
- [ ] Testes E2E (Playwright/Cypress)
- [ ] Testes de acessibilidade

---

## 📦 Dependências Principais

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "@mui/material": "^5.14.0",
  "@mui/icons-material": "^5.14.0",
  "@emotion/react": "^11.11.0",
  "@emotion/styled": "^11.11.0",
  "react-hook-form": "^7.48.0",
  "zod": "^3.22.0",
  "@hookform/resolvers": "^3.3.0",
  "date-fns": "^2.30.0",
  "clsx": "^2.0.0"
}
```

---

## 🚦 Checklist de Entregas

### MVP - Layout Inicial
- [ ] Fase 1: Estrutura Base e Design System
- [ ] Fase 2: Layout Principal e Navegação
- [ ] Fase 3: Sessão Quartos
- [ ] Fase 4: Sessão Acompanhantes
- [ ] Fase 5: Sessão Contos
- [ ] Fase 6: Elementos Premium e UX "Wow"
- [ ] Fase 7: Responsividade e Polimento

### Documentação
- [ ] README.md com instruções
- [ ] Documentação de componentes
- [ ] Guia de estilo
- [ ] Arquitetura documentada

---

## 📝 Notas Importantes

1. **Tudo é mock no MVP**: Nenhuma funcionalidade real de backend será implementada
2. **Foco em layout**: Priorizar experiência visual e usabilidade
3. **Modularidade**: Cada componente deve ser independente e reutilizável
4. **Performance**: Otimizar desde o início (lazy loading, code splitting)
5. **Acessibilidade**: Implementar desde o início, não como afterthought
6. **Design Premium**: Manter consistência visual em todos os elementos

---

## 🔄 Próximas Fases (Após MVP)

1. **Backend API**: Implementar API modular
2. **Autenticação Real**: Integração com Supabase Auth
3. **Banco de Dados**: Estrutura no Supabase
4. **Upload de Mídia**: Integração com storage
5. **Pagamentos**: Integração com Stripe
6. **Sistema de Mensagens**: Chat em tempo real
7. **Notificações**: Sistema de notificações
8. **Moderação Real**: Sistema de moderação automatizado
9. **Analytics**: Tracking real de eventos
10. **Testes**: Suite completa de testes

---

## 📞 Contato e Suporte

Este documento será atualizado conforme o progresso do projeto.

**Última atualização**: Data de criação do documento
**Versão**: 1.0.0

