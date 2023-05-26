// TROCANDO ELEMENTOS
/**
 * - Podemos também trocar um elemento no DOM, ou seja, substituir uma tag por outra e de modo fácil.
*/


// criar elemento
var el = document.createElement('h3');
el.classList = 'test-class';

var text = document.createTextNode('Testando a troca de elemento.');
el.appendChild(text);
console.log(el);


// selecionar que deseja substituir
var subtitle = document.querySelector('.subtitle');
console.log(subtitle);


// selecionar o pai do elemento
var parent = subtitle.parentNode; // invoca o pai do elemento desejado


// trocar os elementos
parent.replaceChild(el, subtitle) // primeiro parâmetro: elemento que vai entrar; segundo parâmetro: elemento que vai sair