# Requisitos Funcionais - Sistema Premium

## 📋 Visão Geral

Documento detalhando todos os requisitos funcionais do sistema, organizados por sessão e perfil de usuário.

---

## 👥 Perfis de Usuário

### Cliente
Usuário que consome os serviços da plataforma.

### Acompanhante
Usuário que publica anúncios de serviços.

### Proprietário
Usuário que publica quartos para aluguel.

### Escritor
Usuário que publica contos na plataforma.

### Admin
Administrador do sistema com permissões totais.

---

## 🏠 Sessão Quartos (Airbnb-style)

### RF-Q01: Listagem de Quartos
**Prioridade**: Alta  
**Perfil**: Cliente, Proprietário

**Descrição**: O usuário deve poder visualizar uma listagem de quartos disponíveis.

**Funcionalidades**:
- Exibir quartos em grid responsivo
- Mostrar informações essenciais (foto, título, localização, preço)
- Paginação ou scroll infinito
- Loading states
- Empty states quando não houver resultados

**Mock no MVP**: Dados estáticos ou mock data

---

### RF-Q02: Filtros de Busca
**Prioridade**: Alta  
**Perfil**: Cliente

**Descrição**: O usuário deve poder filtrar quartos por diversos critérios.

**Funcionalidades**:
- Filtro por localização (busca por texto)
- Filtro por datas (date picker - check-in/check-out)
- Filtro por preço (range slider)
- Filtro por número de quartos
- Filtro por número de banheiros
- Filtro por comodidades (WiFi, ar condicionado, etc.)
- Filtro por tipo de propriedade
- Botão para limpar todos os filtros
- Contador de resultados filtrados

**Mock no MVP**: Filtros funcionais visualmente, sem lógica real

---

### RF-Q03: Busca por Texto
**Prioridade**: Média  
**Perfil**: Cliente

**Descrição**: O usuário deve poder buscar quartos por palavras-chave.

**Funcionalidades**:
- Campo de busca
- Busca por título, descrição, localização
- Sugestões de busca (mock)
- Histórico de buscas (localStorage)
- Resultados destacados

**Mock no MVP**: Busca visual, resultados mockados

---

### RF-Q04: Detalhes do Quarto
**Prioridade**: Alta  
**Perfil**: Cliente

**Descrição**: O usuário deve poder visualizar detalhes completos de um quarto.

**Funcionalidades**:
- Galeria de imagens (lightbox)
- Informações principais (título, localização, preço)
- Descrição completa
- Lista de comodidades
- Regras da casa
- Informações do host (mock)
- Avaliações e reviews (mock)
- Calendário de disponibilidade (mock)
- Mapa de localização (mock)
- Botão de reserva

**Mock no MVP**: Todos os dados mockados

---

### RF-Q05: Calendário de Disponibilidade
**Prioridade**: Alta  
**Perfil**: Cliente, Proprietário

**Descrição**: Exibir e selecionar datas disponíveis para reserva.

**Funcionalidades**:
- Calendário visual
- Datas disponíveis destacadas
- Datas ocupadas bloqueadas
- Seleção de check-in e check-out
- Preços por data (se variável)
- Cálculo automático de noites
- Validação de datas (check-out após check-in)

**Mock no MVP**: Calendário funcional, dados mockados

---

### RF-Q06: Sistema de Avaliações
**Prioridade**: Média  
**Perfil**: Cliente

**Descrição**: Visualizar e criar avaliações de quartos.

**Funcionalidades**:
- Lista de avaliações
- Rating médio (estrelas)
- Filtros de avaliação (mais recentes, mais úteis)
- Formulário de avaliação (apenas para usuários logados - mock)
- Upload de fotos na avaliação (mock)
- Sistema de "útil" nas avaliações (mock)

**Mock no MVP**: Avaliações mockadas, formulário visual

---

### RF-Q07: Publicação de Quarto
**Prioridade**: Alta  
**Perfil**: Proprietário

**Descrição**: Proprietário deve poder publicar um quarto na plataforma.

**Funcionalidades**:
- Formulário multi-step:
  - Step 1: Informações básicas (título, descrição, tipo)
  - Step 2: Localização (endereço, mapa)
  - Step 3: Detalhes (quartos, banheiros, capacidade, comodidades)
  - Step 4: Fotos (upload múltiplo, drag & drop, preview)
  - Step 5: Preços e disponibilidade
  - Step 6: Regras e políticas
- Validação em cada step
- Preview antes de publicar
- Salvar rascunho (localStorage)
- Navegação entre steps
- Indicador de progresso

**Mock no MVP**: Formulário completo, sem persistência real

---

### RF-Q08: Gerenciamento de Quartos
**Prioridade**: Média  
**Perfil**: Proprietário

