// COMPARAÇÃO DE VALOR E TIPO (=== E !==)
/**
 * Dois outros operadores de comparação: === (exatamente igual) e !== (exatamente diferente)
 * a função é comparar valor/conteúdo e tipo
 */

var num = 4
var num2 = '5';

if(num == 4){
    console.log("O número é 4.");
} // compara apenas valor

if(num2 === '5'){
    console.log("O número é 5.");
} // compara valor e tipo

if(num2 !== 5){
    console.log("O 5 não é do tipo number e sim uma string");
}