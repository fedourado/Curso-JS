// EVENTO KWYDOWN E KEYUP

/** EVENTO KEYDOWN
 * - O evento keydown é ativado quando uma tecla é pressionada;
*/

/** EVENTO KEYUP
 * - Podemos também atrelar o evento keyup para quando uma tecla voltar a posição normal;
*/


// parâmetero 'e'/event, pode ser qualquer nome, possui algumas informações sobre o evento 

// keydown - pode acontecer infinita vezes 
document.addEventListener('keydown', function(event) {

    console.log(event.key); // event.key mostra a tecla que a pessoa está pressionando

    if(event.key === 'Enter') {
        console.log('Apertou o Enter!')
    }

});


// keyup - acontece apenas uma vez
document.addEventListener('keyup', function(e) {

    if(event.key === 'Enter') {
        console.log('Soltou o Enter!')
    }

});
