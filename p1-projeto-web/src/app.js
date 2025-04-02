const express = require("express");
const usuarioRoutes = require("./routes/usuarioRoutes");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(usuarioRoutes);
app.use(produtoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
