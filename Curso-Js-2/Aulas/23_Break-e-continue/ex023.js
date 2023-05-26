// BREAK E CONTINUE
/**
 * Break: encerra uma instrução;
 * Continue: pula para próxima instrução;
 * Utilizados na maioria das vezes em loops
 */


// O for irá ir até o 5 e irá encerrar o for, indo para a próxima linha
for(var i = 10; i > 0; i--){

    console.log(i);

    if(i === 5) {
        break;
    }
   
}

console.log('Deu o break');

var x = 10;

// CONTINUE irá pular uma instrução, nesse exemplo ele não impremi o 60 nem o 90, mas o resto do loop sim
while(x < 100){

    x += 10;

    if(x === 60 || x === 90){
        console.log('CONTINUE')
        continue;
    }

    console.log('Testando looping e continue: ' + x);
}

