// Importa as dependências necessárias
import dotenv from "dotenv"; // Biblioteca para carregar variáveis de ambiente do arquivo .env
import { connect, Schema, model, disconnect } from "mongoose"; // Mongoose para interagir com o banco de dados MongoDB
import { writeFileSync } from "fs"; // Módulo do Node.js para manipulação de arquivos de forma síncrona
import { utils, writeFile } from "xlsx"; // Biblioteca para trabalhar com arquivos Excel (.xlsx)

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Conecta-se ao MongoDB usando a variável de ambiente MONGO_URI para a URI de conexão
connect(process.env.MONGO_URI);

// Define o esquema (schema) para o modelo Pokémon. Usamos um esquema flexível (strict: false) para permitir a leitura de dados com estrutura variável.
const pokemonSchema = new Schema({}, { collection: "pokemon", strict: false });

// Cria o modelo "Pokemon" com base no esquema criado anteriormente
const Pokemon = model("Pokemon", pokemonSchema);

// Função assíncrona principal que realiza a busca e geração dos relatórios
async function main() {
  try {
    // Etapa 1 – Buscar todos os documentos da coleção 'pokemon' no MongoDB
    const pokemons = await Pokemon.find().lean();

    // A função `.lean()` retorna uma versão simples dos documentos (sem métodos do Mongoose), o que melhora a performance.

    // Salva os dados obtidos (pokemons) em um arquivo JSON chamado 'relatorio_pokemon.json'
    writeFileSync("relatorio_pokemon.json", JSON.stringify(pokemons, null, 2));

    // Etapa 2 – Criar o relatório em formato Excel
    // Converte os dados obtidos em uma planilha (worksheet)
    const worksheet = utils.json_to_sheet(pokemons);

    // Cria um novo livro de trabalho (workbook) Excel
    const workbook = utils.book_new();

    // Adiciona a planilha com os dados dos pokémons ao livro de trabalho
    utils.book_append_sheet(workbook, worksheet, "Relatorio");

    // Salva o livro de trabalho em um arquivo Excel chamado 'relatorio_pokemon.xlsx'
    writeFile(workbook, "relatorio_pokemon.xlsx");

    // Imprime no console que os relatórios foram gerados com sucesso
    console.log("Relatórios gerados com sucesso!");
  } catch (err) {
    // Em caso de erro, imprime a mensagem de erro
    console.error("Erro ao gerar relatórios:", err);
  } finally {
    // Independentemente de haver erro ou não, desconecta do MongoDB ao final
    await disconnect();
  }
}

// Executa a função principal
main();
