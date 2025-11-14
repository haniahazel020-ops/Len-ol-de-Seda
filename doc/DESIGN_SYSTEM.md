# Design System - Sistema Premium

## 🎨 Visão Geral

Design system premium focado em elegância, sofisticação e experiência de usuário excepcional, seguindo princípios do HIG (Apple) e Growth Hacking.

## 🎨 Paleta de Cores

### Cores Primárias

#### Primary (Dourado/Ouro Elegante)
```typescript
primary: {
  50: '#FFFBF0',   // Muito claro
  100: '#FFF4D6',  // Claro
  200: '#FFE8B3',  // Médio claro
  300: '#FFDC90',  // Médio
  400: '#FFD06D',  // Médio escuro
  500: '#FFC44A',  // Base (Principal)
  600: '#E6B043',  // Hover
  700: '#CC9C3C',  // Active
  800: '#B38835',  // Escuro
  900: '#99742E',  // Muito escuro
}
```

#### Secondary (Roxo/Violeta Sofisticado)
```typescript
secondary: {
  50: '#F5F3FF',
  100: '#E9E3FF',
  200: '#D3C7FF',
  300: '#BDABFF',
  400: '#A78FFF',
  500: '#9173FF',  // Base
  600: '#8268E6',
  700: '#735DCC',
  800: '#6452B3',
  900: '#554799',
}
```

#### Accent (Rosa/Coral Premium)
```typescript
accent: {
  50: '#FFF0F5',
  100: '#FFE0EB',
  200: '#FFC1D7',
  300: '#FFA2C3',
  400: '#FF83AF',
  500: '#FF649B',  // Base
  600: '#E65A8C',
  700: '#CC507D',
  800: '#B3466E',
  900: '#993C5F',
}
```

### Cores Neutras

```typescript
grey: {
  50: '#FAFAFA',   // Background muito claro
  100: '#F5F5F5',  // Background claro
  200: '#EEEEEE',  // Dividers
  300: '#E0E0E0',  // Borders
  400: '#BDBDBD',  // Texto desabilitado
  500: '#9E9E9E',  // Texto secundário
  600: '#757575',  // Texto secundário escuro
  700: '#616161',  // Texto primário claro
  800: '#424242',  // Texto primário
  900: '#212121',  // Texto primário escuro
}
```

### Cores de Estado

```typescript
success: {
  light: '#81C784',
  main: '#4CAF50',
  dark: '#388E3C',
}

error: {
  light: '#E57373',
  main: '#F44336',
  dark: '#D32F2F',
}

warning: {
  light: '#FFB74D',
  main: '#FF9800',
  dark: '#F57C00',
}

info: {
  light: '#64B5F6',
  main: '#2196F3',
  dark: '#1976D2',
}
```

## 📝 Tipografia

### Fontes

**Primária**: Inter ou Roboto (Material UI padrão)
**Secundária**: Playfair Display (para títulos elegantes, opcional)

### Escala Tipográfica

```typescript
h1: {
  fontSize: '3rem',      // 48px
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
}

h2: {
  fontSize: '2.25rem',   // 36px
  fontWeight: 700,
  lineHeight: 1.3,
  letterSpacing: '-0.01em',
}

h3: {
  fontSize: '1.875rem', // 30px
  fontWeight: 600,
  lineHeight: 1.4,
}

h4: {
  fontSize: '1.5rem',   // 24px
  fontWeight: 600,
  lineHeight: 1.4,
}

h5: {
  fontSize: '1.25rem',  // 20px
  fontWeight: 600,
  lineHeight: 1.5,
}

h6: {
  fontSize: '1.125rem', // 18px
  fontWeight: 600,
  lineHeight: 1.5,
}

body1: {
  fontSize: '1rem',     // 16px
  fontWeight: 400,
  lineHeight: 1.6,
}

body2: {
  fontSize: '0.875rem', // 14px
  fontWeight: 400,
  lineHeight: 1.6,
}

caption: {
  fontSize: '0.75rem',  // 12px
  fontWeight: 400,
  lineHeight: 1.5,
}
```

