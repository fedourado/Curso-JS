// MÉTODOS DE STRING
/**
 * O objeto String também possui métodos muito úteis, que irão auxiliar a manusear textos nos nossos softwares;
 */

// length - ver o tamanho de uma string
var name = 'Fernanda';
console.log(name.length);

var obj = 'bexiga';
console.log(obj.length);


// indexOf - ele retorna o caracter que está no índice solicitado

// quando você quer saber qual caracter tem em índice específico
console.log(name[0]);

var frase = 'A labareda de fogo é quente!'
// quero saber quando começa a palavra 'fogo'
console.log(frase.indexOf('fogo')); // A letra 'f' de fogo está no índice 14


// slice - descobriu quando começa a palavra, com o slice você pode extrair somente ela
var fogo = frase.slice(14, 18); // no parâmetro coloca o índice da primeira letra e o índice da última letra + 1. 
// Tem que coloca o índice final + 1, pois ele irá retornar até o índice indicado, mas não irá retornar a letra dele.
console.log(fogo);

// replace - trocar uma palavra, elemento por outro
var newFrase = frase.replace('fogo', 'calor');
console.log(newFrase);

