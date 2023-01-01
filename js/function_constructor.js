function Cat({ name, age, color = "Neutral" }) {
  this.name = name;
  this.age = age;
  this.color = color;
}

const marci = new Cat({ name: "Marci", age: 7 });

// console.log(marci);

// ================
class Animal {
  legs = 4;
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  constructor({ color, location, ...rest }) {
    super(rest);
    this.color = color;
    this.location = location;
  }

  get dogName() {
    return this.name;
  }

  set dogName(newName) {
    this.name = newName;
  }
}

const patron = new Dog({
  name: "Patron",
  age: 8,
  location: "Kyiv",
  color: "brown-white",
});

console.log(patron);
console.log(patron.dogName);
console.log((patron.dogName = "Patronchyk"));
console.log(patron);
