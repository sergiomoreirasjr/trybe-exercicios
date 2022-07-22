// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);