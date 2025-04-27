export class CreatePokemonReport {
  constructor(pokemonReportRepository) {
    this.pokemonReportRepository = pokemonReportRepository;
  }

  async execute(pokemonData) {
    const created = await this.pokemonReportRepository.create(pokemonData);
    return created;
  }
}