let aluno = [];
let chamada = [];

aluno[0] = "Alice";
chamada[0] = true;
aluno[1] = "Amanda Melo";
chamada[1] = true;
aluno[2] = "André Ricardo";
chamada[2] = true;
aluno[3] = "Bernard Muniz";
chamada[3] = true;
aluno[4] = "Daniel Bevilacqua";
chamada[4] = false;
aluno[5] = "Emerson De";
chamada[5] = true;
aluno[6] = "Erich Kenupp";
chamada[6] = true;
aluno[7] = "Everton Da";
chamada[7] = true;
aluno[8] = "Gabriel Gaspar";
chamada[8] = true;
aluno[9] = "Gabriela Medeiros";
chamada[9] = true;
aluno[10] = "Giovanne Menezes";
chamada[10] = true;
aluno[11] = "Giulia Do";
chamada[11] = true;
aluno[12] = "Gustavo de";
chamada[12] = true;
aluno[13] = "Israel Da";
chamada[13] = true;
aluno[14] = "Jennyffer Brandão";
chamada[14] = true;
aluno[15] = "Jéssica Sampaio";
chamada[15] = true;
aluno[16] = "João Victor";
chamada[16] = true;
aluno[17] = "Karine Branco";
chamada[17] = true;
aluno[18] = "Larissa De";
chamada[18] = true;
aluno[19] = "Leonardo Fernandes";
chamada[19] = false;
aluno[20] = "Luan Figueiredo";
chamada[20] = true;
aluno[21] = "Luana Tayt";
chamada[21] = true;
aluno[22] = "Luís Filipe";
chamada[22] = true;
aluno[23] = "Luiz Carlos";
chamada[23] = true;
aluno[24] = "Luiz Eduardo";
chamada[24] = true;
aluno[25] = "Maicon De";
chamada[25] = true;
aluno[26] = "Marcelo Renato";
chamada[26] = false;
aluno[27] = "Maria Regina";
chamada[27] = false;
aluno[28] = "Mariana Camargo";
chamada[28] = true;
aluno[29] = "Matheus Farias";
chamada[29] = true;
aluno[30] = "Natan Melo";
chamada[30] = true;
aluno[31] = "Nicolly Silva";
chamada[31] = false;
aluno[32] = "Paulo Roberto";
chamada[32] = false;
aluno[33] = "Raphael Rapozo";
chamada[33] = true;
aluno[34] = "Sthephanie Soares";
chamada[34] = true;
aluno[35] = "Taiana Monteiro";
chamada[35] = true;
aluno[36] = "Werikson Rodrigues";
chamada[36] = true;

function presente(estou) {
  if (estou) return "Presente";
  return "Faltou";
}

/*
const ler = require("prompt-sync")();
var quem = ler("Prof, qual aluno quer ver? ");

console.log(aluno[quem]);
console.log(presente(chamada[quem]));
*/
/*
for (let nro = 0; nro < 36; nro++)
  if (aluno[nro] == "Luan Figueiredo") {
    console.log("luan está no índice", nro, "e", presente(chamada[nro]));
  }
*/

//Lista geral, todos os alunos
//for (let nro = 0; nro <= 36; nro++)
//  console.log(aluno[nro] + " está no índice", nro, "e", presente(chamada[nro]));

//Lista dos ausentes
for (let nro = 0; nro <= 36; nro++) {
  let presente = chamada[nro];

  //critério de busca
  if (!presente) {
    console.log(aluno[nro] + " tá dormindo");
  }
}

//O céu é o limite
console.log("Relatório de presenças");

for (let nro = 0; nro <= 36; nro++) {
  let presente = chamada[nro];

  //critério de busca
  if (presente) {
    console.log(aluno[nro]);
  }
}

//Total
//Agregação
//Contadora

var contadora = 0;

for (let nro = 0; nro <= 36; nro++) {
  if (chamada[nro]) contadora++;
}

console.log("Qtde presentes: ", contadora);
