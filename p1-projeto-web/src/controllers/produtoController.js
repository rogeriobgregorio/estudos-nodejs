const ProdutoModel = require("../models/produtoModel");
const fs = require("fs");
const path = require("path");

// Função para registrar logs
function registrarLog(acao, id, produto) {
  const logPath = path.join(__dirname, "../logs/produtos.log");
  const log = `${new Date().toISOString()} - Ação: ${acao} - ID: ${id} - Produto: ${produto}\n`;
  fs.appendFileSync(logPath, log);
}

const ProdutoController = {
  async listarTodos(req, res) {
    try {
      const produtos = await ProdutoModel.listarTodos();
      res.json(produtos);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar produtos" });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const produto = await ProdutoModel.buscarPorId(id);

      if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" });
      }

      res.json(produto);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar produto" });
    }
  },

  async criar(req, res) {
    try {
      const { nome, preco, estoque } = req.body;

      if (!nome || nome.length < 3) {
        return res
          .status(400)
          .json({ erro: "Nome deve ter pelo menos 3 caracteres" });
      }
      if (!preco || preco <= 0) {
        return res
          .status(400)
          .json({ erro: "Preço deve ser um valor positivo" });
      }
      if (!Number.isInteger(estoque) || estoque < 0) {
        return res
          .status(400)
          .json({
            erro: "Estoque deve ser um número inteiro maior ou igual a zero",
          });
      }

      await ProdutoModel.criar(nome, preco, estoque);
      registrarLog("Criar", "-", nome);
      res.status(201).json({ mensagem: "Produto criado com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar produto" });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, preco, estoque } = req.body;

      if (!nome || nome.length < 3) {
        return res
          .status(400)
          .json({ erro: "Nome deve ter pelo menos 3 caracteres" });
      }
      if (!preco || preco <= 0) {
        return res
          .status(400)
          .json({ erro: "Preço deve ser um valor positivo" });
      }
      if (!Number.isInteger(estoque) || estoque < 0) {
        return res
          .status(400)
          .json({
            erro: "Estoque deve ser um número inteiro maior ou igual a zero",
          });
      }

      await ProdutoModel.atualizar(id, nome, preco, estoque);
      registrarLog("Atualizar", id, nome);
      res.json({ mensagem: "Produto atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao atualizar produto" });
    }
  },

  async excluir(req, res) {
    try {
      const { id } = req.params;
      await ProdutoModel.excluir(id);
      registrarLog("Excluir", id, "-");
      res.json({ mensagem: "Produto excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao excluir produto" });
    }
  },
};

module.exports = ProdutoController;
