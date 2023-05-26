// ELSE E ELSE IF

/**
 * Caso a instrução de if seja negativa, podemos adicionar o else - que será outra condicional a ser executada;
 * Podemos criar uma bifurcação no código;
 * Já o else if tem a possibilidade de fazer outra verificação e adicionar mais um bloco de código;
 * 
 */


var nome = window.prompt("Digite Ana, Fernanda ou outro nome feminino.");

// se o if for positivo, essa condição é executada
if(nome == "Ana"){ 
    console.log("O nome dela é Ana.");
} 
// quando vc precisa adicionar outra verificação além do if, usa-se o else if. Ele funciona da mesma maneira, possui uma condição e ela será verificada se for true será executada, se n não será executada.
// Ela será executada se o if for negativo e n for exectado.
else if(nome == "Fernanda") {
    console.log("O nome dela é Fernanda.");
}
// quando o if e o else if é negativo, o else será executado
else{ 
    console.log("O nome dela é outro.");
}

var idadeMin = 18;
var idade = window.prompt("Qual é a sua idade?");

if(idade >= 18){
    console.log("Entrada permitida!");
} else if(idade >=12 && idade < 18){
    console.log("Entrada permitida com pais ou responsáveis.");
} else if(idade = 11){
    console.log("Entrada permitida com pais ou responsáveis, em caso de aniversário.");
} else {
    console.log("Entrada proibida!");
}

var animal = "cat";

if(animal == "dog"){
    console.log("Dogs are so cute :3");
} else{
    console.log("Cats are so adorable *.*");
}