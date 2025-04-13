/**
 * Mapeia dinamicamente os campos do Pokémon com base em um dicionário de mapeamento.
 * @param {Object} pokemon - Objeto vindo do banco
 * @param {Object} fieldMap - Chaves desejadas => Caminhos no objeto original
 * @returns {Object}
 */
export const mapToExportFormat = (pokemon, fieldMap) => {
  const result = {};

  for (const [exportKey, originalKey] of Object.entries(fieldMap)) {
    if (typeof originalKey !== "string") {
      result[exportKey] = "N/A";
      continue;
    }

    const value = getNestedValue(pokemon, originalKey);
    result[exportKey] = value !== undefined ? value : "N/A";
  }

  return result;
};

/**
 * Acessa valores aninhados em um objeto usando uma string de caminho.
 * @param {Object} obj - Objeto a ser acessado
 * @param {string} path - Caminho do valor (ex: "primaryTyping.name")
 * @returns {*} - Valor encontrado ou undefined se não existir
 */
const getNestedValue = (obj, path) => {
  if (!obj || typeof path !== "string") return undefined;
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};
