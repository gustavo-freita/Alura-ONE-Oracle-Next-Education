console.log("Trabalahdno com Atribuição de variáveis");
const primeiroNome = 'Gustavo'; 
const sobrenome = 'Freitas';

//console.log(nome + " " + sobrenome); (os dois modos da para dar espaço no meio)
console.log(primeiroNome, sobrenome);
console.log('Meu nome é ${nome} ${sobrenome}'); //não está funcionando (descobrir)

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declarando variável
idade = 25; //atribuindo valor
idade = idade+1;
console.log(idade);
//com o let eu tenho uma variavel que realmente pode variar e pode ser reescrita e reatribuindo avontade (mas não é uma boa pratica para variáveis)