// EVENTO MOUSEOVER E MOUSEOUT

/** EVENTO MOUSEOVER
 * 
 * - É ativado quando o ponteiro do mouse passa em cima do elemento que criamos o evento;
*/

/** EVENTO MOUSEOUT
 * 
 * - É ativado quando o ponteiro do mouse sai do elemento;
*/

// mouseover 
var title = document.querySelector('#title');

title.addEventListener('mouseover', function() {
    
    this.style.backgroundColor = 'white'
    this.style.fontSize = '60px'

});



// mouseout
title.addEventListener('mouseout', function() {

    this.style.backgroundColor = 'black';
    this.style.fontSize = '40px'

});

// afetar outro elemento com mouseover
var subtitle = document.querySelector('#subtitle');

subtitle.addEventListener('mouseover', function() {

    var legenda = document.querySelector('#legenda');
    legenda.classList.remove('hide');

});


subtitle.addEventListener('mouseout', function() {

    var legenda = document.querySelector('#legenda');
    legenda.classList.add('hide');

});