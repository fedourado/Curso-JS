// Funções
/**
 * Funções são blocos de códigos reutilizáveis: para eviter ter que repetir uma lógica de um programa várias vezes e tornar o código extenso, usa-se a função;
 * Além disso, caso de algum erro, será preciso apenas alterar uma vez
 * Para ser executada a função precisa ser invocada;
 */

/** 
 * Características da função:
 * - return: quando a função faz um processamento e pede o retorno de alguma informação. (obs: return não é obrigatório, se a função não for retornar nada);
 * - 
 */

function firstFunction() {

    console.log('Hello world!')
}

firstFunction();

// Functions podem ter argumentos dentro do parentêses
function dizerNome(nome) {

    console.log('O nome é: ' + nome);
}

// Quando for invocar a função é que irá preencher esse parâmetro
dizerNome('Fernanda');
dizerNome('Pedro');
dizerNome('Alex');

var nameDataBase = 'Julia';

dizerNome(nameDataBase);


// o resultado da soma irá ser armazenado em uma variável, por causa do return que proporciona receber um valor de volta.
function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);

// como foi criada a variável somaUm, só será preciso "ïmprimar" ela;
console.log(somaUm);

// como não foi criada uma variável para essa soma, indica a função soma e entre parenteses coloca os números, é feito direto e não precisa criar variável.
console.log(soma(4, 5));