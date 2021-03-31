/*
Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.
*/

//Cabeçalho
console.log("== LOJA DE JOGOS DO ZEPA ==");

//Processamento
var jogos = 345.0;
var videogame = 1545.0;
var total = jogos + videogame;

//Saídas
console.log("Cliente: Alice");
console.log("Total da sua compra: ", total);
console.log("[Opções de parcelamento]");

var parcela = total / 3;
console.log("3 vezes sem juros: ", parcela);

parcela = total / 5;
console.log("5 vezes sem juros: ", parcela);

//parcela = total / 10;
//parcela = parcela + (parcela * 1.5) / 100;
parcela = (total / 10) * 1.015;
console.log("10 vezes com juros (1,5%): ", parcela);

console.log("Obrigado por comprar com a gente!");
