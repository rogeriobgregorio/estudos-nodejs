import mongoose from "mongoose";
import dotenv from "dotenv";
import createLogger from "../utils/logger.js";

const logger = createLogger(import.meta.url);

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const MAX_RETRIES = 5;
let attempts = 0;

mongoose.connection.on("disconnected", () => {
  logger.warn("⚠️ MongoDB desconectado!");
});

mongoose.connection.on("error", (err) => {
  logger.error("❌ Erro na conexão com o MongoDB:", err);
});

/**
 * Conecta ao MongoDB usando Mongoose
 * @returns {Promise<void>} - Promise que resolve quando a conexão é estabelecida
 */
export const connectToDatabase = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      logger.info("🔁 Conexão já estabelecida com o MongoDB!");
      return;
    }

    logger.info("🔗 Estabelecendo conexão com o MongoDB...");
    await mongoose.connect(MONGO_URI);
    logger.info("✅ MongoDB conectado com sucesso!");

  } catch (error) {
    attempts++;
    logger.error(`❌ Tentativa ${attempts}/${MAX_RETRIES} falhou: ${error.message}`);

    if (attempts < MAX_RETRIES) {
      logger.info("⏳ Tentando novamente em 5 segundos...");
      setTimeout(() => connectToDatabase(), 5000);

    } else {
      logger.error("❌ Numero máximo de tentativas alcançado. Encerrando o processo.");
      process.exit(1);
    }
  }
};

/**
 * Desconecta do MongoDB usando Mongoose
 * @returns {Promise<void>} - Promise que resolve quando a desconexão é concluída
 */
export const disconnectFromDatabase = async () => {
  try {
    logger.info("🔌 Encerrando conexão com MongoDB...");
    await mongoose.disconnect();
    logger.info("✅ Desconexão realizada com sucesso.");
  } catch (error) {
    logger.error("❌ Erro ao desconectar:", error.message);
  }
};
