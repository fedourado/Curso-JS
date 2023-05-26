//  MÉTODOS DE ARRAY 
/**
 * Os arrays também possuem métodos, para remover e adicionar elementos, resgatar apenas uma parte do array e etc.
 */

// length - informa o número de elementos de um array
var arr = [1,2,3,4,5,6];
console.log(arr.length);

// ------------------------------------------------------------ //

// push - adiciona elementos no final de um array. Coloca o elemento dentro do parâmetro
arr.push(7); // adiciona o número 7 no array;
arr.push('oito'); // adiciona a palavra oito no array;
console.log(arr);

// ------------------------------------------------------------ //

// pop - remove o elemento no final do array. Não precisa colocar nada no parâmetro
arr.pop()
console.log(arr);

// ------------------------------------------------------------ //

// unshift - adiciona um elemento no começo do array. No parâmetro coloca o elemento que quer adicionar
arr.unshift(0);
arr.unshift('zero');
console.log(arr);

// ------------------------------------------------------------ //

// shift - remove um elemento do começo do array. Não precisa colocar nada no parâmetro
arr.shift();
console.log(arr);

// ------------------------------------------------------------ //

// length - 1 -> por meio dessa propriedade é possível ACESSAR O ÚLTIMO ELEMENTO do array
console.log(arr[arr.length - 1]);

// ------------------------------------------------------------ //

// isArray - diz se aquele dado é realemente um array
console.log(Array.isArray(5));
console.log(Array.isArray(arr));
