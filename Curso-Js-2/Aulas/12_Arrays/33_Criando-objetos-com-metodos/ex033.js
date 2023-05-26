// CRIANDO OBJETOS COM MÉTODOS

/**
 * Podemos criar nossos obejtos com propriedadess e métodos para auxiliar nossos programas
 */


// cria objeto com let para criar escopo e não deixá-lo global

/**
 * Para criar um método em um objeto, é preciso criar uma function dentro desse objeto com a ação que será feita. Assim, toda vez que esse método for usado o que tiver dentro dessa function será reproduzido.
 */

let person = {
    name: 'Fernanda',
    yearBirth: 2002,
    yearNow: 2023,
    welcome: function() {
        console.log('Seja Bem-Vinde!')
    },
    age: function(yN, yB) {
        return yN - yB
    }
};

console.log(person.name);

person.welcome();
person.age();

var agePerson = person.age(2023, 2002); // NESSE EXEMPLO AS INFORMAÇÕES DENTRO DO PARÂMETRO NO MÉTODO SERÁ PREENCHIDO POR TERCEIROS E COMO?

console.log(agePerson);