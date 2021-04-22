//Reembolso entre 20 e 100 reais

const prompt = require("prompt-sync")();

let extensoD = [];
extensoD[0] = "";
extensoD[1] = "dez";
extensoD[2] = "vinte";
extensoD[3] = "trinta";
extensoD[4] = "quarenta";
extensoD[5] = "cinquenta";
extensoD[6] = "sessenta";
extensoD[7] = "setenta";
extensoD[8] = "oitenta";
extensoD[9] = "noventa";

let extensoU = [];
extensoU[0] = "";
extensoU[1] = "um";
extensoU[2] = "dois";
extensoU[3] = "três";
extensoU[4] = "quatro";
extensoU[5] = "cinco";
extensoU[6] = "seis";
extensoU[7] = "sete";
extensoU[8] = "oite";
extensoU[9] = "nove";

const texto = prompt("Digite o valor: ");
const valor = Number(texto);
//cdu
let unidade = valor % 10;
let dezena = Math.trunc(valor / 10);

let extenso = extensoD[dezena];

if (extenso != "") extenso += " e ";

extenso += extensoU[unidade];

console.log(`Seu reembolso: ${extenso} Reais`);
