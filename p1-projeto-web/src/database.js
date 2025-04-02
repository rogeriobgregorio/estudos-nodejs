const sqlite3 = require("sqlite3").verbose();
const { promisify } = require("util");
const fs = require("fs");

// Verifica se o banco de dados já existe
const DB_FILE = "./database.sqlite";
const dbExists = fs.existsSync(DB_FILE);

const db = new sqlite3.Database(DB_FILE);

// Promisify para suporte a async/await
db.run = promisify(db.run);
db.get = promisify(db.get);
db.all = promisify(db.all);

// Criar tabelas se o banco não existir
if (!dbExists) {
  db.serialize(() => {
    db.run(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
      )`,
      (err) => {
        if (err) console.error("Erro ao criar tabela de usuários:", err);
      }
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        preco REAL NOT NULL CHECK (preco > 0),
        estoque INTEGER NOT NULL CHECK (estoque >= 0)
      )`,
      (err) => {
        if (err) console.error("Erro ao criar tabela de produtos:", err);
      }
    );

    console.log("Banco de dados inicializado com sucesso.");
  });
}

module.exports = db;
