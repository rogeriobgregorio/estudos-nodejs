
## Gerenciamento de Usuários com Node.js


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
- [🧪 Testando as Rotas](#testando-as-rotas)
- [📂 Estrutura do Projeto](#estrutura-do-projeto)

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

## 🧪 **Testando as Rotas**  

### 🔹 Iniciando o Servidor  

```bash
npm run dev
```  

---

### 🔹 Registro de Usuário (POST `/api/auth/register`)  

**Requisição:**  

```json
{
  "name": "Usuário Teste",
  "email": "teste@example.com",
  "password": "senha123",
  "role": "CLIENT"
}
```  

**Resposta esperada (201 Created):**  

```json
{
  "id": 1,
  "name": "Usuário Teste",
  "email": "teste@example.com",
  "role": "CLIENT"
}
```  

---

### 🔹 Login (POST `/api/auth/login`)  

**Requisição:**  

```json
{
  "email": "teste@example.com",
  "password": "senha123"
}
```  

**Resposta esperada:**  

```json
{
  "access_token": "jwt_token"
}
```  

---

### 🔹 Consultar Dados do Usuário Autenticado (GET `/users/me`)  

**Requisição:**  

- **Método:** GET  
- **URL:** `http://localhost:3000/api/users/me`  
- **Headers:**  

```makefile
Authorization: Bearer jwt_token_aqui
```  

**Resposta esperada:**  

```json
{
  "id": 1,
  "name": "Usuário Teste",
  "email": "teste@example.com",
  "role": "CLIENT"
}
```  

---

### 🔹 Listar Usuários (GET `/users`)  

#### 🚀 Criando um Usuário ADMIN  

Se já existir um usuário ADMIN, pule esta etapa. Caso contrário, atualize o banco de dados SQLite:  

```sql
UPDATE Users SET role = 'ADMIN' WHERE email = 'teste@example.com';
```  

#### 🔑 Obtendo Token de ADMIN  

Faça login com um usuário ADMIN:  

```json
{
  "email": "teste@example.com",
  "password": "senha123"
}
```  

#### Requisição  

- **Método:** GET  
- **URL:** `http://localhost:3000/api/users`  
- **Headers:**  

```makefile
Authorization: Bearer jwt_token_aqui
```  

**Resposta esperada:**  

```json
[
  {
    "id": 1,
    "name": "Usuário Teste",
    "email": "teste@example.com",
    "role": "ADMIN"
  },
  {
    "id": 2,
    "name": "Outro Usuário",
    "email": "outro@example.com",
    "role": "CLIENT"
  }
]
```  

Se um usuário não ADMIN tentar acessar, a resposta será:  

```json
{
  "message": "Acesso negado. Apenas administradores podem realizar esta ação."
}
```  

---

### 🔹 Atualizar Usuário (PUT `/users/:id`)  

**Requisição:**  

- **Método:** PUT  
- **URL:** `http://localhost:3000/api/users/1`  
- **Headers:**  

```makefile
Authorization: Bearer jwt_token_aqui
```  

- **Corpo:**  

```json
{
  "name": "Novo Nome",
  "email": "novoemail@example.com",
  "password": "nova_senha123"
}
```  

**Resposta esperada:**  

```json
{
  "id": 1,
  "name": "Novo Nome",
  "email": "novoemail@example.com",
  "role": "CLIENT"
}
```  

---

### 🔹 Deletar Usuário (DELETE `/users/:id`)  

**Requisição:**  

- **Método:** DELETE  
- **URL:** `http://localhost:3000/api/users/1`  
- **Headers:**  

```makefile
Authorization: Bearer jwt_token_aqui
```  

**Resposta esperada:**  

```json
{
  "message": "Usuário deletado com sucesso"
}
```  

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
