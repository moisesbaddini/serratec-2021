/*
A Jéssica tem uma sapateira no fim do quarto, ao lado da cortina. Nela cabem 5 sapatos, e cada espaço é numerado. Ela quer criar um aplicativo para guardar o número do espaço e o sapato depositado nele. Depois, ao digitar o número da gaveta, o programa irá imprimir o nome do calçado armazenado.
*/

const prompt = require("prompt-sync")();

console.log("<h2>Sapateira da Jéssica<h2>");

let sapato1 = "Sapatilha";
let sapato2 = "Salto alto";
let sapato3 = "Bota marrom";
let sapato4 = "Sandália de dedo";
let sapato5 = "Sapatênis";
let sapato6 = "Quichute";

//Entrada
let gaveta = prompt("qual gaveta você quer ver?");
gaveta = Number(gaveta);

var encontrado;

//Processamento
if (gaveta == 1) encontrado = sapato1;
else if (gaveta == 2) encontrado = sapato2;
else if (gaveta == 3) encontrado = sapato3;
else if (gaveta == 4) encontrado = sapato4;
else if (gaveta == 5) encontrado = sapato5;
else if (gaveta == 6) encontrado = sapato6;

//Limitante ao programador

function encontrar(gaveta) {
  if (gaveta == 1) return sapato1;
  if (gaveta == 2) return sapato2;
  if (gaveta == 3) return sapato3;
  if (gaveta == 4) return sapato4;
  if (gaveta == 5) return sapato5;
  if (gaveta == 6) return sapato6;
}

switch (gaveta) {
  case 1:
    encontrado = sapato1;
    break;
  case 2:
    encontrado = sapato2;
    break;
  case 3:
    encontrado = sapato3;
    break;
  case 4:
    encontrado = sapato4;
    break;
  case 5:
    encontrado = sapato5;
    break;
}

console.log("Na gaveta " + gaveta + " temos um " + encontrado);
