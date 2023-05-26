// ESTRUTURA FOR
/**
 * O for tem um sintaxe mais complexa, mas é optado pela maioria dos programadores;
 * A instrução fica toda em uma linha para proporcionar mais controle;
 */

// O for possui 3 parâmetro: (variável que vai inicializar para fazer o incremento, condição para sair do looping, e o incremento)
for(var i = 0; i < 10; i++){

    console.log('Looping for: ' + i);

}

var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++){
    console.log(arr[j]);
}

for(var x = 5; x < 100; x *= 3){
    console.log(x);
}