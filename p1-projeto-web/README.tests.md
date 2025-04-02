# 📘 Documentação de Testes da API – Sistema de Produtos e Usuários

Servidor rodando em: **http://localhost:3000**

---

## 🚀 Endpoints Disponíveis

### 🧾 Produtos

| Método | Rota                    | Descrição                        |
|--------|-------------------------|----------------------------------|
| GET    | /produtos               | Lista todos os produtos          |
| GET    | /produtos/:id           | Retorna um produto específico    |
| POST   | /produtos               | Cria um novo produto             |
| PUT    | /produtos/:id           | Atualiza um produto existente    |
| DELETE | /produtos/:id           | Remove um produto do sistema     |

### 👤 Usuários

| Método | Rota                    | Descrição                        |
|--------|-------------------------|----------------------------------|
| GET    | /usuarios               | Lista todos os usuários          |
| GET    | /usuarios/:id           | Retorna um usuário específico    |
| POST   | /usuarios               | Cria um novo usuário             |
| PUT    | /usuarios/:id           | Atualiza um usuário existente    |
| DELETE | /usuarios/:id           | Remove um usuário do sistema     |

---

## 🔄 Exemplos de Requisições e Respostas

### 📦 Produtos

#### ✅ Criar Produto – `POST /produtos`

**Requisição**
```json
{
  "nome": "Teclado Mecânico",
  "preco": 199.99,
  "estoque": 10
}
```

**Resposta de Sucesso**
```json
{
  "mensagem": "Produto criado com sucesso"
}
```

**Erros Possíveis**
- Nome muito curto:
  ```json
  { "erro": "Nome deve ter pelo menos 3 caracteres" }
  ```
- Preço inválido:
  ```json
  { "erro": "Preço deve ser um valor positivo" }
  ```
- Estoque inválido:
  ```json
  { "erro": "Estoque deve ser um número inteiro maior ou igual a zero" }
  ```

---

#### 🛠 Atualizar Produto – `PUT /produtos/:id`

**Requisição**
```json
{
  "nome": "Teclado Gamer",
  "preco": 249.99,
  "estoque": 15
}
```

**Resposta de Sucesso**
```json
{
  "mensagem": "Produto atualizado com sucesso"
}
```

**Erro: Produto não encontrado**
```json
{ "erro": "Produto não encontrado" }
```

---

#### ❌ Deletar Produto – `DELETE /produtos/:id`

**Resposta de Sucesso**
```json
{
  "mensagem": "Produto excluído com sucesso"
}
```

---

### 👤 Usuários

#### ✅ Criar Usuário – `POST /usuarios`

**Requisição**
```json
{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

**Resposta de Sucesso**
```json
{
  "mensagem": "Usuário criado com sucesso"
}
```

**Erros Possíveis**
- Nome muito curto:
  ```json
  { "erro": "Nome deve ter pelo menos 3 caracteres" }
  ```
- Email ausente:
  ```json
  { "erro": "Email é obrigatório" }
  ```

---

#### 🛠 Atualizar Usuário – `PUT /usuarios/:id`

**Requisição**
```json
{
  "nome": "João S.",
  "email": "joao.s@email.com"
}
```

**Resposta de Sucesso**
```json
{
  "mensagem": "Usuário atualizado com sucesso"
}
```

**Erro: Usuário não encontrado**
```json
{ "erro": "Usuário não encontrado" }
```

---

## ⚠️ Tratamento de Erros

- **400 Bad Request**: Erros de validação dos campos (`nome`, `email`, `preço`, `estoque`).
- **404 Not Found**: Recurso com ID inexistente.
- **500 Internal Server Error**: Erros inesperados ao interagir com o banco de dados ou no backend.

---

## 📂 Log de Operações

Cada operação de **criação**, **atualização** ou **exclusão** de produtos e usuários é registrada em arquivos de log separados:

- `logs/produtos.log`
- `logs/usuarios.log`

Formato:
```
YYYY-MM-DDTHH:MM:SSZ - Ação: [Criar|Atualizar|Excluir] - ID: [id] - Produto/Usuário: [nome]
```

---

## 🧪 Como Testar com Postman

### Testar Produto

1. Criar produto: `POST http://localhost:3000/produtos`
2. Listar todos: `GET http://localhost:3000/produtos`
3. Buscar por ID: `GET http://localhost:3000/produtos/1`
4. Atualizar produto: `PUT http://localhost:3000/produtos/1`
5. Excluir produto: `DELETE http://localhost:3000/produtos/1`

### Testar Usuário

1. Criar usuário: `POST http://localhost:3000/usuarios`
2. Listar todos: `GET http://localhost:3000/usuarios`
3. Buscar por ID: `GET http://localhost:3000/usuarios/1`
4. Atualizar usuário: `PUT http://localhost:3000/usuarios/1`
5. Excluir usuário: `DELETE http://localhost:3000/usuarios/1`

---

## ✅ Observações Finais

- Todos os endpoints retornam mensagens claras de erro ou sucesso.
- Todas as validações são feitas antes de qualquer interação com o banco de dados.
- Os logs ajudam na auditoria de ações executadas na API.
