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

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
