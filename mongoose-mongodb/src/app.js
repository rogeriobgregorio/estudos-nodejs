import { exportPokemonReports } from "./services/pokemonService.js";

const fieldMap = {
  Nome: "Name",
  "Número na Pokédex": "National Dex #",
  "Tipo Primário": "Primary Typing",
  "Tipo Secundário": "Secondary Typing",
  Geração: "Generation",
  "Total de Pontos Base": "Base Stat Total",
  "Estágio de Evolução": "Evolution Stage",
  "Quantidade de Evoluções": "Number of Evolution",
};

exportPokemonReports(fieldMap, "pokemon_reports");
