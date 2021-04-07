//global
/*
var texto;

if (true) {
  texto = "outra coisa";
}

while (true) {
  texto = "repete";
}

function separada() {
  var outra;
  texto = "continua";
}
*/

//escopo global
var texto = "oi";

//escopo local
if (texto == "oi") {
  let nova = "tudo bem";
  console.log(texto, nova);
  nova = "novo texto";
  console.log(nova);
}

texto = "outra coisa";
texto = texto + regional;
console.log("texto + regional??", texto);
//console.log(texto, nova);

//deste ponto pra baixo
//nesta região
var regional = "sudeste";

const DENTRO = 5;

if (DENTRO == 5) {
  console.log(regional);
}

function minhaFuncao() {
  const DENTRO = 3;
  var calculo = 2 + 2 + DENTRO;
  return calculo;
}

//const DENTRO = 7;
console.log(DENTRO);

function maisUma() {
  let a = 3;
  console.log(a /*, b*/);
  let b = 5;
  console.log(b);
}

maisUma();

if (true) {
  var tres = "abc";
}

console.log(tres);
