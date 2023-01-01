console.log("Module 5.1");

// =======this Контекст виконання функції============

// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
// bookShelf.addAuthor("Ли Танит");
// bookShelf.addAuthor("Тарас Шевченко");
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

// ========this у глобальній області видимості======

// function foo() {
//   console.log(this);
// }

// foo(); // window без "use strict" і undefined з "use strict"

// ========this в методі об'єкта====================

// ===1=====

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// ===2=====

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// =====this в callback-функціях==========

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// ====this у стрілочних функціях=========

// =====1==
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// =====2==

// const hotel = {
//   username: "Resort hotel",
//   bank: "RBA",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// ======================Методи функцій=====================

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// ========Конструктор класу=============
// ========Власний код для розуміння=====

// class FootballPlayer {
//   constructor({
//     name,
//     surname = "",
//     age = "",
//     position = "",
//     leg = "",
//     club = "",
//   }) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.position = position;
//     this.leg = leg;
//     this.club = club;
//   }

//   generalSkill() {
//     console.log(`${this.name} can play football`);
//   }

//   changeAge(newAge) {
//     this.age = newAge;
//     console.log(this.age);
//   }
// }

// class Backfielder extends FootballPlayer {
//   constructor({ hairColor, ...rest }) {
//     super({ ...rest });
//     this.hairColor = hairColor;
//   }
//   uniqueSkill() {
//     console.log(`${this.name} can play as defender`);
//   }
// }

// const Virgilvandaik = new Backfielder({
//   name: "Virgil",
//   surname: "van Daik",
//   leg: "right",
//   age: "30",
//   position: "backfielder",
//   club: "Liverpool",
//   hairColor: "dark",
// });

// const Marcelo = new Backfielder({
//   name: "Marcelo",

//   age: "35",
//   position: "backfielder",
//   club: "Real Madrid",
//   hairColor: "brown",
//   leg: "left",
// });

// if (prompt()) {
//   console.log(Marcelo);
//   console.log(Virgilvandaik);
//   Marcelo.generalSkill();
//   Marcelo.uniqueSkill();
//   Marcelo.changeAge(getNewAge);
//   console.log(Marcelo);
//   console.log(Virgilvandaik);
// }

// Повторення по відео Репети прототипи/////////////////////////////////

const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.getInfo = function () {
  return `${this.brand} ${this.model} cost ${this.price} $ `;
};

// console.dir(Car);

const audi = new Car({
  brand: "Audi",
  model: "A3",
  price: "25000",
});

console.log(audi);

// console.log(audi.getInfo());

const tag = "model";

audi[tag]
  ? console.log(`${tag} is in audi object`)
  : console.log(`${tag} not found`);

const arr1 = [2, 7, 6, 45, 2, 3, 4, 8];
const arr2 = [1, 5, 7, 12, 3, 4, 8, 6];

const uniqueArr = [...arr1, ...arr2]
  .filter((item, index, array) => array.indexOf(item) === index)
  .sort((a, b) => a - b);
console.log(uniqueArr);

const el = qse;
