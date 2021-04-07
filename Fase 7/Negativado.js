/*
O programa “negativado” irá solicitar a digitação do valor da dívida, e oferecer um empréstimo no mesmo valor.
Valor da dívida: -80
Valor liberado para empréstimo: R$ 80
*/

const ler = require("prompt-sync")();

//Entradas
let divida = ler("Valor da dívida: ");

//Processamento
emprestimo = Math.abs(divida);

//Saídas
console.log("Valor liberado para empréstimo: R$ ", emprestimo);
