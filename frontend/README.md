<p align="center">
  <a href="https://vite.dev/" target="_blank">
    <img src="https://vite.dev/logo.svg" width="120" alt="Vitest Logo" />
  </a>
</p>

# Rick & Morty

Uma aplicação web moderna para explorar personagens do universo Rick and Morty, consumindo dados da API oficial da série.

## 📋 Sobre o Projeto

O Rick & Morty Explorer é uma aplicação responsiva que permite aos usuários navegar e descobrir informações sobre personagens da série Rick and Morty. A aplicação possui um design futurístico inspirado no tema sci-fi da série.

### ✨ Funcionalidades

- **Listagem de Personagens**: Visualização em grid responsivo de todos os personagens
- **Paginação**: Carregamento progressivo com botão "Buscar mais"
- **Detalhes do Personagem**: Página dedicada com informações detalhadas
- **Design Responsivo**: Otimizado para desktop, tablet e mobile

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca principal para construção da interface
- **TypeScript** - Tipagem estática para maior segurança no código
- **Vite** - Bundler moderno e rápido para desenvolvimento
- **Tailwind CSS** - Framework CSS utility-first para estilização
- **React Router Dom** - Roteamento entre páginas
- **Shadcn/ui** - Componentes de interface pré-construídos
- **Lucide React** - Ícones modernos e consistentes

## 🌐 API Utilizada

- **Rick and Morty API**: https://rickandmortyapi.com/
    - Endpoints utilizados:
        - `GET /api/character` - Lista de personagens com paginação
        - `GET /api/character/{id}` - Detalhes de um personagem específico

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone <https://github.com/pedrocarvalho3/fullstack-test>
cd frontend
```

1. Instale as dependências:

```bash
npm install
```

1. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

1. Acesse no navegador:

```
<http://localhost:5173>
```

### Scripts Disponíveis

- `npm run dev` - Executa em modo de desenvolvimento

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Componentes base do Shadcn/ui
│   ├── CharacterCard.tsx    # Card individual do personagem
│   └── CharacterList.tsx    # Lista de personagens com busca
├── pages/               # Páginas da aplicação
│   ├── Index.tsx        # Página inicial
│   ├── CharacterDetails.tsx # Página de detalhes
│   └── NotFound.tsx     # Página 404
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários e configurações
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais e design system

```

## 📱 Responsividade

- **Mobile**: Layout em coluna única (< 768px)
- **Tablet**: Grid de 2 colunas (768px - 1024px)
- **Desktop**: Grid de 3-4 colunas (> 1024px)

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio técnico e está disponível para fins educacionais.
