// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" 
//e retorne no formato: A soma de 1 a 50 é: X.

let sum = 0;

for (index = 1; index <= 50; index += 1){
    sum += index
}

console.log("A soma de 1 a 50 é:", sum);

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. 
//Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let amount = 0;

for(index = 2; index <= 150 ; index += 1){
    if (index % 3 == 0){
        amount += 1;
    } 
    if (amount === 50){
        console.log("Mensagem secreta.")
    }
}

//3. Crie um algoritmo que recebe a idade de Nat, Renan e Sincero e 
//imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.

let nat = 22;
let renan = 27;
let sincero = 19;

if (nat < renan && nat < sincero) {
  console.log("Nat é a mais nova");
}
else if (renan < sincero && renan < nat) {
  console.log("Renan é a mais nova");
}
else if (sincero < renan && sincero < nat) {
  console.log("Sincero é a mais nova")
}