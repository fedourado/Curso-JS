//  MÉTODOS DE ARRAY 2
/**
 * É possível resgatar um conjunto de elementos com os métodos, como: identificar o índice de um elemento específico;
 */

var arr = [1,2,3,4,5,6,];

// splice - adiciona elementos entre outro elementos

arr.splice(2, 0, 3); // o primeiro parâmetro indica em qual índice será incluído o elemento/ no segundo parâmetro será excluído a quantidade de elementos indicada a partir do índice indicado/ e no último parâmetro qual elemento será incluído.

console.log(arr);

arr.splice(4, 1); // irá remover o elemento no índice 4 
console.log(arr);

arr.splice(4, 1, 55); // irá remover um elemento no índice 4 e adicionar o número 55 no seu lugar.
console.log(arr);

arr.splice(2, 3, 'quatro, cinco'); // irá remover três elementos a partir do índice 2 e adicionar o número 'quatro, cinco' no seu lugar.
console.log(arr);

// ------------------------------------------------------------ //

// indexOf - acha o índice de um elemento

console.log(arr.indexOf(2)); // índice 1
console.log(arr.indexOf('quatro, cinco')); // índice 2

// ------------------------------------------------------------ //

// join - transforma array em uma string. Dentro do parâmetro coloca-se o elemento que irá separar as palavras.

var  arr2 = ['O', 'feijão', 'é', 'um', 'grão!'];
console.log(arr2.join(' '));


// ------------------------------------------------------------ //

// reverse - reverte a ordem dos elementos em um array.

console.log(arr2.reverse());