const oracledb = require("oracledb");
const { getConnection } = require("../dbConfig");

class ProductModel {
  // Buscar produto por ID
  static async getProductById(productId) {
    let connection;
    try {
      connection = await getConnection();
      const result = await connection.execute(
        `SELECT * FROM products WHERE id = :id`,
        [productId],
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      return result.rows[0] || null;
    } catch (err) {
      console.error("Erro ao buscar produto:", err);
      throw err;
    } finally {
      if (connection) await connection.close();
    }
  }

  // Criar novo produto
  static async createProduct(name, price) {
    let connection;
    try {
      connection = await getConnection();
      const result = await connection.execute(
        `INSERT INTO products (name, price) VALUES (:name, :price) RETURNING id INTO :id`,
        { name, price, id: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER } },
        { autoCommit: true }
      );
      return result.outBinds.id[0];
    } catch (err) {
      console.error("Erro ao criar produto:", err);
      throw err;
    } finally {
      if (connection) await connection.close();
    }
  }
}

module.exports = ProductModel;
