// EVENTO CLICK
/**
 * - O click é ativado quando o user clica em um elemento em que atrelamos o evento;
 * - Após a ação, podemos fazer as modificações e alterações no HTML/CSS;
*/

// CLICK - serve para quando der um clique em algo

var btn = document.querySelector('#btn');
console.log(btn);

// addEventListener - espera o user clicar no botão para o evento acontecer. Como é uma ação assíncrona, não é feita imediatamente, deve fazer um callback.
btn.addEventListener('click', function() {

    console.log('clicou');

    console.log(this); // no evento o this retorna o próprio elemento, o botão no caso

    // muda a cor do botão
    btn.style.cssText = 'background-color: pink; color: #282727';

});


var title = document.querySelector('#title');

title.addEventListener('click', function() {

   console.log('clicou!')
   
   console.log(this); // no evento o this retorna o próprio elemento, o botão no caso

});



// DBLCLICK - serve para quando se dá um clique duplo
var subtitle = document.querySelector('#subtitle')
subtitle.addEventListener('dblclick', function() {

    console.log('click duplo');


});