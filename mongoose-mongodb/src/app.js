import { exportPokemonReports } from "./services/pokemonService.js";

const fieldMap = {
  Nome: "Name",
  "National Dex #": "National Dex #",
  "Primary Typing": "Primary Typing",
  "Secondary Typing": "Secondary Typing",
  Generation: "Generation",
  "Base Stat Total": "Base Stat Total",
  "Evolution Stage": "Evolution Stage",
  "Number of Evolutions": "Number of Evolution",
};

exportPokemonReports(fieldMap, "pokemon_reports");
