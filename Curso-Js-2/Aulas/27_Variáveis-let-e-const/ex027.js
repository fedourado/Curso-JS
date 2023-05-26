// Let e const + escopo
/**
 * - Usando o let e const é possível criar escopos, até mesmo em instruções como if;
 * - Deixa o código mais confiável;
 * - Separa cada bloco em escopo;
 */

let x = 5; //var x = 5;

const y = 10; // const não podem mudar o seu valor, se for atribuido não é possível mudá-lo igual o var e o let.

x = 12;

console.log(x); // o valor impresso será o último atribuido ao x no caso, 12


// Usar let, const em um if é como se estivesse criando um escopo local.
if(true) {

    // com o let é possível criar mais de uma variável, com o mesmo nome, porém com valores diferentes em blocos de if.
    let x = 20;

    console.log(x);

    // como não é possível reatribuir um valor a uma const, para criar uma const y de novo com outro valor, é preciso estar em um outro escopo.
    const y = 30; 

    console.log(y);
}

console.log(x);


if(20 > 10) {

    const y = 100;

    console.log('const if 3 ' + y);
}


for(let x = 0; x < 10; x++) {
    console.log(x)
}