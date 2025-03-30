require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const app = express();

// Configurações básicas do servidor
app.use(cors());
app.use(express.json()); // Para trabalhar com JSON

// Rota inicial de teste
app.get("/", (req, res) => {
  res.json({ message: "API está funcionando!" });
});

// Rotas de usuário
app.use("/api", userRoutes);


// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
