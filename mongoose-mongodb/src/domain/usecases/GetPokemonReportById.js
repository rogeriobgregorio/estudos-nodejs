export class GetPokemonReportById {
  constructor(pokemonReportRepository) {
    this.pokemonReportRepository = pokemonReportRepository;
  }

  async execute(id) {
    return this.pokemonReportRepository.findById(id);
  }
}
