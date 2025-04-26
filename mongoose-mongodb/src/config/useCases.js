import { MongoPokemonReportRepository } from "../infra/repositories/MongoPokemonReportRepository.js";
import { MongoPokemonGroupRepository } from "../infra/repositories/MongoPokemonGroupRepository.js";

import { CreatePokemonReport } from "../domain/usecases/CreatePokemonReport.js";
import { GetAllPokemonReports } from "../domain/usecases/GetAllPokemonReports.js";
import { GetPokemonReportById } from "../domain/usecases/GetPokemonReportById.js";
import { DeletePokemonReport } from "../domain/usecases/DeletePokemonReport.js";

import { CreatePokemonGroup } from "../domain/usecases/CreatePokemonGroup.js";
import { GetAllPokemonGroups } from "../domain/usecases/GetAllPokemonGroups.js";
import { GetPokemonGroupById } from "../domain/usecases/GetPokemonGroupById.js";
import { DeletePokemonGroup } from "../domain/usecases/DeletePokemonGroup.js";

// Instância do repositório
const pokemonReportRepository = new MongoPokemonReportRepository();

// Instâncias dos casos de uso para Pokémon Report
export const createPokemonReport = new CreatePokemonReport(
  pokemonReportRepository
);

export const getAllPokemonReports = new GetAllPokemonReports(
  pokemonReportRepository
);

export const getPokemonReportById = new GetPokemonReportById(
  pokemonReportRepository
);

export const deletePokemonReport = new DeletePokemonReport(
  pokemonReportRepository
);

// Instância do repositório para Pokémon Group
const pokemonGroupRepository = new MongoPokemonGroupRepository();

// Instância do caso de uso para criar Pokémon Group
export const createPokemonGroup = new CreatePokemonGroup(
  pokemonGroupRepository
);

export const getAllPokemonGroups = new GetAllPokemonGroups(
  pokemonGroupRepository
);

export const getPokemonGroupById = new GetPokemonGroupById(
  pokemonGroupRepository
);

export const deletePokemonGroup = new DeletePokemonGroup(
  pokemonGroupRepository
);
