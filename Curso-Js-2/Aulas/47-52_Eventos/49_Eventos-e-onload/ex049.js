// EVENTOS E ONLOAD
/**
 * - Eventos complexos devem ser feitos no JS;
 * - Por meio do JS podemos mapear algumas ações dos users, que chamamos de eventos;
 * - Como: movimento do mouse, clicl, mouse entrando ou saindo de um elemento, carregamento da página;
 * - Podemos criar animação de menu abrindo e fechando.
*/

// EVENTO ONLOAD
/**
 * - Onload é ativado ao carregar a página;
 * - Podemos realizar uma ação depois desse evento.
 */


window.onload = function() {

    console.log('Carregou o DOM.');

    // Nesse caso irá aparecer no console a tag, o title, pois como esse evento acontece depois que a página é carregado, o HTML já terá carregado e assim existirá o elemento title.
    var title2 = document.querySelector('#title');
    console.log(title2);

}

console.log('Carregou o JS.')

// Nesse caso irá aparecer no console "null", pois ele carrega antes do HTML e title é um elemento HTML, por isso antes da página ser carregado não terá nada.
var title = document.querySelector('#title');
console.log(title); 