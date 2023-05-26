// INSERINDO ELEMENTOS
/**
 * - Podemos inserir um elemento dentro do outro, exemplo um parágrafo em uma div;
 * - Seria "acrescentar um filho" em JS
*/


// criar elemento
var el = document.createElement('div');

// cria uma classe, e a nomeia, dentro da tag que foi criada
el.classList = 'div-criada';
console.log(el);

// inserindo elemento filho - inserindo a div(div-criada) dentro do container
var container = document.querySelector('#container');
container.appendChild(el);


// inserBefore - inseri antes
// cria uma variável para armazernar a tag criada, div. Depois, cria uma classe e nomeia essa div
var el2 = document.createElement('div');
el2.classList = 'div-before';
// Por fim, seleciona a div-criada. E então, usa o insertBefore(parâmetro1, parâmetro2) --> possui 2 parâmetos: parâmetro 1 o que será inserido, parâmetro 2 antes do que será inserido.
var el3 = document.querySelector('#container .div-criada');
container.insertBefore(el2, el3);
