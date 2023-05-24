// variável com null quer dizer que essa variável tem um valor nulo
// variável com undefined é quando ela não possui valor

// Hoisting - içamento: TODAS AS VARIÁVEIS E FUNÇÕES SÃO LEVADAS AO TOPO DO CÓDIGO ANTES DELAS SEREM INTERPRETADAS. Ele vê que a variável sobrenome existe, inicializa ela, mas não a declara.

console.log(sobrenome);

var nome = null;
var sobrenome = 'Dourado';

console.log(nome);
console.log(sobrenome);

console.log(typeof nome);
console.log(typeof sobrenome);

nome = 'Fernanda';

console.log(nome);





