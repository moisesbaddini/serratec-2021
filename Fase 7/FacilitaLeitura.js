const ler = require("prompt-sync")();

function facilitar() {
  var aluno = ler("Qual o seu nome? ");
  var a = 1;
  console.log("Bem-vindo ", aluno);
}

facilitar();
facilitar();
facilitar();
facilitar();

//Parâmetros são variáveis declaradas dentro da função
var aluno = "Braya";
var a = 2;
console.log(aluno);
