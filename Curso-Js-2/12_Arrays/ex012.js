// Arrays são considerados objetos, porém como listas
// Podemos ter itens de qualquer tipo de dados, porém os dados normalmente são iguais: tudo number, tudo string;
// Normalmente os dados possuem os mesmos tipos, pois irá percorrer cada item;
// Para acessar os itens será por índice.


// Diferente dos objetos, que usam chaves {}, o array usa colchetes []
var arr = [5, "Fernanda", true, {teste: 1, teste: 2}];
console.log(arr);


var arr2 = [1, 2, 3, 4];
console.log(arr2);

console.log(arr[1]);
console.log(arr[0]);

// acrescentar iten no array - para isso é preciso colocar o índice que não possuem iten e atribuir valor a ele.
arr[4] = 10;
console.log(arr);


// é possível modificar o item de um índice - colocando o índice que quer mudar e atribuir o novo valor.
arr[1] = 'Teste';
console.log(arr);

// o array é considerado objeto
console.log(typeof arr);