### Responsividade Tipográfica

```typescript
// Mobile
h1: '2rem'      // 32px
h2: '1.75rem'   // 28px
h3: '1.5rem'    // 24px

// Tablet
h1: '2.5rem'    // 40px
h2: '2rem'      // 32px

// Desktop
h1: '3rem'      // 48px
h2: '2.25rem'   // 36px
```

## 📏 Espaçamento

### Sistema de Grid (8px base)

```typescript
spacing: 8, // Base unit

// Valores comuns
xs: 4,   // 0.5 * 8
sm: 8,   // 1 * 8
md: 16,  // 2 * 8
lg: 24,  // 3 * 8
xl: 32,  // 4 * 8
xxl: 48, // 6 * 8
xxxl: 64, // 8 * 8
```

### Aplicação

- **Padding interno**: 16px (md)
- **Margin entre elementos**: 24px (lg)
- **Espaçamento de seções**: 48px (xxl)
- **Espaçamento de páginas**: 64px (xxxl)

## 🎭 Sombras e Elevações

### Níveis de Elevação

```typescript
shadows: {
  0: 'none',
  1: '0px 2px 4px rgba(0, 0, 0, 0.08)',
  2: '0px 4px 8px rgba(0, 0, 0, 0.12)',
  3: '0px 8px 16px rgba(0, 0, 0, 0.16)',
  4: '0px 12px 24px rgba(0, 0, 0, 0.20)',
  5: '0px 16px 32px rgba(0, 0, 0, 0.24)',
}
```

### Uso por Componente

- **Cards**: Elevação 2-3
- **Modals**: Elevação 4-5
- **AppBar**: Elevação 1
- **Hover states**: +1 nível de elevação

## 🔲 Border Radius

```typescript
borderRadius: {
  none: 0,
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  round: '50%',
  pill: '9999px',
}
```

### Aplicação

- **Botões**: 8px (sm)
- **Cards**: 12px (md)
- **Inputs**: 8px (sm)
- **Modals**: 16px (lg)
- **Avatares**: 50% (round)

## 🎬 Animações e Transições

### Durações

```typescript
duration: {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
}
```

### Easing Functions

```typescript
easing: {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
}
```

### Transições Comuns

```typescript
// Hover
transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'

// Fade
transition: 'opacity 0.3s ease-in-out'

// Slide
transition: 'transform 0.3s ease-out'

// Scale
transition: 'transform 0.2s ease-out'
```

## 🎨 Componentes Base

### Button

#### Variantes
- **Contained**: Fundo sólido, texto branco
- **Outlined**: Borda, fundo transparente
- **Text**: Apenas texto, sem borda

#### Estados
- **Default**: Cor primária
- **Hover**: Escurece 10%
- **Active**: Escurece 20%
- **Disabled**: Opacidade 0.5

#### Tamanhos
- **Small**: 32px altura
- **Medium**: 40px altura (padrão)
- **Large**: 48px altura

### Card

#### Estrutura
- **Elevation**: 2 (padrão), 3 (hover)
- **Border Radius**: 12px
- **Padding**: 24px
- **Background**: Branco

#### Variantes
- **Default**: Elevação padrão
- **Hover**: Elevação aumentada + transição
- **Interactive**: Cursor pointer

### Input/TextField

#### Estados
- **Default**: Borda cinza claro
- **Focus**: Borda primária, shadow sutil
- **Error**: Borda vermelha
- **Disabled**: Fundo cinza claro, texto desabilitado

#### Tamanhos
- **Small**: 40px altura
- **Medium**: 48px altura (padrão)
- **Large**: 56px altura

## 🎯 Princípios de Design

### HIG (Apple Human Interface Guidelines)

1. **Clareza**
   - Texto legível em todos os tamanhos
   - Ícones precisos e claros
   - Espaçamento generoso

2. **Feedback**
   - Respostas imediatas a todas as ações
   - Estados visuais claros
   - Animações sutis

