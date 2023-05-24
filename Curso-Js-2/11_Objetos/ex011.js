// Objetos são conjuntos de valores em uma variável. Os itens dos objetos são chamados de propriedades

var obj = {
    nome: 'Fernanda',
    idade: 21,
    curso: 'Ciência da Computação'
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);


// é possível concatenar uma propriedade de um objeto
console.log('O meu nome é ' + obj.nome);

// possível modificar uma propriedade
obj.nome = 'Fernanda Dourado'

console.log(obj.nome);
console.log(obj);


// possível criar uma nova propriedade 
obj.graduacao = false;

console.log(obj);
console.log(obj.graduacao);