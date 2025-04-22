export class GetAllPokemonReports {
  constructor(pokemonReportRepository) {
    this.pokemonReportRepository = pokemonReportRepository;
  }

  async execute() {
    return this.pokemonReportRepository.findAll();
  }
}
