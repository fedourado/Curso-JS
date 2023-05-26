// ADICIONANDO ATRIBUTOS (setAttribute)
/**
 * - Podemos alterar os atributos via JS e DOM;
 * - Por exemplo: alterar alt (descrição) de uma imagem ou o src (caminho) da imagem;
 * - Todos atributos podem ser alterados via JS.
*/


// adicionar atributos - setAttribute
var title = document.querySelector('#title');
title.setAttribute('class', 'testando atributos');
console.log(title);


var btn_click = document.querySelector('#btn_click');
btn_click.setAttribute('disabled', 'disabled');


var subtitle = document.querySelector('.subtitle');
subtitle.setAttribute('id', 'titulo-2');



// remover atributos - removeAttribute
var list = document.querySelector('#list2');
list.removeAttribute('id');
