/*
Indefinida: Repete pra sempre, enquanto a expressão é verdade

  Promoção da Radio 93:
  Os primeiros 5 ouvintes que ligarem ganham um boné e camiseta da rádio.
*/

//Função de leitura classica e repetitiva
const ler = require("prompt-sync")();

//Sintaxe
//para (inicio do laço; condicao de continuidade; final da iteração atual) instrução;

//variável de controle
//controla a repetição definida
//finalide == inicio e fim das iterações

//Limites : inicio e fim

//< =

for (var i = 1; i <= 5; i++) {
  let nome = ler("Ouvinte: ");
  console.log("Parabéns ", nome, " ganhou paçoca!");
}

console.log("Promoção encerrada");

/*
var controle = 0;
for ( ; controle < 5; controle += 1) {
}
*/
