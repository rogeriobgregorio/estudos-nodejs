import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";
import fs from "fs";

// Cria pasta de logs se não existir
const logDir = "logs";
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

/**
 * Cria uma instância de logger personalizada com o nome do módulo.
 * @param {string} modulePath - Caminho do arquivo (use import.meta.url)
 * @returns {winston.Logger}
 */
const createLogger = (modulePath) => {
  const moduleName = path.basename(modulePath);

  const logFormat = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()} (${moduleName}): ${message}`;
    })
  );

  const consoleTransport = new winston.transports.Console({
    format: winston.format.combine(
      logFormat,
      winston.format.colorize({ all: true }) // aplica cor após montar a mensagem
    ),
  });

  const infoTransport = new DailyRotateFile({
    level: "info",
    filename: path.join(logDir, "info-%DATE%.log"),
    datePattern: "YYYY-MM-DD",
    zippedArchive: false,
    maxFiles: "14d",
    format: logFormat,
  });

  const errorTransport = new DailyRotateFile({
    level: "error",
    filename: path.join(logDir, "error-%DATE%.log"),
    datePattern: "YYYY-MM-DD",
    zippedArchive: false,
    maxFiles: "30d",
    format: logFormat,
  });

  return winston.createLogger({
    level: "info",
    transports: [consoleTransport, infoTransport, errorTransport],
    exitOnError: false,
  });
};

export default createLogger;