3. **Consistência**
   - Padrões de interface consistentes
   - Nomenclatura padronizada
   - Comportamentos previsíveis

4. **Profundidade**
   - Hierarquia visual clara
   - Uso de sombras e elevações
   - Transições suaves

### Growth Hacking (Sean Ellis)

1. **CTAs Estratégicos**
   - Posicionamento otimizado
   - Cores contrastantes
   - Textos persuasivos
   - Múltiplos pontos de conversão

2. **Redução de Fricção**
   - Formulários simplificados
   - Processos em steps
   - Auto-save
   - Validação em tempo real

3. **Social Proof**
   - Reviews destacadas
   - Números de usuários
   - Badges de confiança
   - Testimonials

### KISS (Keep It Simple, Stupid)

1. **Simplicidade Visual**
   - Menos é mais
   - Espaço em branco generoso
   - Foco no essencial

2. **Simplicidade Funcional**
   - Ações claras
   - Navegação intuitiva
   - Sem sobrecarga de opções

## 🎨 Elementos Premium

### Gradientes

```typescript
gradients: {
  primary: 'linear-gradient(135deg, #FFC44A 0%, #FFD06D 100%)',
  secondary: 'linear-gradient(135deg, #9173FF 0%, #A78FFF 100%)',
  accent: 'linear-gradient(135deg, #FF649B 0%, #FF83AF 100%)',
  subtle: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
}
```

### Glassmorphism (Opcional)

```typescript
glass: {
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
}
```

## 📱 Responsividade

### Breakpoints

```typescript
xs: 0px      // Mobile pequeno
sm: 600px    // Mobile grande
md: 960px    // Tablet
lg: 1280px   // Desktop
xl: 1920px   // Desktop grande
```

### Grid System

- **Mobile**: 1 coluna
- **Tablet**: 2-3 colunas
- **Desktop**: 3-4 colunas
- **Large**: 4-6 colunas

## 🎭 Microinterações

### Hover Effects

- **Cards**: Elevação + scale(1.02)
- **Buttons**: Escurece + scale(0.98)
- **Links**: Underline animado
- **Images**: Zoom sutil (1.05)

### Loading States

- **Skeleton Loaders**: Animação shimmer
- **Spinners**: Rotação suave
- **Progress Bars**: Preenchimento animado

### Feedback Visual

- **Success**: Toast verde com ícone
- **Error**: Toast vermelho com ícone
- **Info**: Toast azul com ícone
- **Warning**: Toast laranja com ícone

## 📐 Layout Patterns

### Container Max Widths

```typescript
container: {
  xs: '100%',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1440px',
}
```

### Spacing Patterns

- **Section Spacing**: 64px vertical
- **Component Spacing**: 32px vertical
- **Element Spacing**: 16px vertical
- **Inline Spacing**: 8-16px horizontal

## 🎨 Acessibilidade

### Contraste

- **Texto normal**: Mínimo 4.5:1
- **Texto grande**: Mínimo 3:1
- **Componentes UI**: Mínimo 3:1

### Touch Targets

- **Mínimo**: 44x44px
- **Recomendado**: 48x48px
- **Espaçamento**: Mínimo 8px entre targets

### Foco

- **Outline**: 2px sólido, cor primária
- **Offset**: 2px do elemento
- **Visível**: Sempre visível em navegação por teclado

## 📝 Guia de Uso

### Quando Usar Cada Cor

- **Primary**: Ações principais, CTAs, destaques
- **Secondary**: Ações secundárias, acentos
- **Accent**: Destaques especiais, badges
- **Neutrals**: Textos, backgrounds, borders

### Quando Usar Cada Elevação

- **0-1**: Elementos planos, dividers
- **2-3**: Cards, containers
- **4-5**: Modals, dropdowns, popovers

### Quando Usar Cada Espaçamento

- **xs-sm**: Espaçamento interno pequeno
- **md**: Espaçamento padrão
- **lg-xl**: Espaçamento entre componentes
- **xxl-xxxl**: Espaçamento entre seções

---

**Última atualização**: Data de criação
**Versão**: 1.0.0

