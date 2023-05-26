var lista = ['laranja', 'morango', 'maçã', 'limão']

// createElement: cria tags, entre aspas o nome da tag.
/** cria-se uma variável listaUl que irá armazenar a tag criada, ul. */
var listaUl = document.createElement('ul');

// getElementByTagName: irá pegar um elemento pelo nome da teg, nesse caso os elementos na tag body.
/** cria-se uma variável body que irá armazenar tudo que existe na tag body dentro dessa variável. Como a tag body existe desde que cria-se o documento você consegue "pegá-la" */
var body = document.getElementsByTagName('body');

//console.log(body[0]);

// appendChild: adicionando um elemento.
/** body vai receber dentre dele a variável listaUl, contém a tag ul */
body[0].appendChild(listaUl);

// getElementByTagName: irá pegar um elemento pelo nome da teg, nesse caso os elementos na tag ul.
/** como a tag ul foi criada, e agora existe, pega-se ela e armazena na variável listaNoBody */
var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {

    // createElement: cria tags, entre aspas o nome da tag.
    /** Cria-se uma variável liFor e nela será armazenada a tag criada li (item); */
    var liFor = document.createElement('li');

    // createTextNode: irá inserir um texto ou um elemento.
    /** Cria-se uma variável textoLi e nela será armazenada cada item da lista, que será impresso conforme o índice */
    var textoLi = document.createTextNode(lista[i]);

    // appendChild: adicionando um elemento.
    /** liFor vai receber dentre dele a variável textoLi, que conterá os itens. Criará um li para cada item. */
    liFor.appendChild(textoLi);

    /** ListaNoBody vai receber dentre dele a variável liFor, que dentro do liFor já contém os itens, então dentro do body vai conter a lista e dentro da lista cada item */
    listaNoBody[0].appendChild(liFor);
}

