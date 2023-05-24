var nome = 'Fernanda';
var sobrenome = 'Dourado';

var nomeCompleto = nome + ' ' + sobrenome;

console.log(nome);
console.log(typeof nome);
console.log(nomeCompleto);

var frase = 'Meu nome é ' + nome;
console.log(frase);
console.log(typeof frase);

console.log(frase + ' ' + sobrenome);


console.log(typeof 'fdms');
console.log(typeof '5.34553');


document.write('Olá!'); // mostra a frase na tela
/**
 * Caso queira usar aspas no meio da frase, utilizar aspas 
 * diferentes: quando usar aspas simples na frase, usar 
 * aspas duplas no meio;
 * 
 * quando usar aspas duplas na frase, usar aspas simples
 * no meio
 *  */ 
document.write('<br>Ele diz "olá!"'); //<br> quebra de linha
document.write("<br>Ele diz 'olá!'");

console.log('Este número é: ' + '99')