**Descrição**: Proprietário deve poder gerenciar seus quartos publicados.

**Funcionalidades**:
- Lista de quartos publicados
- Editar quarto
- Desativar/Ativar quarto
- Deletar quarto
- Ver estatísticas (visualizações, reservas - mock)
- Gerenciar calendário de disponibilidade

**Mock no MVP**: Interface visual, sem persistência

---

### RF-Q09: Reserva de Quarto
**Prioridade**: Alta  
**Perfil**: Cliente

**Descrição**: Cliente deve poder fazer reserva de um quarto.

**Funcionalidades**:
- Seleção de datas
- Cálculo de preço total
- Informações de cancelamento
- Botão de reserva
- Modal de confirmação (mock)
- Integração com pagamento (futuro - Stripe)

**Mock no MVP**: Fluxo visual completo, sem processamento real

---

## 💃 Sessão Acompanhantes

### RF-E01: Listagem de Acompanhantes
**Prioridade**: Alta  
**Perfil**: Cliente, Acompanhante

**Descrição**: Exibir listagem de anúncios de acompanhantes.

**Funcionalidades**:
- Grid de perfis com fotos
- Informações essenciais (nome, idade, localização, preço)
- Badges (verificado, premium, novo)
- Rating (estrelas)
- Paginação
- Loading states
- Empty states

**Mock no MVP**: Dados mockados

---

### RF-E02: Filtros Avançados
**Prioridade**: Alta  
**Perfil**: Cliente

**Descrição**: Filtrar acompanhantes por diversos critérios.

**Funcionalidades**:
- Filtro por localização
- Filtro por preço (range)
- Filtro por características físicas
- Filtro por serviços oferecidos
- Filtro por disponibilidade
- Filtro por verificação (apenas verificados)
- Filtro por rating mínimo
- Ordenação (preço, rating, recente)
- Botão de limpar filtros

**Mock no MVP**: Filtros visuais funcionais

---

### RF-E03: Busca de Acompanhantes
**Prioridade**: Média  
**Perfil**: Cliente

**Descrição**: Buscar acompanhantes por texto.

**Funcionalidades**:
- Campo de busca
- Busca por nome, descrição, serviços
- Sugestões (mock)
- Resultados destacados

**Mock no MVP**: Busca visual

---

### RF-E04: Perfil Detalhado
**Prioridade**: Alta  
**Perfil**: Cliente

**Descrição**: Visualizar perfil completo de uma acompanhante.

**Funcionalidades**:
- Galeria de fotos (grid, lightbox)
- Galeria de vídeos (se houver)
- Informações do perfil:
  - Nome, idade
  - Localização
  - Descrição completa
  - Características físicas
  - Serviços oferecidos
  - Disponibilidade
  - Preços detalhados
- Badges e verificações
- Avaliações de clientes (mock)
- Botões de ação:
  - Contato (abre modal/chat - mock)
  - Favoritar
  - Compartilhar
  - Reportar (mock)

**Mock no MVP**: Todos os dados mockados

---

### RF-E05: Sistema de Favoritos
**Prioridade**: Média  
**Perfil**: Cliente

**Descrição**: Salvar acompanhantes favoritos.

**Funcionalidades**:
- Botão de favorito (coração)
- Lista de favoritos
- Persistência local (localStorage)
- Remover dos favoritos
- Compartilhar lista de favoritos (mock)

**Mock no MVP**: Funcional com localStorage

---

### RF-E06: Publicação de Anúncio
**Prioridade**: Alta  
**Perfil**: Acompanhante

**Descrição**: Acompanhante deve poder publicar seu anúncio.

**Funcionalidades**:
- Formulário multi-step:
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
- Salvar rascunho (localStorage)

**Mock no MVP**: Formulário completo, sem persistência

---

### RF-E07: Gerenciamento de Anúncio
**Prioridade**: Média  
**Perfil**: Acompanhante

**Descrição**: Acompanhante deve poder gerenciar seu anúncio.

**Funcionalidades**:
- Editar anúncio
- Adicionar/remover fotos
- Adicionar/remover vídeos
- Atualizar informações
- Ver estatísticas (visualizações, contatos - mock)
- Desativar/Ativar anúncio
- Deletar anúncio

**Mock no MVP**: Interface visual

---

### RF-E08: Sistema de Mensagens
**Prioridade**: Média  
**Perfil**: Cliente, Acompanhante

**Descrição**: Sistema de comunicação entre cliente e acompanhante.

**Funcionalidades**:
- Chat em tempo real (futuro)
- Lista de conversas (mock)
- Envio de mensagens (mock)
- Notificações de novas mensagens (mock)
- Upload de mídia no chat (futuro)

**Mock no MVP**: Interface visual do chat, sem funcionalidade real

