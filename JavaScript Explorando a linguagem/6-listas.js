console.log('Trabalhando com listas');
// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestino = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    
); //serve para criar listas

listaDeDestino.push('Curitiba') //adicopnando novo item a lista
console.log("Destinos possíveis:")
console.log(listaDeDestino)

listaDeDestino.splice(1,1); //retira um item da lista
console.log(listaDeDestino); 
console.log(listaDeDestino[1], listaDeDestino[0]); //mostra o que foi celecionado da lista