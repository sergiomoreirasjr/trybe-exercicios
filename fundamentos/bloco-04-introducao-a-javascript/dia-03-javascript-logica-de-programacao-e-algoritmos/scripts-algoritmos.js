// Utilizando o array abaixo, percorra-o somando todos os valores. 
// Caso o valor final seja maior que 15, imprima-o. 
// Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

// let fruits = [3, 4, 10, 1, 12];

// Analisando o enunciado, sabemos que:
// - devemos utilizar o array fruits;
// - o termo "percorra" indica uma estrutura de repetição, ou loop;
// - "somando todos os valores" mostra que devemos ter uma variável que guarda o valor da soma dos valores;
// - o termo "caso" indica uma estrutura condicional, ou if;
// - "imprima o valor final" indica um console.log;

// Agora vamos criar o algoritmo, e pra isso faremos uso dos baby steps. Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples.
// 1. Adicionar o array;
// 2. Criar uma variável com valor 0;
// 3. Criar um loop que percorre o array;
// 4. Incrementar a variável com o valor correspondente a cada loop;
// 5. Criar um if com a condição da variável ser maior que 15;
// 6. Caso a variável obedeça a condição;
// 7. Imprimir a variável
// 8. Caso não obedeça a condição;
// 9. Imprimir a mensagem "valor menor que 16";

let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
    sum += fruits[index];
}

if (sum > 15) {
    console.log(sum)
} else {
    console.log('Valor menor que 16');
}