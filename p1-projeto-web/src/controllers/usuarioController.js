const UsuarioModel = require("../models/usuarioModel");
const fs = require("fs");
const path = require("path");

// Função para registrar logs
function registrarLog(acao, id, usuario) {
  const logPath = path.join(__dirname, "../logs/usuarios.log");
  const log = `${new Date().toISOString()} - Ação: ${acao} - ID: ${id} - Usuário: ${usuario}\n`;
  fs.appendFileSync(logPath, log);
}

const UsuarioController = {
  async listarTodos(req, res) {
    try {
      const usuarios = await UsuarioModel.listarTodos();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar usuários" });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await UsuarioModel.buscarPorId(id);

      if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }

      res.json(usuario);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar usuário" });
    }
  },

  async criar(req, res) {
    try {
      const { nome, email } = req.body;

      if (!nome || nome.length < 3) {
        return res
          .status(400)
          .json({ erro: "Nome deve ter pelo menos 3 caracteres" });
      }
      if (!email) {
        return res.status(400).json({ erro: "Email é obrigatório" });
      }

      await UsuarioModel.criar(nome, email);
      registrarLog("Criar", "-", nome);
      res.status(201).json({ mensagem: "Usuário criado com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar usuário" });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;

      if (!nome || nome.length < 3) {
        return res
          .status(400)
          .json({ erro: "Nome deve ter pelo menos 3 caracteres" });
      }
      if (!email) {
        return res.status(400).json({ erro: "Email é obrigatório" });
      }

      await UsuarioModel.atualizar(id, nome, email);
      registrarLog("Atualizar", id, nome);
      res.json({ mensagem: "Usuário atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao atualizar usuário" });
    }
  },

  async excluir(req, res) {
    try {
      const { id } = req.params;
      await UsuarioModel.excluir(id);
      registrarLog("Excluir", id, "-");
      res.json({ mensagem: "Usuário excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao excluir usuário" });
    }
  },
};

module.exports = UsuarioController;
