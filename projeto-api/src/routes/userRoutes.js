const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

// Definição das rotas de usuário
router.post("/users", UserController.createUser); // Criar usuário
router.get("/users/:id", UserController.getUserById); // Obter usuário por ID
router.put("/users/:id", UserController.updateUser); // Atualizar usuário
router.delete("/users/:id", UserController.deleteUser); // Excluir usuário
router.get("/users", UserController.listUsers); // Listar usuários

module.exports = router;
