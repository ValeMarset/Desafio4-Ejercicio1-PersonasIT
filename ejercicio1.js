function buscar_valor(lista_numeros, valor_objetivo) {
  for (let i of lista_numeros) {
    if (lista_numeros[i] === valor_objetivo) return console.log(i);
  }
  return console.log(-1);
}
const lista_de_numeros = [1, 45, 23, 76, 23, 4, 12, 45, 23];
buscar_valor(lista_de_numeros, 45);
