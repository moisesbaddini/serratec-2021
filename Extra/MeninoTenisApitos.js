//O menino, os tênis e os apitos
//Equação de primeiro grau

console.log("parTenis + parTenis + parTenis == 30");
var parTenis = 30 / 3;
console.log(parTenis);

console.log("parTenis + meninoApito + meninoApito == 20");
var meninoApito = (20 - parTenis) / 2;
console.log(meninoApito);

console.log("meninoApito + parApito + parApito == 13");
var parApito = (13 - meninoApito) / 2;
console.log(parApito);

console.log("tenis + menino x apito == ?");
var tenis = parTenis / 2;
var apito = parApito / 2;
var menino = meninoApito - apito;

//Rufem os tambores
var resultado = tenis + menino * apito;
console.log("Resultado: ", resultado);