---

### RF-E09: Sistema de Avaliações
**Prioridade**: Média  
**Perfil**: Cliente

**Descrição**: Cliente deve poder avaliar acompanhantes.

**Funcionalidades**:
- Formulário de avaliação (apenas para clientes que contrataram - mock)
- Rating por critérios (serviço, pontualidade, etc.)
- Comentário escrito
- Upload de fotos (opcional - mock)
- Editar avaliação (mock)
- Deletar avaliação (mock)

**Mock no MVP**: Formulário visual, avaliações mockadas

---

## 📚 Sessão Contos

### RF-S01: Biblioteca de Contos
**Prioridade**: Alta  
**Perfil**: Cliente, Escritor

**Descrição**: Exibir biblioteca de contos disponíveis.

**Funcionalidades**:
- Grid/Lista de contos
- Informações essenciais (capa, título, autor, categoria, rating)
- Badge free/premium
- Preview de texto
- Paginação
- Loading states
- Empty states

**Mock no MVP**: Dados mockados

---

### RF-S02: Filtros e Busca
**Prioridade**: Alta  
**Perfil**: Cliente

**Descrição**: Filtrar e buscar contos.

**Funcionalidades**:
- Filtro por categoria
- Filtro free/premium
- Filtro por rating mínimo
- Filtro por tags
- Busca por título/autor
- Ordenação (recente, popular, rating, alfabética)
- Botão de limpar filtros

**Mock no MVP**: Filtros visuais funcionais

---

### RF-S03: Sistema de Categorias e Tags
**Prioridade**: Média  
**Perfil**: Cliente, Escritor

**Descrição**: Organizar contos por categorias e tags.

**Funcionalidades**:
- Lista de categorias principais
- Nuvem de tags
- Filtro por categoria
- Filtro por múltiplas tags
- Badges coloridos por categoria
- Contagem de contos por categoria

**Mock no MVP**: Categorias e tags mockadas

---

### RF-S04: Leitor de Contos
**Prioridade**: Alta  
**Perfil**: Cliente

**Descrição**: Visualizar e ler contos.

**Funcionalidades**:
- Visualização completa de contos free
- Preview de contos premium (primeiras linhas + blur)
- Tipografia otimizada para leitura
- Controles de leitura:
  - Tamanho da fonte (pequeno, médio, grande)
  - Modo escuro/claro
  - Marcador de página (localStorage)
  - Progresso de leitura
- Navegação (anterior/próximo capítulo se houver)
- Informações do conto (título, autor, data, rating)
- Botão de assinatura (para contos premium)

**Mock no MVP**: Leitor funcional, contos mockados

---

### RF-S05: Sistema de Assinatura Premium
**Prioridade**: Alta  
**Perfil**: Cliente

**Descrição**: Cliente deve poder assinar para acessar contos premium.

**Funcionalidades**:
- Modal de assinatura
- Planos disponíveis (mock)
- Informações de cada plano
- Botão de assinar (mock)
- Integração com Stripe (futuro)
- Gerenciamento de assinatura (futuro)

**Mock no MVP**: Interface visual completa

---

### RF-S06: Sistema de Comentários e Avaliações
**Prioridade**: Média  
**Perfil**: Cliente

**Descrição**: Comentar e avaliar contos.

**Funcionalidades**:
- Lista de comentários
- Formulário de comentário
- Sistema de likes em comentários (mock)
- Filtros de comentários (mais recentes, mais curtidos)
- Formulário de avaliação (rating + comentário)
- Editar/deletar próprio comentário (mock)

**Mock no MVP**: Comentários e avaliações mockadas

---

### RF-S07: Publicação de Contos
**Prioridade**: Alta  
**Perfil**: Escritor

**Descrição**: Escritor deve poder publicar contos.

**Funcionalidades**:
- Editor de texto rico (WYSIWYG ou markdown)
- Formatação (negrito, itálico, listas, etc.)
- Preview em tempo real
- Formulário de publicação:
  - Título
  - Descrição/resumo
  - Seleção de categoria (múltipla)
  - Tags (input com autocomplete)
  - Upload de capa (thumbnail)
  - Seleção free/premium
  - Configurações (agendar publicação, privado, etc.)
- Validação completa
- Preview antes de publicar
- Salvar rascunho (localStorage)
- Auto-save (localStorage)

**Mock no MVP**: Editor e formulário completos, sem persistência

---

### RF-S08: Gerenciamento de Contos
**Prioridade**: Média  
**Perfil**: Escritor

**Descrição**: Escritor deve poder gerenciar seus contos.

**Funcionalidades**:
- Lista de contos publicados
- Editar conto
- Deletar conto
- Alterar status (publicado, rascunho, privado)
- Ver estatísticas (leituras, avaliações, comentários - mock)
- Gerenciar preço premium (se aplicável)

