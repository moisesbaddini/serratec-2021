/*
A agendinha de contatos agora pode armazenar até 10 nomes e números de telefone, porém o usuário é quem escolhe em qual posição quer guardar o contato. Caso a posição já esteja ocupada, ele será questionado se quer ou não substituir. Todos os contatos continuam sendo exibidos ao final. Mas as posições ainda não utilizadas aparecem com o texto <vazio>.
*/

let agendinha = new Array(10);
//let agendinha = [];

const leitura = require("prompt-sync")();
let posicao = 0;

do {
  let texto = leitura("Qual posição da agenda você quer guardar? ");
  posicao = Number(texto);

  let nome = agendinha[posicao];
  let substituir = "S";

  if (nome == undefined) {
    console.log("posição vazia.");
  } else {
    console.log(`Posição já contem ${nome}`);
    substituir = leitura("Quer substituir? S ou N");
  }

  if (substituir == "S") {
    nome = leitura("Digite um nome e telefone: ");
    agendinha[posicao] = nome;
  }
} while (posicao > -1);

for (let i = 0; i < 10; i++) {
  let contato = agendinha[i];
  if (contato == undefined) {
    contato = "<vazio>";
  }
  console.log(`Posição: [${i}] Contato: ${contato}`);
}
