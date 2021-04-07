/*
  Na "Estatística IBGE-Serra" o Serratec gostaria de saber o total de homens e mulheres na turma.
*/

const prompt = require("prompt-sync")();

//Processamento
var m = 0;
var f = 0;

/*
repetição
 nro de alunos:
 sim, eu sei == definida
   inicial e final
 nao sei == indefinido
   estabelecer uma forma de parar

   for (inicializacao; condicao verdade; incremento)

var qtde = prompt("Quantos alunos temos na turma? ");
qtde = Number(qtde);
var i = 0;

for (var i = 0; i < 35; i++) {
  var aluno = prompt("Aluno, digite M ou F: ");

  if (aluno == "F") f++;
  if (aluno == "M") m++;
}
*/

//Condição de continuidade
//continua repetindo enquanto expressão == verdadeiro

//while (m < 10 && f < 5) {

var aluno;
console.log("Digite 0 para terminar.");

while (aluno != "0") {
  aluno = prompt("Aluno, digite M ou F: ");

  if (aluno == "F") f++;
  if (aluno == "M") m++;
}

//Saída
console.log("Total de homens: ", m);
console.log("Total de mulheres: ", f);
