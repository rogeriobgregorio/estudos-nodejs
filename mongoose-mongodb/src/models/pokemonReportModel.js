import mongoose from "mongoose";

// Definindo o esquema para o modelo Pokemon
const pokemonReportSchema = new mongoose.Schema(
  {
    Nome: {
      type: String,
      required: true,
    },
    "Número na Pokédex": {
      type: Number,
      required: true,
      unique: true,
    },
    "Tipo Primário": {
      type: String,
      required: true,
    },
    "Tipo Secundário": {
      type: String,
      required: false,
    },
    Geração: {
      type: String,
      required: true,
    },
    "Total de Pontos Base": {
      type: Number,
      required: true,
      min: 0,
    },
    "Estágio de Evolução": {
      type: String,
      required: true,
    },
    "Quantidade de Evoluções": {
      type: Number,
      required: true,
      min: 1,
    },
    lastSyncedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Exportando o modelo Pokémon
export const PokemonReport = mongoose.model(
  "PokemonReport",
  pokemonReportSchema,
  "pokemon_report"
);
