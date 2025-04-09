import { connectToDatabase } from "../config/database.js";
import { PokemonReport } from "../models/pokemonReportModel.js";

export const generatePokemonReport = async (pokemonData) => {
  try {
    // Conecta ao banco de dados MongoDB
    await connectToDatabase();

    // Cria um novo relatório de Pokémon com os dados fornecidos
    const pokemonReport = new PokemonReport(pokemonData);

    // Se o relatório estiver vazio, exibe uma mensagem de aviso
    Object.keys(pokemonReport.toObject()).length === 0
      ? console.log("⚠️ Relatório vazio!")
      : console.log("✅ Relatório de Pokémon gerado com sucesso!");

    // Retorna o relatório de Pokémon gerado
    return pokemonReport;
    
  } catch (error) {
    console.error("❌ Erro ao gerar o relatório de Pokémon:", error);
  }
};
