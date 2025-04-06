# </> Sistema de Gerenciamento de Produtos

**Integrantes**:
- Rogério Bernardo Gregório
- Gabriel Vasques de Abreu

---

Este projeto é uma API REST criada com **Node.js**, **Express** e **SQLite**, seguindo o padrão **MVC**. Ela permite o cadastro, atualização, listagem e exclusão de **usuários** e **produtos**, com **validações**, **logs de operações**, **tratamento de erros** e **documentação de endpoints**.

---

## 🧱 Tecnologias Utilizadas

- Node.js
- Express
- SQLite
- Promisify (para uso de async/await)
- Postman (para testes)

---

## 📦 Estrutura do Projeto

```
src/
├── controllers/
├── models/
├── routes/
├── views/
├── logs/
├── database.js
└── app.js
```

---

## 📚 Funcionamento do MVC

- **Model:** acessa e manipula o banco SQLite.
- **Controller:** valida dados, aplica regras de negócio e chama os models.
- **Routes:** recebe as requisições HTTP e encaminha para o controller.
- **Views:** páginas HTML com formulários de cadastro (usuários e produtos).

---

## ✅ Validações Aplicadas

### Produtos:
- `nome`: mínimo 3 caracteres.
- `preco`: número positivo.
- `estoque`: número inteiro ≥ 0.

### Usuários:
- `nome`: mínimo 3 caracteres.
- `email`: formato válido e único.

---

## 📝 Documentação dos Endpoints

### 🔸 Produtos

#### `GET /produtos`
- **Descrição:** Lista todos os produtos.
- **Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Camiseta",
    "preco": 49.9,
    "estoque": 20
  }
]
```

#### `GET /produtos/:id`
- **Descrição:** Retorna produto por ID.
- **Resposta:** Produto ou 404 se não encontrado.

#### `POST /produtos`
- **Campos:**
  - `nome`: string (min. 3 letras)
  - `preco`: float > 0
  - `estoque`: int ≥ 0
- **Exemplo de requisição:**
```json
{
  "nome": "Notebook",
  "preco": 3999.90,
  "estoque": 5
}
```

#### `PUT /produtos/:id`
- **Descrição:** Atualiza um produto.
- **Campos iguais ao POST.**

#### `DELETE /produtos/:id`
- **Descrição:** Remove produto com ID especificado.

---

### 🔹 Usuários

#### `GET /usuarios`
#### `GET /usuarios/:id`
#### `POST /usuarios`
```json
{
  "nome": "João",
  "email": "joao@email.com"
}
```
#### `PUT /usuarios/:id`
#### `DELETE /usuarios/:id`

---

## 📂 Logs de Operações

Todos os logs são gravados no diretório `/src/logs/` com:

- Data e hora
- Operação executada (GET, POST, etc)
- ID e nome do usuário (se aplicável)

---

## ⚠️ Tratamento de Erros

- Campos inválidos retornam `400 Bad Request`
- ID não encontrado: `404 Not Found`
- Erros internos: `500 Internal Server Error`

---

## 🤯 Dificuldades Encontradas

- Integração entre SQLite e Promisify exigiu atenção especial para evitar callbacks aninhados.
- Garantir logs detalhados sem poluir os controllers.
- Estruturar as tabelas e validações com consistência.

---

## 📚 Referências

- [Documentação do Express](https://expressjs.com/)
- [SQLite3 para Node.js](https://www.npmjs.com/package/sqlite3)
- [MDN Web Docs - HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

## 🚀 Como Rodar o Projeto

```bash
npm install
npx nodemon src/app.js
```
Abra o Postman e acesse as rotas da API.
