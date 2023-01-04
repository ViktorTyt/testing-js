const mySymbol = Symbol("secret field");
const namedSymbol = Symbol(5);

console.log(mySymbol);
console.log(namedSymbol);
// alert(namedSymbol.toString());
// alert(mySymbol.toString());

console.log(mySymbol === namedSymbol);

const obj = {
  name: "Viktor",
  age: 36,
  [mySymbol]: "my money",
};

console.log(obj);
console.log(obj[mySymbol]);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const objClone = Object.assign({}, obj);
console.log(objClone[mySymbol]);

let id = Symbol("id");

let user = {
  name: "Taras",
  [id]: 123, // просто "id": 123 не спрацює
};

console.log(user);
