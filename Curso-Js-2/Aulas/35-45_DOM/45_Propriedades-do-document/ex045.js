// PROPRIEDADES DO DOCUMENT
/**
 * - O objeto document não tem somento métodos;
 * - Podems retirar várias informações importantes das suas propriedades também;
*/

// propriedaddes document
console.log(document.body); // mostra o body
console.log(document.head); // mostra o head
console.log(document.links[0]); // mostra todos os links do site

document.links[1].textContent = 'Doguinhos'

console.log(document.URL); // passa o caminho do arquivo, caso não esteja hospedado, e se estiver hospedado a URL.

console.log(document.title); // retorna o título da página
document.title = 'ex45 - Propriedades do objeto document';