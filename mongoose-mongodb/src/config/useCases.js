import { MongoPokemonReportRepository } from "../infra/repositories/MongoPokemonReportRepository.js";

import { CreatePokemonReport } from "../domain/usecases/CreatePokemonReport.js";
import { GetAllPokemonReports } from "../domain/usecases/GetAllPokemonReports.js";
import { GetPokemonReportById } from "../domain/usecases/GetPokemonReportById.js";
import { DeletePokemonReport } from "../domain/usecases/DeletePokemonReport.js";

// Instância do repositório
const pokemonReportRepository = new MongoPokemonReportRepository();

// Instâncias dos casos de uso
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
