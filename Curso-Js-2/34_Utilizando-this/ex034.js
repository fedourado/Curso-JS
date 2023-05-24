// UTILIZANDO O THIS
/**
 * - Fora dos escopos locais, o this sempre se refere ao objeto global Window;
 * - Em objetos o this vai se referir a instância e pode acessar suas propriedades;
 * - Quando adicionamos uma variável, no escopo global, ela vai vai para o objeto Window como um propriedade.
 */


var teste = 9;

console.log(this.teste);
console.log(teste);


let person = {
    name: 'Fernanda',
    age: 21,
    yearBirth: 2002,
    yearNow: 2023,
    welcome: function() {
        console.log('Seja Bem-Vinde!')
    },
    dizerName: function() {
        console.log('O meu nome é ' + this.name); // porque nesses casos eu uso o this?
    },
    niver: function() {
        this.age += 1;
    },
    saudacao: function() {
        return `Bem-Vindo(a), Sra. ${this.name}!`;  
    }
};

person.dizerName();

console.log(person.age);

person.niver(); // pode chamar essa função mais de uma vez e isso irá adicionar o número de aniversários antes da idade sser impressa.
person.niver();

console.log(person.age);

console.log(person.saudacao());