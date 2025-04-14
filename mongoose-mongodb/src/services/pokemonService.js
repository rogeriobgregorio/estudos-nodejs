import { connectToDatabase, disconnectFromDatabase } from "../config/database.js";
import { exportToJson, exportToCsv } from "../utils/exportUtils.js";
import { mapToExportFormat } from "../utils/mapFieldsToRaw.js";
import mongoose from "mongoose";
import createLogger from "../utils/logger.js";

const logger = createLogger(import.meta.url);

/**
 * Exporta os relatórios de Pokémon para arquivos JSON e CSV
 * @param {Object} fieldMap - Mapeamento de campos de exportação
 * @param {string} fileName - Nome do arquivo
 * @returns {Promise<void>}
 */
export const exportPokemonReports = async (fieldMap, fileName) => {
  try {
    logger.info("🚀 Iniciando exportação de relatórios...");
    await connectToDatabase();
    logger.info("🔄 Buscando dados de Pokémon...");

    const pokemons = await mongoose.connection
      .collection("pokemon")
      .find()
      .toArray();

    if (!pokemons.length) {
      logger.warn("⚠️ Nenhum Pokémon encontrado.");
      return;
    }

    logger.info(`📊 ${pokemons.length} Pokémon(s) encontrados.`);

    const exportData = pokemons.map((p) => mapToExportFormat(p, fieldMap));

    logger.info("📁 Exportando arquivos...");
    exportToJson(fileName, exportData);
    exportToCsv(fileName, exportData);

    logger.info("✅ Exportação concluída com sucesso!");

  } catch (error) {
    logger.error("❌ Erro durante a exportação:", error.message);
  } finally {
    await disconnectFromDatabase();
  }
  logger.info("🏁 Processo de exportação finalizado.");
};
