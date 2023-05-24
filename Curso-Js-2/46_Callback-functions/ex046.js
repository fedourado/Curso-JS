// CALLBACKS FUNCTIONS
/**
 * - A função de callback permite executar uma função depois de uma determinada ação;
 * - Muita usada em eventos;
 * - Conceito fundamental para entender a parte assóincrona do JS;
 * - Essa é uma ação síncrona, ou seja, a resposta ocorre no mesmo tempo que é solicitado.
*/

function exibir(num) {
    console.log('A operação resultou em: ' + num);
}


function soma(a, b, callback) {
    var op = a + b;
    callback(op);
}


function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(2, 2, exibir);
multiplicacao(2, 4, exibir);