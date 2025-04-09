import mongoose from "mongoose";

// Definindo o esquema para o modelo Pokemon
const pokemonReportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nationalDexNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    primaryTyping: {
      type: String,
      required: true,
    },
    secondaryTyping: {
      type: String,
      required: false,
    },
    generation: {
      type: String,
      required: true,
    },
    baseStatTotal: {
      type: Number,
      required: true,
      min: 0,
    },
    evolutionStage: {
      type: String,
      required: true,
    },
    numberOfEvolutions: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true } // Adiciona createdAt e updatedAt automaticamente
);

// Exportando o modelo Pokémon
export const PokemonReport = mongoose.model(
  "PokemonReport",
  pokemonReportSchema
);
