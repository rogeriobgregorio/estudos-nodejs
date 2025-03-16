
## Gerenciamento de Usuários com Node.js

```markdown
# 🛠️ API de Gerenciamento de Usuários

Este projeto é uma API RESTful para gerenciamento de usuários, desenvolvida com **Node.js**, **Express**, **Sequelize** e **JWT**.  

A API permite registro, autenticação e administração de usuários, com proteção por tokens JWT.

---

## 📌 **Índice**
- [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)
- [⚙️ Instalação](#instalação)
- [🔑 Configuração](#configuração)
- [🚀 Rodando a Aplicação](#rodando-a-aplicação)
- [📌 Rotas da API](#rotas-da-api)
- [📂 Estrutura do Projeto](#estrutura-do-projeto)
- [📜 Licença](#licença)

---

## 🛠️ **Tecnologias Utilizadas**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## ⚙️ **Instalação**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o banco de dados**:
   ```bash
   npx sequelize-cli db:migrate
   ```

---

## 🔑 **Configuração**

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
JWT_SECRET=supersecretkey
DATABASE_URL=sqlite://database.sqlite
```

---

## 🚀 **Rodando a Aplicação**

### **Modo Desenvolvimento**
```bash
npm run dev
```

### **Modo Produção**
```bash
npm start
```

A API rodará em: `http://localhost:3000/`

---

## 📌 **Rotas da API**

### **1️⃣ Autenticação**
| Método | Rota        | Descrição              | Autenticação |
|--------|------------|------------------------|--------------|
| POST   | `/api/register` | Registra um novo usuário | ❌ |
| POST   | `/api/login`    | Autentica e retorna um token | ❌ |

### **2️⃣ Usuário**
| Método | Rota            | Descrição                           | Autenticação |
|--------|----------------|-----------------------------------|--------------|
| GET    | `/api/me`      | Obtém dados do usuário logado    | ✅ |
| GET    | `/api/users`   | Lista todos os usuários (ADMIN)  | ✅ |
| PUT    | `/api/users/:id` | Atualiza um usuário             | ✅ |
| DELETE | `/api/users/:id` | Deleta um usuário               | ✅ |

- `✅` = Requer token JWT (`Authorization: Bearer <token>`)

---

## 📂 **Estrutura do Projeto**
```
src/
│
├── config/                     # Configurações do SQLite
│   ├── config.json
│
├── controllers/                # Lógica das rotas
│   ├── authController.js
│   ├── userController.js
│
├── middlewares/                # Middlewares de autenticação
│   ├── authMiddleware.js
│   ├── adminMiddleware.js
│
├── migrations/                 # Migrations do banco de dados   
│ 
├── models/                     # Modelos do Sequelize
│   ├── user.js
│   ├── index.js       
│
├── routes/                     # Definição das rotas
│   ├── authRoutes.js
│   ├── userRoutes.js
│ 
├── .env                        # Arquivos de ambiente
├── app.js                      # Arquivo principal
├── database.sqlite             # Arquivos do Sequelize
├── package.json                # Dependências do projeto
├── README.md                   # Documentação
└── server.js                   # Inicialização do servidor
```

---

## 📌 Autor  

**Rogério Gregório** 