**Mock no MVP**: Interface visual

---

### RF-S09: Recomendações
**Prioridade**: Baixa  
**Perfil**: Cliente

**Descrição**: Recomendar contos relacionados.

**Funcionalidades**:
- Contos do mesmo autor
- Contos da mesma categoria
- Contos similares (baseado em tags)
- Contos populares
- Contos recentes

**Mock no MVP**: Recomendações mockadas

---

## 🔐 Autenticação e Perfis

### RF-A01: Registro de Usuário
**Prioridade**: Alta  
**Perfil**: Todos

**Descrição**: Usuário deve poder se registrar na plataforma.

**Funcionalidades**:
- Formulário de registro
- Seleção de perfil (cliente, acompanhante, proprietário, escritor)
- Validação de email
- Validação de senha (força)
- Confirmação de senha
- Termos de uso e política de privacidade
- Verificação de email (futuro)

**Mock no MVP**: Formulário completo, sem persistência

---

### RF-A02: Login
**Prioridade**: Alta  
**Perfil**: Todos

**Descrição**: Usuário deve poder fazer login.

**Funcionalidades**:
- Formulário de login (email/usuário e senha)
- Lembrar-me (localStorage)
- Recuperação de senha (mock)
- Login social (futuro - Google, Facebook)

**Mock no MVP**: Formulário visual, sem autenticação real

---

### RF-A03: Perfil de Usuário
**Prioridade**: Média  
**Perfil**: Todos

**Descrição**: Usuário deve poder gerenciar seu perfil.

**Funcionalidades**:
- Visualizar perfil
- Editar informações
- Upload de foto de perfil (mock)
- Alterar senha (mock)
- Configurações de privacidade (mock)
- Histórico de atividades (mock)

**Mock no MVP**: Interface visual

---

## 🛡️ Moderação e Segurança

### RF-M01: Sistema de Moderação
**Prioridade**: Média  
**Perfil**: Admin, Usuários

**Descrição**: Sistema para moderar conteúdo da plataforma.

**Funcionalidades**:
- Flag de conteúdo inapropriado
- Review manual (mock no MVP)
- Badges de verificação
- Sistema de denúncias
- Filtros automáticos (futuro)
- Aprovação de anúncios (futuro)

**Mock no MVP**: Interface de denúncia, sem processamento real

---

### RF-M02: Validação de Mídia
**Prioridade**: Alta  
**Perfil**: Sistema

**Descrição**: Validar uploads de mídia.

**Funcionalidades**:
- Validação de tipo de arquivo
- Validação de tamanho (máx 5MB)
- Validação de dimensões (futuro)
- Sanitização de nomes de arquivo
- Preview antes do upload

**Mock no MVP**: Validação visual, sem upload real

---

## 📱 Funcionalidades Gerais

### RF-G01: Navegação
**Prioridade**: Alta  
**Perfil**: Todos

**Descrição**: Sistema de navegação intuitivo.

**Funcionalidades**:
- Menu principal
- Breadcrumbs
- Menu mobile (drawer)
- Busca global
- Navegação por teclado
- Acessibilidade

**Mock no MVP**: Navegação completa e funcional

---

### RF-G02: Responsividade
**Prioridade**: Alta  
**Perfil**: Todos

**Descrição**: Interface responsiva em todos os dispositivos.

**Funcionalidades**:
- Layout adaptativo
- Menu mobile
- Touch targets adequados
- Otimização de imagens
- Performance em mobile

**Mock no MVP**: Totalmente responsivo

---

### RF-G03: Notificações
**Prioridade**: Baixa  
**Perfil**: Todos

**Descrição**: Sistema de notificações.

**Funcionalidades**:
- Notificações in-app (mock)
- Badge de notificações
- Lista de notificações
- Marcar como lida
- Configurações de notificações (mock)

**Mock no MVP**: Interface visual, sem notificações reais

---

## 📊 Priorização MVP

### Alta Prioridade (Must Have)
- RF-Q01, RF-Q02, RF-Q04, RF-Q05, RF-Q07, RF-Q09
- RF-E01, RF-E02, RF-E04, RF-E06
- RF-S01, RF-S02, RF-S04, RF-S05, RF-S07
- RF-A01, RF-A02
- RF-G01, RF-G02

### Média Prioridade (Should Have)
- RF-Q03, RF-Q06, RF-Q08
- RF-E03, RF-E05, RF-E07, RF-E08, RF-E09
- RF-S03, RF-S06, RF-S08
- RF-A03
- RF-M01, RF-M02

### Baixa Prioridade (Nice to Have)
- RF-S09
- RF-G03

---

**Última atualização**: Data de criação
**Versão**: 1.0.0

