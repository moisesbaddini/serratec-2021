/*
O Daniel precisa pagar dois boletos em atraso diretamente no caixa do banco. Crie uma função “guiche” que recebe o parâmetro ‘numero’, e escreve no console o texto: "Boleto <numero>: Pagamento recebido.”.
*/

//Processamento
function guiche(numero, valor) {
  console.log("Boleto ", numero, ": Pagamento recebido de R$", valor);
}

const ler = require("prompt-sync")();

//numero = boleto;
var boleto = ler("Digite no pinpad o nro. do boleto a pagar: ");
guiche(boleto, 33.5);

//var boleto = ler("Digite no pinpad o nro. do boleto a pagar: ");
guiche(boleto, 109.76);

var nova = Math.trunc(12.345);
console.log(nova);
