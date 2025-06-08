# 🚀 Aplicação de Cadastro de Pessoas com CI/CD via GitHub Actions

Esta aplicação fullstack permite cadastrar, visualizar, atualizar e excluir dados de pessoas, com interface amigável e deploy automático via GitHub Actions. Ideal para estudos práticos de desenvolvimento web moderno com Docker, CI/CD, integração com SonarQube e banco de dados MySQL.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js com Express
- Sequelize ORM
- MySQL (via Docker)
- SonarQube (análise de qualidade)
- Docker / Docker Compose

### Frontend
- HTML5, CSS3 e JavaScript
- Interface simples hospedada em `public/index.html`

### DevOps
- GitHub Actions
- Docker Hub
- CI/CD com SSH para servidor remoto
- SonarQube com Quality Gate automático

---

## 🌐 Funcionalidades

- ✅ Cadastro de pessoas com nome, idade e e-mail
- 🔍 Busca por nome
- 🧽 Exclusão de dados 
- 🔁 Atualização de dados
- 📋 Listagem automática dos dados
- 💾 Dados persistidos em banco MySQL

---

## 📦 Como Executar Localmente

### Pré-requisitos

- Docker e Docker Compose instalados
- Node.js (opcional se quiser executar sem Docker)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo

2. Execute com Docker Compose

- docker compose up --build
- Acesse a aplicação via navegador em: http://localhost:8164

🧪 Testando as Funcionalidades
- Acesse a página inicial.

- Preencha o formulário com nome e idade e clique em Cadastrar.

- Utilize o campo de busca para encontrar um cadastro.

- Clique em Excluir dado ou Atualizar dado conforme necessário.

⚙️ CI/CD Automatizado
A aplicação está conectada a um pipeline completo com GitHub Actions:

Etapas do pipeline:
- Build da imagem Docker da aplicação

- Push automático para o Docker Hub

- Conexão SSH com servidor remoto

- Subida de um SonarQube temporário

- Análise de qualidade de código com Quality Gate

- Se aprovado, o código é deployado no servidor

- O container antigo é removido e substituído

- A análise de qualidade precisa ser aprovada para que o deploy aconteça. Caso contrário, o processo falha.

🔐 Secrets Necessários (GitHub Settings > Secrets)
Nome	Descrição
DOCKER_HUB_USERNAME	Seu usuário no Docker Hub
DOCKER_HUB_PASSWORD	Sua senha no Docker Hub
SONAR_TOKEN	Token de autenticação do SonarQube
REMOTE_HOST_IP	IP do servidor remoto (ex: 201.23.3.86)
REMOTE_USER	Nome do usuário (ex: aluno)
SSH_PRIVATE_KEY	Chave privada SSH para conexão com o servidor

🌍 Acesso Remoto à Aplicação
Após o deploy, a aplicação pode ser acessada em:

http://201.23.3.86:8164

📁 Estrutura de Pastas

MEU-PROJETO/
├── .github/
│ └── workflows/
│ └── deploy.yml
├── backend/
│ ├── database/
│ │ └── db.js
│ ├── models/
│ │ └── Pessoa.js
│ ├── routes/
│ │ └── pessoas.js
│ └── app.js
├── public/
│ ├── index.html
│ ├── script.js
│ └── style.css
├── Dockerfile
├── docker-compose.yml
├── wait-for.sh
├── .env
├── package.json
├── package-lock.json
└── README.md

🤝 Contribuição
Sinta-se livre para clonar o projeto, sugerir melhorias ou abrir issues.

🧠 Créditos
Desenvolvido para fins educacionais com foco em práticas modernas de desenvolvimento web, Docker e DevOps.

📄 Licença
Este projeto está licenciado sob a MIT License.