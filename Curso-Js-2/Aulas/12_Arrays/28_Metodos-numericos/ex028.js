// MÉTODOS NUMÉRICOS
/**
 * Todo número criado no JS é "filho" do objeto Number, o "pai".
 * - O objeto Number, contém métodos muito úteis para trabalhar com JS;
 * - A maioria de tipos de dados também de m objeto pai, como: String, Object, Array
 */


// parseFloat - transformar uma string em float(decimal)
console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));


// parseInt - transforma uma string ou float em um inteiro.
console.log(parseInt('12.999'));
console.log(parseInt(19.89));


// toFixed - limita a casa decimais de um número
console.log(25.99.toFixed(1));
console.log(25.5432.toFixed(1)); // uma casa depois do ponto
console.log(25.5432.toFixed(2)); // duas casas depois do ponto


// isNaN - verifica se o conteúdo Não é um Number
console.log(isNaN('teste')); // true pq ele No a Number (NaN)
console.log(isNaN(19)); // false pq ele é um Number
console.log(isNaN('20')); // false pq mesmo sendo uma string, ele lê como number, pois o conteúdo é número. OBS: mas ainda é preciso converter para trabalhar com esse conteúdo como number.

// MAX_VALUE e MIN_VALUE -  máximo e mínimo que o JS aceita, acima disso trata como infinit e abaixo como - infinit
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(2.7976931348623157e+308); // ao pedir para imprimir esse valor, quase o dobro do valor_máximo, ele irá imprimir como 'Infinity';


console.log('----------------------------')
console.log('transformar ponto em vírgula')



// toString() + replace('','') - para substituir o ponto por vírgula é preciso transformar o number em string, caso ele não seja, e ai substituir o ponto por vírugla.
var soma = 12.25 + 15.25;
console.log(soma.toString().replace('.', ',')); // o número será uma string e não number, por isso se for necessário fazer conta é preciso fazer essa susbtituição de ponto por vígula somente no resultado.

//var client = window.prompt('Digite um número decimal: ');
var client = '21,90'
console.log(parseFloat(client.replace(',', '.')));
var somatoria = parseFloat(client.replace(',', '.')) + 10;
console.log(somatoria.toString().replace('.',','));

