// ACESSAR O DOM
/**
 * - Acessar o DOM caracteriza por identificar um elemento do HTML através de métodos;
 * - Depois de acessado podemos manipulá-los da forma que quisermos;
 * - Acessar o DOM é semelhante as regras de CSS;
 * - Podemos acessar por: tags, id, classes;
*/

// Acessando por 'tag' - getElementsByTagName: no plural, pois pode existir mais de uma tag igual e por isso para acessá-la é necessário identificar com o índice

var title = document.getElementsByTagName('h1')[0]; //no parâmetro coloca-se a tag que quer acessar - irá aparecer a collection da tag h1 com todo o seu conteúdo - colocando o índice [índice] irá aparecer o conteúdo específico que está nesse índice
console.log(title);

var list = document.getElementsByTagName('li');//no parâmetro coloca-se a tag que quer acessar - irá aparecer a collection da tag li com todo o seu conteúdo.
console.log(list);
console.log(list[0]); // colocando o índice [índice] irá aparecer o conteúdo específico que está nesse índice


// ----------------------------------------------------------- //

// Acessando por 'id' - getElementById: no singular, pois esperasse que exista um id única para cada elemento, por isso não é preciso identificar com índice

var parag = document.getElementById('parag'); // acessar por id 
console.log(parag);


// ----------------------------------------------------------- //

// Acessando por 'class' - getElementsByClassName: no plural, pois pode existir mais de uma classe igual e por isso para acessá-la é necessário identificar com o índice

var itensList = document.getElementsByClassName('item');
console.log(itensList);
