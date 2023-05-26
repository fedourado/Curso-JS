// REMOVENDO ELEMENTOS
/**
 * - Temos com remover elementos diretamente e também um elemento filho, dentro do elemento pai
*/

/**
 *  .name = ponto antes do nome é classe
 *  #name = hashtag antes do nome é id
*/


// Removendo elementos filho - removeChild
var container = document.querySelector('#container');
var p = document.querySelector('#container p');

container.removeChild(p);



// Removendo elemento pai (todo elemento) - remove()
var subtitle = document.querySelector('.subtitle');

subtitle.remove();
