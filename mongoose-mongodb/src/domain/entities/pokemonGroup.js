export class PokemonGroup {
  constructor({
    quantidadePorTipoPrimario,
    totalPontosBasePorGeracao,
    quantidadeDeLegendariosPorCorID,
    tipoSecundarioMaisComum,
    pokemonMaisPesadoPorGeracao,
    pokemonMaisLevePorGeracao,
  }) {
    this.quantidadePorTipoPrimario = quantidadePorTipoPrimario;
    this.totalPontosBasePorGeracao = totalPontosBasePorGeracao;
    this.quantidadeDeLegendariosPorCorID = quantidadeDeLegendariosPorCorID;
    this.tipoSecundarioMaisComum = tipoSecundarioMaisComum;
    this.pokemonMaisPesadoPorGeracao = pokemonMaisPesadoPorGeracao;
    this.pokemonMaisLevePorGeracao = pokemonMaisLevePorGeracao;

    this._validate();
  }

  _validate() {
    if (!this.quantidadePorTipoPrimario)
      throw new Error("Quantidade por tipo primário inválida");
    if (!this.totalPontosBasePorGeracao)
      throw new Error("Total de pontos base por geração inválido");
    if (!this.quantidadeDeLegendariosPorCorID)
      throw new Error("Quantidade de legendários por cor ID inválida");
    if (!this.tipoSecundarioMaisComum)
      throw new Error("Tipo secundário mais comum inválido");
    if (!this.pokemonMaisPesadoPorGeracao)
      throw new Error("Pokémon mais pesado por geração inválido");
    if (!this.pokemonMaisLevePorGeracao)
      throw new Error("Pokémon mais leve por geração inválido");
  }
}
