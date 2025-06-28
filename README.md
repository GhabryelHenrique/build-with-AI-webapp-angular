# Plataforma de IA Multi-Agente (Frontend - Angular)

> Esta é a interface de usuário para a Plataforma de IA Multi-Agente. Construída com Angular e utilizando componentes standalone, esta aplicação oferece uma experiência rica e reativa para criar, gerenciar e interagir com agentes de IA personalizados.

O frontend permite que os usuários naveguem entre uma tela de chat dinâmica e uma área de gerenciamento, onde podem definir as personalidades dos agentes de IA que serão consumidos pelo chat.

## ✨ Features

- **Arquitetura Standalone:** Utiliza a arquitetura mais moderna do Angular para componentes mais simples e independentes.
- **Interface de Chat Reativa:** UI de chat em tempo real com indicadores de digitação e histórico de mensagens.
- **Seleção de Agentes Interativa:** Uma grade de cards visualmente atraente permite que o usuário escolha com qual agente conversar.
- **Gerenciamento de Agentes (CRUD):** Formulário para criar novos agentes e uma página para listar os agentes existentes.
- **Renderização de Markdown:** As respostas da IA são renderizadas como HTML formatado, permitindo listas, blocos de código, negrito, etc., graças à biblioteca `ngx-markdown`.
- **Design Responsivo:** Construído com Bootstrap e CSS customizado para uma boa experiência em diferentes tamanhos de tela.

## 🛠️ Tech Stack

- **Framework:** [Angular](https://angular.io/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Reatividade:** [RxJS](https://rxjs.dev/)
- **Estilização:** [Bootstrap](https://getbootstrap.com/) e CSS
- **Markdown:** [ngx-markdown](https://www.npmjs.com/package/ngx-markdown)

## 🚀 Como Começar

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Angular CLI](https://angular.io/cli) instalado globalmente (`npm install -g @angular/cli`).
- **O backend (NestJS) precisa estar rodando** para que a aplicação funcione, pois ela consumirá a API em `http://localhost:3000`.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd gemini-angular-chat
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Configuração

Para este projeto, a URL da API do backend está definida diretamente nos arquivos de serviço (`src/app/services/`). Para um ambiente de produção, recomenda-se usar os arquivos de ambiente do Angular (`src/environments/`).

- `src/app/services/agent.service.ts` -> `apiUrl = 'http://localhost:3000/agents'`
- `src/app/services/chat.service.ts` -> `apiUrl = 'http://localhost:3000/agent'`

### Rodando a Aplicação

- Para iniciar o servidor de desenvolvimento:
  ```bash
  ng serve --open
  ```
- A aplicação será aberta automaticamente em `http://localhost:4200`.

## 🏗️ Estrutura do Projeto

- **`src/app/components/`**: Contém os principais componentes standalone da aplicação.
  - `chat/`: A interface principal de chat.
  - `agent-list/`: A tela que exibe os cards de todos os agentes criados.
  - `agent-form/`: O formulário para criar um novo agente.
- **`src/app/services/`**: Contém os serviços que encapsulam a lógica de comunicação com a API do backend.
  - `chat.service.ts`: Lida com as requisições para o endpoint de chat.
  - `agent.service.ts`: Lida com o CRUD de agentes.
- **`src/app/models/`**: Define as interfaces e tipos (ex: `Message`, `Agent`) para garantir a segurança de tipo em toda a aplicação.

## 🔮 Próximos Passos

- [ ] Implementar a interface para as funcionalidades de `UPDATE` e `DELETE` de agentes.
- [ ] Criar uma tela de login para um sistema de autenticação de usuários.
- [ ] Melhorar o tratamento de erros na interface, exibindo toasts ou modais amigáveis.
- [ ] Adicionar um botão "Copiar" aos blocos de código renderizados pelo Markdown.
