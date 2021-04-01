/*
16. O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob
o signo de Aquário são mais inteligentes que os demais.

Mês do seu nascimento: 01
Dia do aniversário: 25
Você é inteligente? True!
*/

//Repetir sempre que precisar de leitura
const ler = require("prompt-sync")();

//Entradas
var mes = ler("Mês do seu nascimento: ");
var dia = ler("Dia do aniversário: ");

//Processamento

//Entre 21/01 a 19/02
var inicio = mes == 1 && dia >= 21;
var fim = mes == 2 && dia <= 19;

//var inteligente = inicio || fim;
var inteligente = (mes == 1 && dia >= 21) || (mes == 2 && dia <= 19);

//Saídas
console.log("Você é inteligente? ", inteligente);
