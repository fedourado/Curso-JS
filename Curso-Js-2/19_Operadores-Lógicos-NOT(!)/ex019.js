// OPERADOR LÓGICO NOT(!)
/**
 * Operador lógico ! é conhecido como NOT;
 * Este operador muda o valor que a expresssão retornou
 * Se recebeu true vira false, se recebeu false vira true; 
 */

if(!true){ // vira false
    console.log("Passou");
}

if(!false){ // vira true
    console.log("Passou");
}


// O user é falso, mas para retornar a mensagem ele precisa ter status verdadeiro e por isso, coloca o NOT(!) antes, pois o programa entende ele como verdadeiro e retorna a mensagem. Mas, não quer dizer que o usuário existe.
var valido = false;

if(!valido){
    console.log("User inválido!")
}