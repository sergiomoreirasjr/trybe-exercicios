let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidade = 0; //começa em 0 porque o for ainda não teve nenhuma interação

for (let index = 0; index < numbers.length; index = index + 1) {
    if (numbers [index]% 2 !== 0) {
        quantidade += 1;
    }
}

if (result === 0) {
    console.log("Nenhum valor ímpar encontrado")
} else {
    console.log(quantidade)
}