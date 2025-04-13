import fs from "fs";
import { Parser } from "json2csv";
import createLogger from "./logger.js";

const logger = createLogger(import.meta.url);

/**
 * Garante que o nome do arquivo tenha a extensão correta
 * @param {string} filename - Nome base do arquivo
 * @param {string} extension - Extensão (ex: "json", "csv")
 * @returns {string} Nome final com extensão
 */
const withExtension = (filename, extension) =>
  filename.endsWith(`.${extension}`) ? filename : `${filename}.${extension}`;

/**
 * Exporta dados para JSON
 * @param {string} filename - nome do arquivo (ex: pokemons)
 * @param {Array|Object} data - array ou objeto a salvar
 */
export const exportToJson = (filename, data) => {
  try {
    const finalName = withExtension(filename, "json");
    fs.writeFileSync(finalName, JSON.stringify(data, null, 2), "utf-8");
    logger.info(`✅ Arquivo JSON salvo como ${finalName}`);
  } catch (error) {
    logger.error(`❌ Falha ao exportar JSON (${filename}): ${error.message}`);
  }
};

/**
 * Exporta dados para CSV
 * @param {string} filename - nome do arquivo (ex: pokemons)
 * @param {Array} data - array de objetos a salvar
 */
export const exportToCsv = (filename, data) => {
  try {
    const parser = new Parser();
    const csv = parser.parse(data);
    const finalName = withExtension(filename, "csv");
    fs.writeFileSync(finalName, csv, "utf-8");
    logger.info(`✅ Arquivo CSV salvo como ${finalName}`);
  } catch (error) {
    logger.error(`❌ Falha ao exportar CSV (${filename}): ${error.message}`);
  }
};
