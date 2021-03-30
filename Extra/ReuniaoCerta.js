//Repetir sempre que precisar de leitura
const ler = require("prompt-sync")();

//Entrada
const texto = ler("Dia que prentende marcar reunião: ");
const dia = Number(texto);

//Processamento

//Especializar, depois generalizar
//se não for domingo
const dom1 = 7;
const dom2 = 14;
const dom3 = 21;
const dom4 = 28;

// A ferramenta mais importante da programação é a atenção.
// A minha extensão preferida são o café e a leitura com atenção.

// ! =
var pode1 = dia != dom1;
var pode2 = dia != dom2;
var pode3 = dia != dom3;
var pode4 = dia != dom4;

var pode = pode1 && pode2 && pode3 && pode4;
//var pode = dia != dom1 && dia != dom2 && dia != dom3 && dia != dom4;
//var naoPode = dia == dom1 || dia == dom2 || dia == dom3 || dia == dom4;

//qualquer, ambos
//   ||      &&
//   ou      e

//Saída
console.log("Pode ser marcada reunião nesse dia?", pode);
