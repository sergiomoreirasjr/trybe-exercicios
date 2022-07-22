let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0; // começa em 0 porque o for ainda não teve nenhuma interação

for (let index = 0; index < numbers.length; index = index + 1) {
    soma += numbers[index]; // o soma vai a cada interação somar o que já tem nela mesmo com cada elemento do array numbers
}
console.log(soma)