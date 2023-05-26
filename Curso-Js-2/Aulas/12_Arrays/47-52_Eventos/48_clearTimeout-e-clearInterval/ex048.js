// clearTimeout e clearInterval
/**
 * - Podemos por um fim em setTimeout e no setInterval por meio de dois métodos: clearTimeout e clearInterval;
 * - Após determinada condição os times não serão mais executados.
*/

var x = 0;


// clearTimeout
var myTimer = setTimeout(function() {

    console.log('X é 0(zero)');

}, 2000);

x = 5;

if(x > 0) {
    clearTimeout(myTimer);
    console.log('X não é mais 0(zero)');
} // nesse caso ele verifica o valor do X e para a execução se ele for maior que 0(zero)


// clearInterval
var myInterval = setInterval(function() {

    console.log('Imprimindo interval');

}, 500);


setTimeout(function() {

    console.log('Não precisamos repetir mais!');
    clearInterval(myInterval);

}, 1500);