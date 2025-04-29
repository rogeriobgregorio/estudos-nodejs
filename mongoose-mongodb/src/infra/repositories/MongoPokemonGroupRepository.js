import { PokemonGroupRepository } from "../../domain/repositories/pokemonRepository.js";
import { PokemonGroup } from "../../models/pokemonGroupModel.js";

export class MongoPokemonGroupRepository extends PokemonGroupRepository {
  async create(pokemonGroupEntity) {
    const document = new PokemonGroup({
      "Quantidade por Tipo Primario": pokemonGroupEntity["Quantidade por Tipo Primario"],
      "Total Pontos Base por Geração": pokemonGroupEntity["Total Pontos Base por Geração"],
      "Quantidade de Legendarios por Cor ID": pokemonGroupEntity["Quantidade de Legendarios por Cor ID"],
      "Tipo Secundario mais Comum": pokemonGroupEntity["Tipo Secundario mais Comum"],
      "Pokemon mais Pesado por Geração": pokemonGroupEntity["Pokemon mais Pesado por Geração"],
      "Pokemon mais Leve por Geração": pokemonGroupEntity["Pokemon mais Leve por Geração"],
    });

    const saved = await document.save();
    return saved.toObject();
  }

  async findAll() {
    return PokemonGroup.find().lean();
  }

  async findById(id) {
    return PokemonGroup.findById(id).lean();
  }

  async deleteById(id) {
    return PokemonGroup.findByIdAndDelete(id);
  }
}
