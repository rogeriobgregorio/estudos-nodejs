import { PokemonReportRepository } from "../../domain/repositories/pokemonRepository.js";
import { PokemonReport } from "../../models/pokemonReportModel.js";

export class MongoPokemonReportRepository extends PokemonReportRepository {
  async create(pokemonReportEntity) {
    const document = new PokemonReport({
      Nome: pokemonReportEntity.Nome,
      "Número na Pokédex": pokemonReportEntity["Número na Pokédex"],
      "Tipo Primário": pokemonReportEntity["Tipo Primário"],
      "Tipo Secundário": pokemonReportEntity["Tipo Secundário"],
      Geração: pokemonReportEntity.Geração,
      "Total de Pontos Base": pokemonReportEntity["Total de Pontos Base"],
      "Estágio de Evolução": pokemonReportEntity["Estágio de Evolução"],
      "Quantidade de Evoluções": pokemonReportEntity["Quantidade de Evoluções"],
    });

    const saved = await document.save();
    return saved.toObject();
  }

  async findAll() {
    return PokemonReport.find().lean();
  }

  async findById(id) {
    return PokemonReport.findById(id).lean();
  }

  async deleteById(id) {
    return PokemonReport.findByIdAndDelete(id);
  }
}
