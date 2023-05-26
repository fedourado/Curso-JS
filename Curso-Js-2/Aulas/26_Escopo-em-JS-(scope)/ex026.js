// ESCOPO
/**
 * No JS podemos ter vários escopos
 * - o global é iniciado em toda aplicação, quando nào se escreve nada;
 * - os locais, estão dentro de uma função. Separar um escopo do outro por função.
 * Então, pode haver duas variáveis com o mesmo nome e diferentes valores em escopos, funções, diferentes. Mas, se as variáveis estão no escopo global, aí o valor irá mudar.
 */

var x = 1; // escopo global - pode entrar em funções

var y = 3; // escopo global - pode entrar em funções

function teste() {

    var z = 9; // escopo local - não pode ser acessado fora da função

    console.log(z);
    console.log(x);
    console.log(y);
};

teste();

function testando() {

    var z = 5 // mesmo a variável z já exista na função teste não tem problema criar uma outra variável z na função testando, pois não interfere.

    console.log(z);
}

testando();

if(true) { // mesmo no if, uma variável criada dentro dele será global

    var p = 1;

}

console.log(p);