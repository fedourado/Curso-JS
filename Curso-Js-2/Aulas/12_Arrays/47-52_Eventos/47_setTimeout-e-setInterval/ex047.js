// setTimeout e setInterval
/**
 * - Podemos com estas funções criar ações no software que executam depois de um tempo ou de tempo em tempos;
 *  - Nesse caso iremos esperar um resposta para executar uma ação, ou seja, uma cunção assíncrona.
 * 
 * - Um dos argumentos destas funções é uma callback function.
*/


// Em ambos caso, coloca a function e depois da }, coloca quanto tempo depois que essa ação deve ser executada


// setTimeout - ação que demora um determinado tempo
console.log('Antes do setTimeout'); // essa ação é síncrona, ou seja, é feita na hora

setTimeout(function() { 

    console.log('Testando o setTimeout');

}, 2000); // função assíncrona, espera um tempo até ela ser executado

console.log('Depois do setTimeout'); // função assíncrona, espera um tempo até ela ser executado



// setInterval - de tempos em tempos faz uma ação
setInterval(function() {

    console.log('Testando o setInterval')

}, 5000); // função assíncrona, espera um tempo até ela ser executado - se colocar um tempo muito curto e muitas ações, pode consumir muita memória


