import mongoose from "mongoose";

// Definindo o esquema para o modelo Pokemon
const pokemonGroupSchema = new mongoose.Schema(
  {
   "Quantidade por Tipo Primario": {
      type: Number,
      required: true,
    },
    "Total Pontos Base por Geração": {
      type: Number,
      required: true,
    },
    "Quantidade de Legendarios por Cor ID": {
      type: Number,
      required: true,
    },
    "Tipo Secundario mais Comum": {
      type: String,
      required: true,
    },
    "Pokemon mais Pesado por Geração": {
      type: String,
      required: true,
    },
    "Pokemon mais Leve por Geração": {
      type: String,
      required: true,
    }, 
  },
);

// Exportando o modelo Pokémon
export const PokemonGroup = mongoose.model(
  "PokemonGroup",
  pokemonGroupSchema,
  "pokemon_group"
);
