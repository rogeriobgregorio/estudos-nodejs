import express from "express";
import  { connectToDatabase } from "./config/database.js";
import pokemonReportRoutes from "./presentation/routes/pokemonReportRoutes.js";

const app = express();

app.use(express.json());

// Conectar ao MongoDB
connectToDatabase()

// Rotas
app.use("/pokemon-reports", pokemonReportRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

