const bcrypt = require("bcryptjs");
const UserModel = require("../models/UserModel");

const UserService = {
  // Criar novo usuário com hash de senha
  createUser: (name, email, password, role, callback) => {
    UserModel.findByEmail(email, (err, user) => {
      if (err) return callback(err);
      if (user) return callback(new Error("E-mail já cadastrado."));

      // Hash da senha antes de salvar
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return callback(err);

        UserModel.create(name, email, hashedPassword, role, callback);
      });
    });
  },

  // Buscar usuário por e-mail
  getUserByEmail: (email, callback) => {
    UserModel.findByEmail(email, callback);
  },

  // Buscar usuário por ID
  getUserById: (id, callback) => {
    UserModel.findById(id, (err, user) => {
      if (err) return callback(err);
      if (!user) return callback(new Error("Usuário não encontrado."));
      callback(null, user);
    });
  },

  // Atualizar dados do usuário
  updateUser: (id, name, email, callback) => {
    UserModel.update(id, name, email, (err, changes) => {
      if (err) return callback(err);
      if (changes === 0)
        return callback(new Error("Usuário não encontrado ou sem alterações."));
      callback(null, "Usuário atualizado com sucesso.");
    });
  },

  // Deletar usuário
  deleteUser: (id, callback) => {
    UserModel.delete(id, (err, changes) => {
      if (err) return callback(err);
      if (changes === 0) return callback(new Error("Usuário não encontrado."));
      callback(null, "Usuário excluído com sucesso.");
    });
  },

  // Listar todos os usuários
  listUsers: (callback) => {
    UserModel.findAll(callback);
  },
};

module.exports = UserService;
