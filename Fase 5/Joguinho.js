/*
Cara ou coroa
*/

//Repetir sempre que precisar de leitura
const ler = require("prompt-sync")();

var moeda = ler('Digite "cara" ou "coroa": ');
var resultado;

if (moeda == "coroa") {
  resultado = "Você ganhou, pq deu coroa";
} else {
  resultado = "Vai todo mundo perder";
}

console.info("Resultado: ", resultado);
