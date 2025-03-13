const { User } = require("../models");

module.exports = {
  async getProfile(req, res) {
    try {
      const user = await User.findByPk(req.user.id, {
        attributes: ["id", "name", "email", "role"],
      });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: "Erro no servidor", error });
    }
  },

  async listUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: ["id", "name", "email", "role"],
      });

      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: "Erro no servidor", error });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password, role } = req.body;

      // Verifica se o usuário existe
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      // Verifica se o usuário tem permissão (ADMIN pode alterar qualquer um, usuário comum só altera a si mesmo)
      if (req.user.id !== parseInt(id) && req.user.role !== "ADMIN") {
        return res.status(403).json({ message: "Acesso negado." });
      }

      // Atualiza os dados (se fornecidos)
      if (name) user.name = name;
      if (email) user.email = email;
      if (password) user.password = password;
      if (role && req.user.role === "ADMIN") user.role = role; // Apenas ADMIN pode mudar a role

      await user.save();

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: "Erro no servidor", error });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      // Verifica se o usuário existe
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      // Verifica se o usuário tem permissão para deletar
      if (req.user.id !== parseInt(id) && req.user.role !== "ADMIN") {
        return res.status(403).json({ message: "Acesso negado." });
      }

      await user.destroy();

      return res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Erro no servidor", error });
    }
  },
};
