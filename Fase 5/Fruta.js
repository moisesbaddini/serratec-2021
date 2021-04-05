//Repetir sempre que precisar de leitura
const ler = require("prompt-sync")();

var fruta = ler("Qual sua fruta preferida? ");
/*
if (fruta == "banana") {
  console.log("Você gosta da 2a fruta mais consumida no mundo");
}
else if (fruta == "maçã") {
  console.log("Maça não é a fruta do Éden");
}

seletor (fruta)
caso "banana" : mensagem = "Você gosta da 2a fruta mais consumida no mundo"
caso "maçã" : "Maça não é a fruta do Éden"

*/

var mensagem;

//Casos são de acordo com o tipo de dados da expressão
//De - para
//Alternativas
switch (fruta) {
  case "banana":
    mensagem = "Você gosta da 2a fruta mais consumida no mundo";
    console.log("era banana");
    break;
  case "maca":
    mensagem = "Maça não é a fruta do Éden";
    console.log("digitou maçã");
    break;
  case "uva":
  case "uva verde":
  case "UVA":
    mensagem = "Uva foi a fruta 3o do ranking";
    console.log("entrou no caso uva");
    break;
  case "manga":
    console.log("Realmente manga é a fruta mais consumida do mundo");
    mensagem = "Venceu com 3 pessoas";
    break;
  case "":
    mensagem = "cade a fruta?";
}

console.log("Obrigado por participar");

console.log("Mensagem sobre a fruta ", fruta);
console.log(mensagem);
