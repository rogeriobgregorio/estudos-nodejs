export class CreatePokemonGroup {
  constructor(pokemonGroupRepository) {
    this.pokemonGroupRepository = pokemonGroupRepository;
  }

  async execute(pokemonData) {
    const created = await this.pokemonGroupRepository.create(pokemonData);
    return created;
  }
}
