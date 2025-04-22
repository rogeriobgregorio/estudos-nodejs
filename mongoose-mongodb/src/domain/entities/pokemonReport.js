export class PokemonReport {
  constructor({
    nome,
    numeroNaPokedex,
    tipoPrimario,
    tipoSecundario = null,
    geracao,
    totalPontosBase,
    estagioEvolucao,
    quantidadeEvolucoes,
  }) {
    this.nome = nome;
    this.numeroNaPokedex = numeroNaPokedex;
    this.tipoPrimario = tipoPrimario;
    this.tipoSecundario = tipoSecundario;
    this.geracao = geracao;
    this.totalPontosBase = totalPontosBase;
    this.estagioEvolucao = estagioEvolucao;
    this.quantidadeEvolucoes = quantidadeEvolucoes;

    this._validate();
  }

  _validate() {
    if (!this.nome || typeof this.nome !== "string")
      throw new Error("Nome inválido");
    if (!Number.isInteger(this.numeroNaPokedex))
      throw new Error("Número na Pokédex inválido");
    if (!this.tipoPrimario) throw new Error("Tipo primário é obrigatório");
    if (!this.geracao) throw new Error("Geração inválida");
    if (this.totalPontosBase < 0)
      throw new Error("Total de pontos base inválido");
    if (!this.estagioEvolucao)
      throw new Error("Estágio de evolução é obrigatório");
    if (
      !Number.isInteger(this.quantidadeEvolucoes) ||
      this.quantidadeEvolucoes < 1
    ) {
      throw new Error("Quantidade de evoluções inválida");
    }
  }
}
