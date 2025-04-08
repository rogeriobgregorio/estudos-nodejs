import mongoose from "mongoose";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const MAX_RETRIES = 5; // Número máximo de tentativas
let attempts = 0;

export const connectToDatabase = async () => {

  try {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri);

    console.log("✅ MongoDB conectado com sucesso!");
  } catch (error) {
    attempts++;
    console.error(`❌ Tentativa ${attempts} de ${MAX_RETRIES} para conectar ao MongoDB falhou.`);
    console.error("Erro:", error.message);

    // Se o número máximo de tentativas for alcançado, encerra o processo
    if (attempts < MAX_RETRIES) {
      setTimeout(() => connectToDatabase(), 5000); // Tenta novamente após 5 segundos
    } else {
      console.error("❌ Numero máximo de tentativas alcançado. Encerrando o processo.");
      process.exit(1); // Finaliza o processo após várias tentativas falhas
    }
  }

  // O evento 'disconnected' pode ser útil para lidar com desconexões inesperadas
  mongoose.connection.on("disconnected", () => {
    console.log("⚠️ MongoDB desconectado!");
  });

  // Outro tipo de erro (ex: falhas de rede, etc.)
  mongoose.connection.on("error", (err) => {
    console.error("❌ Erro na conexão com o MongoDB:", err);
  });
};
