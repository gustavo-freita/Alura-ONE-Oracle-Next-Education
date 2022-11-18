console.log('Trabalhando com Condicionais');
const listaDeDestino = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',

);

const idadeComprador = 10;
const estaAcompanhada = true

console.log("Destinos possíveis:")
console.log(listaDeDestino)

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestino.splice(1, 1); //retira um item da lista
}else if (estaAcompanhada) {
    console.log("Comprador está acompanhado.");
    listaDeDestino.splice(1, 1); //retira um item da lista
}else {
   console.log("Não é maior de idade não posso vender.");
}

console.log(listaDeDestino); 