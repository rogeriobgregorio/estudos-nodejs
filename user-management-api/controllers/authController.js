const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  async register(req, res) {
    try {
      const { name, email, password, role } = req.body;

      // Verifica se o email já está cadastrado
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: "Email já cadastrado" });
      }

      // Cria o usuário
      const user = await User.create({ name, email, password, role });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Erro no servidor", error });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Verifica se o usuário existe
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: "Credenciais inválidas" });
      }

      // Verifica a senha
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Credenciais inválidas" });
      }

      // Gera o token JWT
      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.json({ access_token: token });
    } catch (error) {
      return res.status(500).json({ message: "Erro no servidor", error });
    }
  },
};
