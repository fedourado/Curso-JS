// OPERADOR LÓGICO OR(||)
/**
 * Ele retorna true caso uma das operações sejam verdadeiras
 * Ele retorna falso se apenas umas das operações forem falsas;
 */

var idade = 17;
var renda = false;
var carta = true;


// Idade maior ou igual a 18 e renda para comprar
if(idade >= 18 && renda == true){
    console.log("Você teve seu crédito aprovado, aproveite e compre seu carro!")
}else{
    console.log("Você não teve seu crédito aprovado!")
}

// Idade maior ou igual a 18 e renda para comprar, ou uma carta de aprovação
if((idade >=18 && renda == true) || carta == true){
    console.log("Você teve seu crédito aprovado, aproveite e compre seu carro!");
}else{
    console.log("Você não teve seu crédito aprovado!")
}

// Idade maior ou igual a 18 ou renda para comprar, e uma carta de aprovação
if((idade >=18 || renda == true) && carta == true){
    console.log("Você teve seu crédito aprovado, aproveite e compre seu carro!");
}else{
    console.log("Você não teve seu crédito aprovado!")
}


var idade = 4;
var statusEscola = true;

if(idade <= 10 || statusEscola == false){
    console.log("Seu filho pode receber o auxílio educação")
} else{
    console.log("Seu filho não pode receber o auxílio educação")
}


// Nesse caso terá retorno false, pois a criança além de ter mais de 10 anos e o statusEscola é true.
var idade = 11;
var statusEscola = true;

if(idade <= 10 || statusEscola == false){
    console.log("Seu filho pode receber o auxílio educação")
} else{
    console.log("Seu filho não pode receber o auxílio educação")
}


if(2 > 3 && 4 == 4 || 10 != 9 ){
    console.log("É isso ai");
} else{
    console.log("Uma pena!")
}

// A operação AND (&&) será feita antes de OR (||), por isso caso queiro fazer uma operação OR(||) antes é preciso colocar entre parenteses
if(2 > 3 && (4 == 4 || 10 != 9)){
    console.log("É isso ai");
} else{
    console.log("Uma pena!")
}