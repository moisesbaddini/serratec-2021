"use strict";

//Uma tabela de cidades
let cidade = [];
cidade.push("Teresópolis");
cidade.push("Petrópolis");
cidade.push("Nova Friburgo");
cidade.push("Sumidouro");
cidade.push("São José do Vale do Rio Preto");
cidade.push("Carmo");

//Quero a cidade com o menor nome

//for == limites

//Agregração
//SUM, COUNT, AVG, MIN, MAX
let menor = cidade[0].length;
let nome = "";
let maior = 0;
let nmMaior = "";

for (let i = 0; i < cidade.length; i++) {
  let city = cidade[i];

  //menor nome
  if (city.length < menor) {
    nome = city;
  }

  menor = Math.min(menor, city.length);

  //maior nome
  if (city.length > maior) {
    nmMaior = city;
    maior = city.length;
  }
}

console.log(
  `A cidade com menor nome tem ${menor} caracteres, e se chama ${nome}.`
);

console.log(
  `A cidade com maior nome tem ${maior} caracteres, e se chama ${nmMaior}.`
);
