/*

Vacina
Perguntar a idade, sendo 67 anos, pode vacinar hoje.
sendo inferior, avisar que volta semana q vem.
sendo superior, pq não vacinou ainda?

*/

//Repetir sempre que precisar de leitura
const ler = require("prompt-sync")();

console.log("== FILA DA VACINA COVID ==");

//Entradas
var idade = ler("Digite sua idade: ");

//Processamento
const IDADE_DIA = 67;
var dia = idade == IDADE_DIA;
var passou = idade > IDADE_DIA;

var msg;

if (dia) msg = "Pode vacinar";
else if (passou) msg = "Por quê não vacinou ainda?";
else msg = "Volte semana que vem.";

//Saída
console.log("Situação do idoso: ", msg);
