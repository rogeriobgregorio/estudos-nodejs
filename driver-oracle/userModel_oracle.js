const oracledb = require('oracledb');
const { getConnection } = require('../dbConfig');

class UserModel {
  // Buscar usuário por ID
  static async getUserById(userId) {
    let connection;
    try {
      connection = await getConnection();
      const result = await connection.execute(
        `SELECT * FROM users WHERE id = :id`, 
        [userId], 
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      return result.rows[0] || null;
    } catch (err) {
      console.error('Erro ao buscar usuário:', err);
      throw err;
    } finally {
      if (connection) await connection.close();
    }
  }

  // Criar novo usuário
  static async createUser(name, email) {
    let connection;
    try {
      connection = await getConnection();
      const result = await connection.execute(
        `INSERT INTO users (name, email) VALUES (:name, :email) RETURNING id INTO :id`,
        { name, email, id: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER } },
        { autoCommit: true }
      );
      return result.outBinds.id[0];
    } catch (err) {
      console.error('Erro ao criar usuário:', err);
      throw err;
    } finally {
      if (connection) await connection.close();
    }
  }
}

module.exports = UserModel;
