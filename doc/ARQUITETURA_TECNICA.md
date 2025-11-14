# Arquitetura Técnica - Sistema Premium

## 🏗️ Visão Geral da Arquitetura

Arquitetura modular baseada em Next.js 14+ com App Router, seguindo princípios de separação de concerns e escalabilidade.

## 📐 Padrão Arquitetural

### Frontend (MVP)
```
Next.js App Router
├── Pages (App Router)
├── Components (Modulares)
├── Lib (Utilitários)
├── Types (TypeScript)
└── Styles (Global)
```

### Backend (Futuro)
```
API Modular
├── Auth Service
├── Rooms Service
├── Escorts Service
├── Stories Service
├── Payments Service
└── Media Service
```

## 🔌 Estrutura de Pastas Detalhada

### `/src/app`
Estrutura do Next.js App Router:

```
app/
├── (auth)/              # Grupo de rotas de autenticação
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
├── (main)/              # Grupo de rotas principais
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Homepage
│   ├── rooms/
│   │   ├── page.tsx     # Listagem
│   │   ├── [id]/
│   │   │   └── page.tsx # Detalhes
│   │   └── publish/
│   │       └── page.tsx # Publicar
│   ├── escorts/
│   │   ├── page.tsx
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── publish/
│   │       └── page.tsx
│   └── stories/
│       ├── page.tsx
│       ├── [id]/
│       │   └── page.tsx
│       ├── publish/
│       │   └── page.tsx
│       └── read/
│           └── [id]/
│               └── page.tsx
└── layout.tsx           # Root layout
```

### `/src/components`
Componentes modulares por funcionalidade:

```
components/
├── common/              # Componentes compartilhados
│   ├── Header/
│   │   ├── index.tsx
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── UserMenu.tsx
│   ├── Footer/
│   ├── Button/
│   ├── Card/
│   ├── Modal/
│   ├── Loading/
│   ├── SearchBar/
│   └── FilterPanel/
├── rooms/               # Componentes específicos de quartos
│   ├── RoomCard/
│   ├── RoomGallery/
│   ├── RoomCalendar/
│   ├── RoomFilters/
│   └── RoomForm/
├── escorts/             # Componentes específicos de acompanhantes
│   ├── EscortCard/
│   ├── EscortProfile/
│   ├── EscortFilters/
│   ├── EscortForm/
│   └── MediaGallery/
└── stories/             # Componentes específicos de contos
    ├── StoryCard/
    ├── StoryReader/
    ├── StoryEditor/
    ├── StoryFilters/
    └── CategoryTags/
```

### `/src/lib`
Utilitários e configurações:

```
lib/
├── utils/
│   ├── formatters.ts    # Formatação de dados
│   ├── validators.ts    # Validações customizadas
│   └── constants.ts     # Constantes da aplicação
├── hooks/
│   ├── useMediaQuery.ts # Hook para media queries
│   ├── useDebounce.ts   # Hook para debounce
│   └── useLocalStorage.ts # Hook para localStorage
└── theme/
    ├── theme.ts         # Configuração do tema MUI
    └── palette.ts       # Paleta de cores
```

### `/src/types`
Definições TypeScript:

```
types/
├── index.ts             # Exports gerais
├── rooms.ts             # Tipos de quartos
├── escorts.ts           # Tipos de acompanhantes
├── stories.ts           # Tipos de contos
└── user.ts              # Tipos de usuário
```

## 🔄 Fluxo de Dados (MVP - Mock)

### Estado Local
- **React State**: Para estado de componentes
- **React Hook Form**: Para formulários
- **LocalStorage**: Para favoritos e rascunhos (mock)

### Estado Global (Futuro)
- **Context API** ou **Zustand**: Para estado compartilhado
- **React Query**: Para cache e sincronização de dados

## 🎨 Sistema de Design

### Material UI Theme
```typescript
// lib/theme/theme.ts
const theme = createTheme({
  palette: {
    primary: { ... },
    secondary: { ... },
    // ...
  },
  typography: { ... },
  spacing: 8, // Base unit
  // ...
});
```

### Componentes Customizados
Todos os componentes seguem o design system, mas podem ter customizações específicas.

## 📦 Gerenciamento de Estado (Futuro)

### Estrutura Proposta
```
State Management
├── Auth State (Context/Redux)
├── UI State (Local/Context)
├── Data Cache (React Query)
└── Form State (React Hook Form)
```

## 🔐 Autenticação (Futuro)

### Fluxo Proposto
1. Login/Registro via Supabase Auth
2. JWT tokens armazenados (httpOnly cookies)
3. Middleware de autenticação no Next.js
4. Proteção de rotas por perfil

## 📡 API Structure (Futuro)

### Endpoints Propostos
```
/api
├── auth/
│   ├── login
│   ├── register
│   └── refresh
├── rooms/
│   ├── GET /          # Listar
│   ├── GET /:id       # Detalhes
│   ├── POST /         # Criar
│   ├── PUT /:id       # Atualizar
│   └── DELETE /:id    # Deletar
├── escorts/
│   └── (similar)
├── stories/
│   └── (similar)
└── media/
    ├── upload
    └── delete
```

