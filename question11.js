// Create a Person object using a constructor function with name and age properties.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 25);
console.log(person1.name);
console.log(person1.age);
