// ESTRUTURA DE REPETIÇÃO
/**
 * Estas estruturas servem para repetir n vezes uma operação até atingir uma determinada ação;
 * Por exemplo: repetir uma determinada lógica em cada elemento de um array;
 * estruturas mais comuns while e for
 * obs: tomar cuidado com loop infinito.
 */

// ESTRUTURA WHILE
/**
 * Repetição mais simples;
 * repete algo até atingir uma condição;
 * While -> enquanto
 */


var x =0;

// essa variável vai se repertir enquanto o x é menor que 5. Quando ele for 5 ou maior o bloco não repete mais.
while(x <= 5){
    console.log("Testando repetição " + x)

    // incrementador, irá incrementar mais 1 até o x for 5 ou maior e terminar o while.
   x++;
}


// cria um array com 4 elementos e uma variável y igual a 0;
// enquanto y for menor que 3 (no caso corresponde aos índices do array) o bloco se repete
// Porém, se o y não sair de 0 ele sempre será menor que 3 e irá se repetir infinitamente; por isso, é preciso fazer o incremento.
// A cada repetição acrescente +1 até chegar no índice 3 e parar o bloco.
// A cada índice que passar ele irá imprimir um elemento do array. 
var arr = ["teste", "test", "testando", "testing"]
var y = 0

while(y <= 3){

    console.log(arr[y]);

    y++;
}
