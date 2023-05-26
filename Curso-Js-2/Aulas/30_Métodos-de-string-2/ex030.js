//  MÉTODOS DE STRING 2
/**
 * Podemos, por exemplo, deixar a fonte em caixa alta ou baixa
 */

// toLowerCase - deixa tudo em minússculo; toUpperCase - deixa tudo em maiúsculo

// toLowerCase: um caso que se utiliza o toLowerCase é na caixa de email, muitas vezes a pessoa escreve com maiúsculo e não tudo em minúsculo como é o correto, por isso usa-se essa função.
var email = 'PauLO_SanTOS@contato.com';
console.log(email.toLowerCase());

// to UpperCase: caso você precise que o conteúdo fique tudo em caixa alta, para a impresão de um documento ou facilitar a identidicação, é possível usar essa função. Assim, se a pessoa escrever tudo em minúsculo ou somente a primeira letra em maiúsculo o texto será formatado.
var nameUpper = 'Fernanda Dourado';
var nameUpper2 = 'PauLO CAStro';
console.log(nameUpper.toUpperCase());
console.log(nameUpper2.toUpperCase());

// ------------------------------------------------------------ //

// trim - usado para tirar os espaços antes ou depois do nome, frase digitado

// Muito comum utilizar em formulários, pois às vezes as pessoas dão espaço antes ou depois de digitar as informações
var name = '    Fernanda     ';
var name2 = 'Fabricio    ';
console.log(name);
console.log(name.trim());
console.log(name2.trim());

// ------------------------------------------------------------ //

// split - quiser transformar o texto como array. Separa todas as palavras em elementos dentro de um array.
var frase = 'A vida é passageira para os humanos, por isso vida intensamente!'
console.log(frase.split(' '));

// Um caso que se utiliza: quando um user coloca as tags de um blog, site e é preciso separá-las para encaminhar ao Database. Então, usa-se o split que irá separar as tags em array.
var tags = 'PHP, JavaScript, HTML, CSS';
console.log(tags.split(', '));

// ------------------------------------------------------------ //

// lastIndexOf - quando é preciso achar o índice de uma palavra, mas ela é repetida e está no final. 

//Caso use o indexOf ele irá retonar a primeira paralvra, já o lasstIndexOf, como o nome já diz, irá retonar a última.
console.log(frase.indexOf('vida')); // retornar a primeira palavra, nesse caso 'vida'.
console.log(frase.lastIndexOf('vida')); //// retornar a primeira palavra, nesse caso 'vida'.