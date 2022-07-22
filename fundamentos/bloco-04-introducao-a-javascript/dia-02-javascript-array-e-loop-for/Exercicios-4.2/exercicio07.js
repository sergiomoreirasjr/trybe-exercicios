let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let lowerNumber = numbers[0]; // o primeiro número vai ser momentaneamente o maior porque só ele foi checado.

for (let index = 1; index < numbers.length; index += 1) { // o index começa em 1 porque o 0 já foi checado no let acima.
  if (numbers[index] < lowerNumber) {
    lowerNumber = numbers[index];
  }
}

console.log(lowerNumber);
