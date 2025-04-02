const express = require("express");
const ProdutoController = require("../controllers/produtoController");

const router = express.Router();

router.get("/produtos", ProdutoController.listarTodos);
router.get("/produtos/:id", ProdutoController.buscarPorId);
router.post("/produtos", ProdutoController.criar);
router.put("/produtos/:id", ProdutoController.atualizar);
router.delete("/produtos/:id", ProdutoController.excluir);

module.exports = router;
