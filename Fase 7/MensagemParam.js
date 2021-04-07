const ler = require("prompt-sync")();
var nome;

//Declaração
function mensagem() {
  console.log("Bom dia ", nome, "!");
  console.log("Executa o código que eu tenho dentro da função");

  if (nome == "") console.log("Poxa, bem vindo genérico!");
}

nome = "Marcio"; //ler("Qual seu nome? ");
mensagem();

nome = "Sonia"; // ler("Qual seu nome? ");
mensagem();

nome = ""; //ler("Qual seu nome? ");
mensagem();

console.log("Fim do programa.");
