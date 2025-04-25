import { connectToDatabase, disconnectFromDatabase } from "../config/database.js";
import { exportToJson, exportToCsv } from "../utils/exportUtils.js";
import { mapToExportFormat } from "../utils/mapFieldsToRaw.js";
import mongoose from "mongoose";
import createLogger from "../utils/logger.js";
import { projectionFromFieldMap } from "../utils/projectionFromFieldMap.js";
import { PokemonReport } from "../models/pokemonReportModel.js";

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

    const projection = projectionFromFieldMap(fieldMap);

    const excludedFormsRegex = /-mega|-starter|-gmax|-galar|-alola|-hisui|-paldea|-battle-bond/i;

    const pokemons = await mongoose.connection
      .collection("pokemon")
      .find(
        { Name: { $not: excludedFormsRegex } },
        { projection }
      )
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

    logger.info("📤 Fazendo upsert na coleção 'pokemon_report'...");
    const operations = exportData.map((pokemon) => ({
      updateOne: {
        filter: { "Número na Pokédex": pokemon["Número na Pokédex"] },
        update: { $set: pokemon },
        upsert: true,
      },
    }));

    const result = await PokemonReport.bulkWrite(operations);
    logger.info(
      `✅ Upserts realizados: ${result.upsertedCount}, 
      atualizações: ${result.modifiedCount}`
    );

  } catch (error) {
    logger.error("❌ Erro durante a exportação:", error);
  } finally {
    await disconnectFromDatabase();
  }
  logger.info("🏁 Processo de exportação finalizado.");
};
