// OPERADORES DE ATRIBUIÇÃO

/**
 * Temos algumas maneiras de atribuir um valor a uma variável:
 * - mais utilizadas são: +=, -=, *=, /=;
 * - Basicamente é uma forma resumida da operação: x = x + y;
 * - Então, x = x + y, ficaria x += y
 * - Em loops também é comum utilizar os operadores ++ ou --;
 */

var x = 1;
var y = 2;

// soma
console.log(x = x + y);
console.log(x += y); // nesse dará 5, pois o x ficará 3 e adicionará + 2

// subtração
console.log(x -= y);

// multiplicação
console.log(x *= y);

// divisão
console.log( x/= y);

// loops
console.log(x++);
console.log(x--);

while(x <= 100){
    console.log(x);

    x *= 2;
}

while(x > 0){
    console.log(x);

    x -= 5;
}