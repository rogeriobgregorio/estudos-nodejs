const db = require("../database");

const ProdutoModel = {
  async listarTodos() {
    return await db.all("SELECT * FROM produtos");
  },

  async buscarPorId(id) {
    return await db.get("SELECT * FROM produtos WHERE id = ?", [id]);
  },

  async criar(nome, preco, estoque) {
    return await db.run(
      "INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)",
      [nome, preco, estoque]
    );
  },

  async atualizar(id, nome, preco, estoque) {
    return await db.run(
      "UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?",
      [nome, preco, estoque, id]
    );
  },

  async excluir(id) {
    return await db.run("DELETE FROM produtos WHERE id = ?", [id]);
  },
};

module.exports = ProdutoModel;
