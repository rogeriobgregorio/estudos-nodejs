const db = require("../database");

const UsuarioModel = {
  async listarTodos() {
    return await db.all("SELECT * FROM usuarios");
  },

  async buscarPorId(id) {
    return await db.get("SELECT * FROM usuarios WHERE id = ?", [id]);
  },

  async criar(nome, email) {
    return await db.run("INSERT INTO usuarios (nome, email) VALUES (?, ?)", [
      nome,
      email,
    ]);
  },

  async atualizar(id, nome, email) {
    return await db.run(
      "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?",
      [nome, email, id]
    );
  },

  async excluir(id) {
    return await db.run("DELETE FROM usuarios WHERE id = ?", [id]);
  },
};

module.exports = UsuarioModel;
