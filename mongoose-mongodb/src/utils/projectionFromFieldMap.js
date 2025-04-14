/**
 * Gera uma projeção MongoDB a partir de um fieldMap genérico.
 * @param {Object} fieldMap - Objeto onde os valores são os nomes reais dos campos no banco
 * @param {boolean} includeId - Se deve incluir o campo _id (default: false)
 * @returns {Object} projeção MongoDB
 */
export const projectionFromFieldMap = (fieldMap, includeId = false) => {
  const projection = {};

  // Adiciona os campos do Mongo (valores do fieldMap)
  Object.values(fieldMap).forEach((field) => {
    projection[field] = 1;
  });

  // Exclui _id por padrão
  if (!includeId) {
    projection["_id"] = 0;
  }

  return projection;
};
