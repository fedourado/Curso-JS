/**
 * OPERADORES DE COMPARAÇÃO
 * 
 * São comumente utilizados para verificação nas estruturas de condições
 * 
 * Temas os seguintes operadores: ==, !=, >, <, >=, <=
 * A partir da comparação temos true or false
 */


var idadeMin = 18;
var idade = window.prompt("Qual é a sua idade?");

// o 0 (zero) será considerado falso, então a mensagem não irá aparecer se não tiver valor a variável (o valor pode ser atribuido depois)
var possuiCarro = 1;

if(idade >= idadeMin){
    console.log("Entrada permitida!");
    window.alert("Entrada permitida!");
}

if(idade < idadeMin){
    console.log("Entrada negada!");
    window.alert("Entrada negada!");
    window.location.href = "https://noticias.buscavoluntaria.com.br/100-fotos-de-gatinhos-para-voce-se-apaixonar/"
}

if(possuiCarro){
    console.log("O usuário possui carro.")
}

var nome = "Fernanda"

// comparando conteúdo/valor da variável 
if(nome == "Fernanda"){
    console.log("O seu nome é Fernanda!")
}

var num = "12";

// o sinal de == comparando o conteúdo/valor da variável 
if(num == 12){
    console.log("Número é 12!")
}

// o sinal de === compara o conteúdo/valor e o tipo da variável
if(num === 12){
    console.log("Número é 12!")
}

