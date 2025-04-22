export class DeletePokemonReport {
  constructor(pokemonReportRepository) {
    this.pokemonReportRepository = pokemonReportRepository;
  }

  async execute(id) {
    return this.pokemonReportRepository.deleteById(id);
  }
}
