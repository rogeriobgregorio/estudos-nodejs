const db = require("./database");

db.serialize(() => {
  db.run(
    `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'user',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `,
    (err) => {
      if (err) {
        console.error("Erro ao criar tabela users:", err.message);
      } else {
        console.log("Tabela 'users' verificada/criada com sucesso.");
      }
    }
  );
});

db.close();
