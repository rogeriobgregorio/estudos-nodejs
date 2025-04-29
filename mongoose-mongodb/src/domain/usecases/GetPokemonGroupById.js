export class GetPokemonGroupById {
  constructor(pokemonGroupRepository) {
    this.pokemonGroupRepository = pokemonGroupRepository;
  }

  async execute(id) {
    return this.pokemonGroupRepository.findById(id);
  }
}
