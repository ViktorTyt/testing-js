console.log("Module 4.1");

//================================= Колбек-функція
// function greet(age) {
//   console.log(`Ласкаво просимо гостя віком ${age} років.`);
// }

// // Функція вищого порядку
// function registerGuest(age, callback) {
//   console.log(`Реєструємо гостя віком ${age} років.`);
//   callback(age);
// }

// registerGuest(35, greet);

//=====================Inline-callback======

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// // registerGuest("Манго", function greet(name) {
// //   console.log(`Ласкаво просимо ${name}.`);
// // });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

//===================Декілька-колбекі==========

//=====Метод вирішення задачі без колбеків===========
// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   console.log(isRecipientAvailable);
//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Viktor");

//=====Метод вирішення задачі з колбеками==========

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i] * 100}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number * 100}`);
// });

//========================4/48================

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }
//     return onOrderError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));

// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));

// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//=========================6/48=====================

// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив,
// в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   console.log(filteredNumbers);
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function (number, index, numbers) {
//     if (number > value) {
//       console.log(value);
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//=================7/48====================

// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray,
// і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function (element, index, firstArray) {
//     if (secondArray.includes(element)) {
//       console.log(element);
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//================8/48===================

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// console.log(calculateTotalPrice(3, 777));

//=================9/48===================

// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію.
// Заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.

// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item, orderedItems) => (totalPrice += item));

//   return totalPrice;
// };
// // Change code above this line

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//================13/48==================

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = numbers.map((num) => (num % 2 === 0 ? num + value : num));

//   return newArray;

//   // Change code above this line
// }

//===============14/48==================

// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет.
// Обов'язково використовуй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// // const planetsLengths = planets;

// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

// =============15/48=================

// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив
// назв книг(властивість title) з усіх об'єктів масиву books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// // Change code below this line

// const titles = books.map((book) => book.title);

// console.log(titles);

// ==============16/48=============

// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив
// усіх жанрів книг(властивість genres) з масиву книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((book) => book.genres);

// console.log(genres);

// ============17/48===============

// Доповни функцію getUserNames(users) таким чином, щоб вона повертала
// масив імен користувачів(властивість name) з масиву об'єктів в параметрі users.

// Change code below this line
// const getUserNames = (users) => {
//   // Change code above this line
//   users.map((user) => user.name);
// };
// Change code above this line

// ===========19/48=============

// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних
// чисел з масиву numbers, а в змінній oddNumbers - масив непарних.
// Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ===========20/48===============

// Доповни код таким чином, щоб у змінній allGenres був масив всіх
// жанрів книг(властивість genres) з масиву books, а у змінній
// uniqueGenres - масив унікальних жанрів, без повторень.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, allGenres) => allGenres.indexOf(genres) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// ==========21/48==============

// Використовуючи метод filter(), доповни код таким чином, щоб:
// У змінній topRatedBooks утворився масив книг, рейтинг яких(властивість rating)
// більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям
// (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ===========25/48=================

// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів(властивість friends).
// У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// Change code below this line
// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   // return allFriends;
//   const uniqueFriends = allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return uniqueFriends;
//   // Change code above this line
// };

// console.log(
//   getFriends([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39,
//     },
//   ])
// );

// ==============28/48================

// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// ================33/48=============

// // Change code below this line
// const isAnyUserActive = (users) => {
//   return users.((user) => user.isActive);
// };
// // Change code above this line

// console.log(
//   isAnyUserActive([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39,
//     },
//   ])
// );

// =========34/48===============

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх.
// Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce(
//   (previousValue, number) => previousValue + number
// );

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
// console.log(averagePlayTime);

// ===========35/48==============

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// // const totalPlayTime = players.reduce((total, player) => total + player.playtime);
// // const totalgamesPlayed = players.reduce((total, player) => total + player.gamesPlayed);
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// ============37/48================

// // Change code below this line
// const getTotalFriendCount = (users) => {
//   // const getTotalFriendArrive = users.flatMap((user) => user.friends);
//   // // return getTotalFriendArrive;
//   // return getTotalFriendArrive.reduce((total, number) => total + number);
//   return users.reduce((total, number) => {
//     return total + number.friends.length;
//   }, 0);
// };
// // Change code above this line

// console.log(
//   getTotalFriendCount([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39,
//     },
//   ])
// );

// ==============38/48===========

// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// ==============45/48============

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
// рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map((book) => book.author);

// console.log(names);

// ==================46/48==============

// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів,
// відсортований за зростанням кількості їхніх друзів(властивість friends).

// Change code below this line
// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort(
//       (minFrindsCount, maxFriendCount) =>
//         minFrindsCount.friends.length - maxFriendCount.friends.length
//     )
//     .map((user) => user.name);
// };
// // Change code above this line

// console.log(
//   getNamesSortedByFriendCount([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: [
//         "Jacklyn Lucas",
//         "Linda Chapman",
//         "Adrian Cross",
//         "Solomon Fokes",
//       ],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );

// ========48/48==============

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
//   // .reduce((total, user) => total + user.balance)
// };
// // Change code above this line

// console.log(
//   getTotalBalanceByGender(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: [
//           "Jacklyn Lucas",
//           "Linda Chapman",
//           "Adrian Cross",
//           "Solomon Fokes",
//         ],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//       },
//     ],
//     "female"
//   )
// );

// ========ПРАКТИКА============

// ========СПОСІБ1=============
// const arr1 = [5, 8, 0, 12, 0, 16];
// const arr2 = [];
// function changeArr(array, value) {
//   return array.filter((el) => el > 0).map((el) => el * value);
// }
// console.log(arr1);
// console.log(changeArr([5, 8, 0, 12, 0, 16], 2));

// ========СПОСІБ1=============

// const arr1 = [5, 8, 0, 12, 0, 16, 0, 18, 25];
// const arr2 = [];
// const changeArr = (array, value) =>
//   array.filter((el) => el > 0).map((el) => el * value);

// console.log(arr1);
// console.log(changeArr([5, 8, 0, 12, 0, 16, 0, 18, 25], 5));

// ========СПОСІБ1=============

// const arr1 = [5, 8, 0, 12, 0, 16, 0, 18, 25];
// const arr2 = [];
// const changeArr = (array, value) =>
//   array.flatMap((el) => (el === 0 ? [] : el * value));
// // array.flatMap((el) => (el === 0 ? "нуль" : el * value));// для прикладу можна в разі тру передати в масив слово нуль
// console.log(arr1);
// console.log(changeArr([5, 8, 0, 12, 0, 16, 0, 18, 25], 5));

// =============================повторення==============

// let username = { f: 1, d: 2, c: 3 };
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// const getUsernameKeys = Object.keys(username);
// const getUsernameValues = Object.values(username);
// console.log(getUsernameKeys);
// console.log(getUsernameValues);

// =======

// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
// const isComing = confirm("Please confirm hotel reservation");
// // console.log(isComing);

// if (isComing === true) {
//   console.log(`Hello`);
// } else {
//   console.log(`Sorry`);
// }

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false
// const a = 0.1 * 10;
// const b = 0.2 * 10;
// const c = (a + b) / 10;
// console.log(a + b === c); // false
// console.log((a + b) / 10); // 0.30000000000000004

// let cost = 0;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// let counter = 0;
// do {
//   console.log("counter: ", counter);
//   counter += 1;
// } while (counter < 10);
// let clientCounter = 18;
// const maxClients = 25;

// do {
//   console.log(clientCounter);
//   clientCounter += 1;
// } while (clientCounter < maxClients);
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   console.log(i);
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
