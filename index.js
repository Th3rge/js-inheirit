// // Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const person = {
  name: 'Sally',
  age: 23,
};

function Person(name, age) {
  this.name = name;
  this.age = age;
  const jose = new Person('jose', 38);
}

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const reindeer = new Animal('Duende');

person.age = 30;
person.place = 'Kalifado';
delete person.name;
console.log(person);

if ('place' in person) {
  console.log(`place exists. The place is: ${person.place}`);
}

//Primeira forma
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

//Segunda forma
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

/*
  Metodo de objeto
*/

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(3, 4));
console.log(calculator.sub(10, 4));

/*
  Json
*/

//Converte o objeto json para string
const json = JSON.stringify(person);

console.log(typeof json);

//Converte a string para o objeto json
const obj = JSON.parse(json);

console.log(typeof obj);

/**
 * Inheritance *
 */

function Bichos(name) {
  this.name = name;
}

Bichos.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};

function Reindeen2(name, species) {
  Bichos.call(this, name);
  this.species = species;
}

Reindeen2.prototype = Object.create(Bichos.prototype);
Reindeen2.prototype.constructor = Reindeen2;

Reindeen2.prototype.makeSound = function () {
  console.log('Snort!');
};

const reinner = new Reindeen2('Chopper', 'Caribou');

reinner.sayName();
reinner.makeSound();
