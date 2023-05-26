// OPERADOR LÓGICO AND (&&)
/**
 * Estes operadores realizam comparaçõrs para retornar true or false, faz mais de uma validação;
 * Decide fluxo da aplicação;
 */

var media = 6;
var statusTrab = true;
var faltas = 12;

if(media >= 6 && statusTrab == true){
    console.log("Parabéns! Você passou de ano!")
} else {
    console.log("Infelizmente, você está reprovado!")
}

// pode colocar quantos && quiser
if(media >= 6 && statusTrab == true && faltas < 10){
    console.log("Parabéns! Você passou de ano!")
} else{
    console.log("Infelizmente, você está reprovado!")
}

if(1 == 1 && 3 > 2 && true){
    console.log("Está correto!")
}

var idade = 18;
var gen = "masculino";
var filho = true;

// é possível isolar verificações
if((idade >= 18 && gen == "masculino") && true){
    console.log("Não precisa servir!")
}
