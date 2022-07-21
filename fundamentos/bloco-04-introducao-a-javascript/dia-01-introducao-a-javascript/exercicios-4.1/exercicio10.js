
const custo = 2;
const valorDeVenda = 4;

if (custo >= 0 && valorDeVenda >= 0) {
  const custoTotal = custo * 1.2;
  const lucroTotal = (valorDeVenda - custoTotal) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Erro, os valores não podem ser negativos");
};
