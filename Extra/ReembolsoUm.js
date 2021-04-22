//Reembolso entre 20 e 100 reais

const prompt = require("prompt-sync")();

const texto = prompt("Digite o valor: ");

const valor = Number(texto);

//cdu
let unidade = valor % 10;
let dezena = Math.trunc(valor / 10);
let extenso = "";

switch (dezena) {
  case 1:
    extenso = "dez";
    break;
  case 2:
    extenso = "vinte";
    break;
  case 3:
    extenso = "trinta";
    break;
  case 4:
    extenso = "quarenta";
    break;
  case 5:
    extenso = "cinquenta";
    break;
  case 6:
    extenso = "sessenta";
    break;
  case 7:
    extenso = "setenta";
    break;
  case 8:
    extenso = "oitenta";
    break;
  case 9:
    extenso = "noventa";
    break;
  default:
    extenso = "erro";
}

extenso += " e ";

switch (unidade) {
  case 1:
    extenso += "um";
    break;
  case 2:
    extenso += "dois";
    break;
  case 3:
    extenso += "três";
    break;
  case 4:
    extenso += "quatro";
    break;
  case 5:
    extenso += "cinco";
    break;
  case 6:
    extenso += "seis";
    break;
  case 7:
    extenso += "sete";
    break;
  case 8:
    extenso += "oite";
    break;
  case 9:
    extenso += "nove";
    break;
  default:
    extenso += "erro";
}

console.log(`Seu reembolso: ${extenso} Reais`);
