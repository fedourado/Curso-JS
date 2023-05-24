// ALTERANDO CSS COM JS
/**
 * - É muito comum alterar CSS com JS;
 * - As regras de css ficam de forma inline (sobrescrevem/subtituem as maiorias das outras regras);
 * Então, se no CSS tiver uma determinada estilização, caso us o JS para mudá-la ele passa a se sobrepor a do CSS.
*/


// seleciona o elemento (pode fazer tudo junto, porém escapsular um elemento em uma variável permite usá-lo mais vezes)
var title = document.querySelector('#title');
var body = document.querySelector('body');

// adiciona o estilo
title.style.color = '#f96459';

// background-color, como possui duas palavras a segunda começa com a letra maiúscula
body.style.backgroundColor = '#000000'



// ADICIONANDO VÁRIOS ESTILOS 

// selecionar elemento
var subtitle = document.querySelector('#subtitle');

// adiconar os estilos
subtitle.style.cssText = 'color: #ffbbbb; font-size: 25px'