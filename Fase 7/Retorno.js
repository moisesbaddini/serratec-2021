/**
 * Retorno
 *
 */

function par(numero) {
  var retorno = numero % 2 == 0;
  return retorno;
}

function parTexto(numero) {
  var n = par(numero);
  var texto;

  if (n) {
    texto = "Par";
  } else {
    texto = "Ímpar";
  }

  return texto;
}

/*
var numero = 5;
var r = par(numero);
console.log("o numero ", numero, "é", r);

numero = 8;
r = par(numero);
console.log("o numero ", numero, "é", r);

var rTexto = parTexto(11);
console.log(rTexto);

//
function fixo() {
  return "Texto fixo";
}

var fx = "Veja um texto fixo: " + fixo();
console.log(fx);

const MEU_NRO = 13;
var r = parTexto(MEU_NRO);
console.log(MEU_NRO, "é", r);
*/

function SimOuNao(valor) {
  if (valor) return "Sim";

  //Interrupção da fluxo da função
  return "Não";
}

var sim = SimOuNao(false);
console.log(sim);
var sim = SimOuNao(false);
console.log(sim);
var sim = SimOuNao(false);
console.log(sim);
var sim = SimOuNao(false);
console.log(sim);
var sim = SimOuNao(false);
console.log(sim);

/*
while (true) {
  if (ingressso == 46)
    break;
}
*/
