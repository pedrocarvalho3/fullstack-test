<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# 📋 API Todos - NestJS

Uma API RESTful para gerenciamento de tarefas (todos) construída com NestJS, TypeScript, PostgreSql, Docker, testes unitários com jest e validação robusta.

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (versão 20 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/pedrocarvalho3/fullstack-test
cd todo-api

# Instale as dependências
npm install
```

### Crie a variável de ambiente baseada no exemplo
```bash
cp .env.example .env
```

### Suba o container do banco de dados
```bash
docker-compose up -d
```

### Gere o client do Prisma
```bash
npx prisma generate
```

### Execute os testes unitários das services
```bash
npm run test
```

### Executando o projeto
```bash
# Desenvolvimento (com hot reload)
npm run start:dev
```

A API estará disponível em: `http://localhost:3000`

## 📚 Endpoints da API

### Listar todas as tarefas
- **Método:** `GET`
- **URL:** `/todos`
- **Resposta:** Array de tarefas

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Estudar NestJS",
    "description": "Aprender sobre módulos e controllers",
    "completed": false,
    "createdAt": "2025-08-23T10:00:00.000Z",
    "updatedAt": "2025-08-23T10:00:00.000Z"
  }
]
```

### Buscar tarefa por ID
- **Método:** `GET`
- **URL:** `/todos/:id`
- **Parâmetros:** `id` (string) - ID da tarefa
- **Resposta:** Objeto da tarefa ou erro 404

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Estudar NestJS",
  "description": "Aprender sobre módulos e controllers",
  "completed": false,
  "createdAt": "2025-08-23T10:00:00.000Z",
  "updatedAt": "2025-08-23T10:00:00.000Z"
}
```

### Criar nova tarefa
- **Método:** `POST`
- **URL:** `/todos`
- **Content-Type:** `application/json`
- **Body:**

- **Validações:**
  - `title`: obrigatório, 1-100 caracteres
  - `description`: opcional, máximo 500 caracteres
  - `completed`: opcional, boolean (padrão: false)

### Atualizar tarefa
- **Método:** `PUT`
- **URL:** `/todos/:id`
- **Parâmetros:** `id` (string) - ID da tarefa
- **Content-Type:** `application/json`
- **Body:** (todos os campos são opcionais)

### Excluir tarefa
- **Método:** `DELETE`
- **URL:** `/todos/:id`
- **Parâmetros:** `id` (string) - ID da tarefa

## 🔧 Estrutura do Projeto

```
src/
├── prisma/
│   └── prisma.service.ts                 # Serviço do prisma
├── todos/
│   ├── dto/
│   │   ├── create-todo.dto.ts            # Validação para criação
│   │   └── update-todo.dto.ts            # Validação para atualização
│   ├── entities/
│   │   └── todo.entity.ts                # Modelo da entidade Todo
│   ├── repositories/
│   │   ├── todo-in-memory.repository.ts  # Repositório em memória
│   │   ├── todo-prisma.repository.ts     # Repositório Prisma
│   │   └── todo.repository.ts            # Repositório Padrão 
│   ├── todos.controller.ts               # Controller com rotas HTTP
│   ├── todos.service.spec.ts             # Testes unitários
│   ├── todos.service.ts                  # Lógica de negócio
│   └── todos.module.ts                   # Módulo do NestJS
├── app.module.ts                         # Módulo raiz da aplicação
└── main.ts                               # Ponto de entrada da aplicação
```

## ⚡ Funcionalidades

### Validação de Dados
- Validação automática usando `class-validator`
- DTOs para entrada de dados
- Mensagens de erro personalizadas em português
- Whitelist para propriedades permitidas

### Tratamento de Erros
- Exceções HTTP apropriadas
- Mensagens de erro claras
- Códigos de status HTTP corretos

### Armazenamento
- Dados armazenados em memória para testes e banco de dados Postgres dockerizado para produção
- IDs únicos gerados com UUID
- Timestamps automáticos (createdAt, updatedAt)

## 🛠 Tecnologias Utilizadas

- **NestJS** - Framework Node.js
- **TypeScript** - Linguagem de programação
- **class-validator** - Validação de dados
- **class-transformer** - Transformação de dados
- **UUID** - Geração de IDs únicos
- **Postgres** - Banco de dados relacional
- **Docker** - conteinerização do banco de dados
- **Jest** - Testes unitários

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio técnico e está disponível para fins educacionais.
