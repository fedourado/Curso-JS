// ALTERANDO CONTEÚDO
/**
 * - Podemos alterar o texto de qualquer elemento de forma fácil com JavaScript;
 * - Posteriormente podemos atrelar esta ação com algum evento.
*/


/**
 *  # -> acessa por id;
 *  . -> acessa por classe;        
*/

// Para modificar primeiro deve:

// 1 - selecionar o elemento
var title = document.querySelector('#title');
var subtitle = document.querySelector('.subtitle');

// innerHTML - uma maneira de modificar o conteúdo. Não recomendado muito, pois ele cria um novo texto e por isso, quando utiliza ele para substituir textos ele terá que transformá-lo, sendo menos perfomático.
title.innerHTML = 'Testando a modificação de conteúdo.'


// textContent - outra maneira de modificar o conteúdo (mais utilizado e recomendado, pois ele altera elemento e não precisa parsear, "transformar", o texto)
subtitle.textContent = 'Estamos testando!'