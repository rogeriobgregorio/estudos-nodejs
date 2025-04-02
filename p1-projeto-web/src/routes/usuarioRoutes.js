const express = require("express");
const UsuarioController = require("../controllers/usuarioController");

const router = express.Router();

router.get("/usuarios", UsuarioController.listarTodos);
router.get("/usuarios/:id", UsuarioController.buscarPorId);
router.post("/usuarios", UsuarioController.criar);
router.put("/usuarios/:id", UsuarioController.atualizar);
router.delete("/usuarios/:id", UsuarioController.excluir);

module.exports = router;
