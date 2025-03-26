const { getConnection } = require("./dbConfig");

async function testQuery() {
  let connection;
  try {
    connection = await getConnection();

    const result = await connection.execute(
      `SELECT * FROM sua_tabela`,
      [], // Parâmetros (se houver)
      { outFormat: oracledb.OUT_FORMAT_OBJECT } // Formato de saída como JSON
    );

    console.log("Resultados:", result.rows);
  } catch (err) {
    console.error("Erro ao executar query:", err);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

testQuery();
