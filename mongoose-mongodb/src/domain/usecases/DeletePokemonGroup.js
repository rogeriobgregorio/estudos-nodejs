export class DeletePokemonGroup {
  constructor(pokemonGroupRepository) {
    this.pokemonGroupRepository = pokemonGroupRepository;
  }

  async execute(id) {
    return this.pokemonGroupRepository.deleteById(id);
  }
}
