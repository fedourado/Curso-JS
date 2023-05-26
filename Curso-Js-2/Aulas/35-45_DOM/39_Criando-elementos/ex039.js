// CRIANDO ELEMENTOS COM DOM
/**
 * - Outra possibilidade do JS e DOM é criar elementos;
 * - Primeiro cria a tag, depois o conteúdo. Ou seja, temos que criar o elemento do texto também.
*/

// 1 - cria uma variável e nela cria a tag que deseja          --> document.createElement(): cria uma tag
var newParag = document.createElement('p');
console.log(newParag);

// 2 - cria uma variável e nela escreve o conteúdo do texto     --> document.creatTextNode(): cria um conteúdo/texto
var text = document.createTextNode('Este é um exemplo de texto criado no JS');

// 3 - então, é necessário inserir o conteúdo (var text) na tag criada (var newParag)  --> var.appendChild(): insere elemento
newParag.appendChild(text);

// 4 - Por fim, é necessário adicionar esse novo conteúdo no body, ou header, e para isso é preciso selecionaer a tag body e depois, inserir a variável com a tag e o texto na tag body.    --> document.querySelector(): seleciona um elemento.
var body = document.querySelector('body');
console.log(body);
body.appendChild(newParag);

// Inserir em um container (div)
var container = document.getElementById('container');
console.log(container);

var el = document.createElement('span');

// não é necessário criar variável para escrever o texto, apenas colocar o document.ElementTextNode dentro do appendChild.
el.appendChild(document.createTextNode('texto de span'));
console.log(el);
container.appendChild(el);