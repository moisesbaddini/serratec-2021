/*
O locutor da rádio 90 FM irá fazer uma pergunta ao vivo, cuja resposta ele já falou ao longo da programação.
Três ouvintes terão a chance de ganhar uma caneca personalizada, acertando a resposta. E cada ouvinte terá duas chances de responder.
*/

//Função de leitura classica e repetitiva
const ler = require("prompt-sync")();

const RESPOSTA = "resultado";

for (i = 0; i < 3; i++) {
  var chance = 2;
  var acerto;

  do {
    var resposta = ler("O que é mais importante, a expressão ou o resultado? ");
    acerto = resposta === RESPOSTA;
    chance--;
  } while (chance > 0 && !acerto);

  if (acerto) console.log("Parabéns! Ganhou a caneca com seu nome.");
  else console.log("Que pena.. fica pra próxima");
}

console.log("Parabéns aos ganhadores!");
