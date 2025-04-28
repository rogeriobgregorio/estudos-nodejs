export class GetAllPokemonGroups {
  constructor(pokemonGroupRepository) {
    this.pokemonGroupRepository = pokemonGroupRepository;
  }

  async execute() {
    return this.pokemonGroupRepository.findAll();
  }
}
