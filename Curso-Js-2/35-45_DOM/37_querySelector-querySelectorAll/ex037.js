// querySelector e querySelectorAll

/**
 * - Com a evolução da linguagem foram criados dois seletores que acabaram com a complexidade de acessar o document. O querySelector e o querySlectorAll;
 * - Com esses podemos acessar elementos baseados em regras de CSS;
 */


var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);


// querySelectorAll - pega todos os itens. Caso queira pegar apenas um objeto é preciso colocar o índice.
/**
 * Por isso, recomenda usar o querySelector para apenas um item.
 * Utiliza as notações do CSS também, #(hashtag) para id.
 * Caso o CSS já tenha sido criado, é possível pegar o seletor
 */
var itensQuery = document.querySelectorAll('#list li');
console.log(itensQuery);

// pode usar também o (.item) ao invés do li
var itensQuery2 = document.querySelectorAll('#list2 .item');
console.log(itensQuery);

// ------------------------------------------------------------ //

// querySelector - pega apenas um item.
/**
 * Usa-se para apenas um iten.
 */
var span = document.querySelector('#parag span');
console.log(span);