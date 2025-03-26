require("dotenv").config();

const oracledb = require("oracledb");
oracledb.initOracleClient(); // Ativa o modo thick

const dbConfig = {
  user: process.env.ORACLE_USER || "seu_usuario",
  password: process.env.ORACLE_PASSWORD || "sua_senha",
  connectString: process.env.ORACLE_CONNECT_STRING || "localhost:1521/ORCL",
};

async function getConnection() {
  try {
    return await oracledb.getConnection(dbConfig);
  } catch (err) {
    console.error("Erro ao conectar ao Oracle:", err);
    throw err;
  }
}

module.exports = { getConnection };