## 🗄️ Banco de Dados (Futuro - Supabase)

### Estrutura de Tabelas Proposta

#### Users
```sql
- id (uuid)
- email (string)
- role (enum: client, escort, owner, writer, admin)
- profile_data (jsonb)
- created_at (timestamp)
- updated_at (timestamp)
```

#### Rooms
```sql
- id (uuid)
- owner_id (uuid, FK)
- title (string)
- description (text)
- location (jsonb)
- price_per_night (decimal)
- amenities (jsonb)
- availability_calendar (jsonb)
- images (array)
- created_at (timestamp)
- updated_at (timestamp)
```

#### Escorts
```sql
- id (uuid)
- user_id (uuid, FK)
- name (string)
- description (text)
- location (jsonb)
- services (jsonb)
- pricing (jsonb)
- media (jsonb)
- verified (boolean)
- created_at (timestamp)
- updated_at (timestamp)
```

#### Stories
```sql
- id (uuid)
- writer_id (uuid, FK)
- title (string)
- content (text)
- category (string)
- tags (array)
- is_premium (boolean)
- cover_image (string)
- rating (decimal)
- created_at (timestamp)
- updated_at (timestamp)
```

## 🖼️ Gerenciamento de Mídia (Futuro)

### Estratégia
- **Storage**: Supabase Storage ou AWS S3
- **CDN**: Para entrega otimizada
- **Processamento**: Resize e otimização automática
- **Limites**: 5MB por arquivo (validado)

## 🔒 Segurança

### Implementações (Futuro)
- [ ] HTTPS obrigatório
- [ ] CORS configurado
- [ ] Rate limiting
- [ ] Input sanitization
- [ ] XSS protection
- [ ] CSRF protection
- [ ] SQL injection prevention (Supabase já protege)
- [ ] File upload validation

## 📊 Logging (Futuro - Winston)

### Estrutura de Logs
```typescript
logger.info('User action', { userId, action, metadata });
logger.error('Error occurred', { error, context });
logger.warn('Warning', { message, context });
```

### Níveis de Log
- **Error**: Erros críticos
- **Warn**: Avisos importantes
- **Info**: Informações gerais
- **Debug**: Debug detalhado

## 🚀 Performance

### Otimizações Implementadas
- [ ] Next.js Image optimization
- [ ] Code splitting automático
- [ ] Lazy loading de componentes
- [ ] Prefetch estratégico
- [ ] Bundle optimization
- [ ] Caching strategies

### Métricas Alvo
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🧪 Estrutura de Testes (Futuro)

```
tests/
├── unit/
│   ├── components/
│   ├── utils/
│   └── hooks/
├── integration/
│   └── api/
└── e2e/
    └── flows/
```

## 📱 Responsividade

### Breakpoints (Material UI)
```typescript
xs: 0px      // Extra small devices
sm: 600px    // Small devices
md: 960px    // Medium devices
lg: 1280px   // Large devices
xl: 1920px   // Extra large devices
```

### Estratégia
- **Mobile First**: Desenvolvimento iniciado no mobile
- **Progressive Enhancement**: Melhorias para telas maiores
- **Touch Targets**: Mínimo 44x44px
- **Typography**: Escala responsiva

## 🔄 CI/CD (Futuro)

### Pipeline Proposto
1. **Lint**: ESLint + Prettier
2. **Type Check**: TypeScript
3. **Tests**: Unit + Integration
4. **Build**: Next.js build
5. **Deploy**: Vercel/Similar

## 📚 Convenções de Código

### Nomenclatura
- **Components**: PascalCase (`RoomCard.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useDebounce.ts`)
- **Utils**: camelCase (`formatters.ts`)
- **Types**: PascalCase (`Room.ts`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_FILE_SIZE`)

### Estrutura de Componente
```typescript
// Imports externos
import React from 'react';
import { Box } from '@mui/material';

// Imports internos
import { RoomCardProps } from '@/types/rooms';
import { formatPrice } from '@/lib/utils/formatters';

// Types
interface ComponentProps {
  // ...
}

// Component
export const Component: React.FC<ComponentProps> = ({ ... }) => {
  // Hooks
  // State
  // Effects
  // Handlers
  // Render
  return (...);
};
```

## 🎯 Princípios de Arquitetura

1. **Modularidade**: Cada módulo é independente
2. **Reutilização**: Componentes e utilitários reutilizáveis
3. **Separação de Concerns**: Lógica separada da apresentação
4. **Type Safety**: TypeScript em todo o código
5. **Performance**: Otimizações desde o início
6. **Escalabilidade**: Preparado para crescimento
7. **Manutenibilidade**: Código limpo e documentado

## 📝 Notas de Implementação

- **MVP**: Tudo mock, foco em layout
- **Futuro**: Backend modular, Supabase, Stripe
- **Modularidade**: Cada sessão é um módulo independente
- **TypeScript**: Tipagem forte em todo o projeto
- **Material UI**: Componentes base, customização quando necessário

