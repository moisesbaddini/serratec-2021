/*
Os "vendedores comissionados" recebem 5% do valor de cada produto
vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um
adicional de 9% sobre o excedente. Seu programa irá receber o valor total
de vendas e emitir o recibo de comissão.
Vendas totais: 5230.66
Sua comissão: 261.53
Valor adicional: 20.76
*/

const ler = require("prompt-sync")();

console.log("== COMISSÕES ==");

//Entrada
var vendas = ler("Valor total das suas vendas no mês: ");
vendas = Number(vendas);

//Processamento
const META = 5000.0;
let comissao = vendas * 0.05;
let adicional = 0.0;

if (vendas > META) {
  adicional = (vendas - META) * 0.09;
}

//Saídas
console.info("Sua comissão: ", comissao);
console.info("Valor adicional: ", adicional);
