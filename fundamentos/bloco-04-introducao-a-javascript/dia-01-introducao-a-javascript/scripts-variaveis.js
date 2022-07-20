const myName = "Sérgio"
const birthCity = "Belo Horizonte"
let birthYear = "2000"

birthYear = "2030"
birthCity = "Betim"

// A mensagem de erro aparece porque birthCity é uma const, e const não pode ter o seu valor alterado;
// Já birthYear não dá erro porque é uma let, e lets podem ter seu valor alterado.

console.log(myName)
console.log(birthCity)
console.log(birthYear)