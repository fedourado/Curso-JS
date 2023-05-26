// são instruções que podem determinar o fluxo de uma aplicação;
// amplamente utilizados deixam o softwares dinâmicos;
// exemplos são: if, else if, else;

// CONDICIONAL IF
/**
 * Executa um bloco de código se a instrução for verdadeira;
 * Se for falsa, ignora o bloco do if e segue o código normalmente;
 */


var idade = window.prompt("Qual a sua idade?");
var idadeMinima = 18;

if(idade >= idadeMinima){
    window.alert("Você pode acessar o site!")
    console.log("Você pode acessar o site!")
}

if(idade < idadeMinima){
    console.log("Você não pode acessar o site!")
    window.alert("Você não pode acessar o site!")
}


console.log("Antes dos if's")

if(true) // entre parenteses a condição 
{
    console.log("Como a condição é true, o código será executado");

} // entre as chaves {} terá o código que será "ativado" caso a condição for verdadeira

if(false) // entre parenteses a condição 
{
    console.log("Como a condição é false, o código não será executado");

}

console.log("Depois dos if's")