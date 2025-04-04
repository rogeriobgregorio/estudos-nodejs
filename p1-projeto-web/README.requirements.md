# </> Sistema de Gerenciamento de Produtos

## 📌 Contexto

Este projeto foi desenvolvido como parte de um trabalho acadêmico com o objetivo de criar uma aplicação web para o gerenciamento de produtos e usuários. A aplicação permite realizar operações de cadastro, listagem, atualização e exclusão (CRUD) utilizando arquitetura MVC e banco de dados SQLite.

---

## ✅ Requisitos Funcionais

- [x] Implementar o padrão MVC.
- [x] Criar duas páginas:
  - Página de cadastro de produtos.
  - Página de cadastro de usuários.
- [x] Criar endpoints RESTful para gerenciar **produtos**:
  - `GET /produtos` – Listar todos os produtos.
  - `GET /produtos/{id}` – Buscar um produto específico por ID.
  - `POST /produtos` – Criar um novo produto (com validação).
  - `PUT /produtos/{id}` – Atualizar um produto existente (com validação).
  - `DELETE /produtos/{id}` – Excluir um produto.
- [x] Criar endpoints RESTful para gerenciar **usuários**:
  - `GET /usuarios` – Listar todos os usuários.
  - `GET /usuarios/{id}` – Buscar um usuário específico por ID.
  - `POST /usuarios` – Criar um novo usuário (com validação).
  - `PUT /usuarios/{id}` – Atualizar um usuário existente (com validação).
  - `DELETE /usuarios/{id}` – Excluir um usuário.

---

## 🚫 Requisitos Não Funcionais

- [x] Banco de dados SQLite como repositório de dados.
- [x] Organização do projeto utilizando o padrão MVC (Model, View, Controller).
- [x] Testes dos endpoints realizados com **Postman**, incluindo capturas de tela no relatório final.
- [x] Relatório técnico entregue em um dos seguintes formatos:
  - Documento Word (.doc/.docx),
  - PDF,
  - Ou `README.md` no repositório GitHub.
- [x] Relatório deve incluir:
  - Explicação sobre a estrutura do projeto (MVC).
  - Funcionamento da aplicação.
  - Funcionamento da validação de campos.
  - Dificuldades encontradas e soluções adotadas.
  - Referências utilizadas.

---

## 📋 Regras de Negócio

### Produtos

- O **nome do produto** deve ter **no mínimo 3 caracteres**.
- O **preço do produto** deve ser um **valor positivo**.
- O **estoque do produto** deve ser um **número inteiro maior ou igual a zero**.

### Usuários

- Devem passar por validação (os critérios podem ser definidos pelos desenvolvedores, como nome, e-mail, etc).

---

## 🛠 Tecnologias Utilizadas

- Node.js / Express
- SQLite
- Postman (para testes)
- JavaScript
- MVC Pattern

---

## 📄 Relatório Técnico

O relatório técnico explica a estrutura do projeto, como o padrão MVC foi aplicado, a lógica de validação nos controllers e os desafios enfrentados durante o desenvolvimento.

---

## 📚 Referências

- [Documentação oficial do Node.js](https://nodejs.org/)
- [Express.js Guide](https://expressjs.com/)
- [SQLite3 para Node.js](https://www.npmjs.com/package/sqlite3)
- [Postman Documentation](https://learning.postman.com/)
- Slides e materiais da disciplina

