function gerarPares(n) {
  let pares = [];
  for (let i = 2; pares.length < n; i += 2) {
    pares.push(i);
  }
  return pares;
}

export default gerarPares;
