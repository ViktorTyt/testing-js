//========Автоперевірка-модуль-3=========//

//=======4/41======//

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const tagsLength = apartment.tags.length;
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[tagsLength - 1];
// // Change code above this line

// console.log(tagsLength);
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

//=======5/41======//

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//===========7/41========

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// console.log(apartment);

//============8/41============

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// console.log(product);

//=======9/41=================

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// console.log(credentials);

//========10/41==================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// // for (const value in apartment) {
// //   values.push(value);
// // }

// console.log(keys);
// console.log(values);

//=========12/41====================

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += object.hasOwnProperty(key);
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//===========13/41===================

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
// і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line

// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

//===========14/41===================

// function countProps(object) {
//   // Change code below this line

//   //=======var1===========

//   //   let propCount = 0;
//   //   const keys = Object.keys(object);

//   //   for (const key of keys) {
//   //     // console.log(key);
//   //     propCount += 1;
//   //   }

//   //========var2=============

//   let propCount = Object.keys(object).length;

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//============16/41=================

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
// де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата.
// Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
// Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const arrayValues = Object.values(salaries);
//   for (const value of arrayValues) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//============17/41======================

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex,
// а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// const arrValues = Object.values(colors);
// for (const value of arrValues) {

//   hexColors.push(value.hex);
//   rgbColors.push(value.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//============17/41======================

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві products і повертає його
// ціну(властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const el of products) {
//     // console.log(el);
//     if (el.name === productName) {
//       return el.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// console.log(getProductPrice("Radar"));

//=============20/41================

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.
// Функція повинна повернути загальну вартість(ціна * кількість)
// товару з таким ім'ям з масиву products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
//   // Change code above this line
// }

// console.log(calculateTotalPrice("Scanner"));

//============21/41===========

// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні(meanTemperature).
// Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

//==========22/41==============

// У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. Заміни оголошення змінних yesterday,
// today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures.
// Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 39,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

//==========23/41===============

// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей
// об'єкта highTemperatures.
// Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 126,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);
// console.log(highIcon);

//============24/41===============

// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// // for (const color of colors) {
// //   console.log(hexColors.push(color.hex));
// //   console.log(rgbColors.push(color.rgb));
// // }

// console.log(hexColors);
// console.log(rgbColors);

//=============25/41=============

// Ми отримали прогноз погоди на два дні,
// з мінімальними і максимальними температурами,
// а також необов'язковими іконками.
// Заміни оголошення всіх змінних однією операцією деструктуризації властивостей
// об'єкта forecast.Задай значення за замовчуванням для іконок, змінних todayIcon і
// tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
// } = forecast;
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// console.log(highToday);

//========26/41==============

// Функція calculateMeanTemperature(forecast) приймає один параметр forecast -
// об'єкт температур на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh
// однією операцією деструктуризації властивостей об'єкта forecast.

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 15 },
//   })
// );

//=============29/41==========

// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings.
// Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і
// поверх них застосувати перевизначені налаштування.Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   ...defaultSettings,
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings,
// };

// console.log(finalSettings);

//===========33/41=========

// Change code below this line
// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     console.log(arg);
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

//============35/41==============

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const retNewName = this.books.splice(
//       this.books.indexOf(oldName),
//       1,
//       newName
//     );
//     return this.books;

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

//==============41/41=================

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name !== potionName) {
//         this.potions.splice(i, 1);
//         return this.potions;
//       }
//       return `Potion ${potionName} is not in inventory!`;
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions.splice(i, 1, newName);
//         return this.potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

// console.log(atTheOldToad.removePotion("Dragon breath"));

// console.table(atTheOldToad.potions);

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// console.table(atTheOldToad.potions);

//==============Перебирання об'єкта================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
//   online: true,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

//=============================

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";
// console.log(`animal: ${animal}`);
// console.log(dog); // {name: 'Манго'}
// // console.log(dog.name); // 'Манго'
// // console.log(dog.legs); // 4

//======================

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// let total = 0;

// for (const value of Object.values(goods)) {
//   total += value;
// }

// console.log(total);

//==================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// const bookEntries = Object.entries(book);
// console.log(bookEntries);

//==========================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// const arr = [];
// for (const book of books) {
//   if (book.rating > 7) {
//     arr.push(book.rating);
//   }
// }
// console.log(arr);

//===================

// const rgb = [200, 100, 255];

// const [red, , , white = 0.5] = rgb;

// console.log(red, white); // "R:200,G:100,B:255,Alfa:0.3"

//======================
// const book = {
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   epublic: true,
// };

// function doStuffWithBook({ title, numberOfPages, downloads, rating, epublic }) {
//   // Робимо щось з параметрами
//   console.log(title);
//   console.log(epublic);
// } // І так далі

// // ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// ==============повторення===========
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// =========Звернення до вкладених властивостей через крапку=======

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };
// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[2];
// console.log(firstHobby); // 'swiming'

// const changeHobbies = user.hobbies.splice(1, 1, "playing");
// console.log(changeHobbies); //['music']
// console.log(hobbies); //['swiming', 'playing', 'sci-fi']

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// =========Звернення до властивостей через квадратні дужки========

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// ===============Обчислювальні властивості==============

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'
// console.log(user);

// const propName = "name";
// const user = {
//   age: 25,
//   [propName]: "Генрі Сибола",
// };

// // user[propName] = "Генрі Сибола";
// console.log(user.); // 'Генрі Сибола'
// console.log(user);

// =========Доступ до властивостей об'єкта в методах=============

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// =========Перебирання об'єкта========

// =========Цикл for...in==============

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// ===========Метод hasOwnProperty()===

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";
// dog.eyes = 2;

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// for (const key in animal) {
//   if (animal.hasOwnProperty(key)) {
//     const element = animal[key];
//     console.log(element);
//   }
// }

// ======Метод Object.keys()======

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// ======Метод Object.values()====

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// for (const value of values) {
//   if (value === "Bernard Cornwell") {
//     console.log(value);
//   }
// }

// ======Масив об'єктів=========

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// let totalrating = 0;
// for (const book of books) {
//   totalrating += book.rating;
//   console.log(totalrating);
// }

// const averageRating = (totalrating / books.length).toFixed(1);
// console.log(averageRating);

// ======Деструктуризація===========

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480
