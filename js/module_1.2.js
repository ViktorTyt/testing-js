// alert('Hello')

// let counter = 0;

// while (counter < 20) {
//   console.log("counter: ", counter);
//   counter += 2;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for (let i = 3; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }
// const clients = ["Mango", "Ajax", "Poly", "Apple"];
// clients[2] = "Apollo"
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const counter of string) {
//   console.log(counter);
// }

// const numbers = [1, 3, 14, 12, 4, 7, 22, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// ====================MIN or MAX===========================

// const numbers = [33, 10, 14, 12, 96, 5, 22, 6, 34];
// console.log(numbers);

// let maxNumber = numbers[0]

// for (let number of numbers) {
//   if (number > maxNumber) {
//     maxNumber = number
//   }
// }
// console.log(maxNumber);

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(`${firstElement}, ${secondElement} and ${lastElement}`);

// alert("Hi")

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let total = 0;

// const array3 = array1.concat(array2);
// for (const array of array3) {
//   total += array
// }

// console.log(total)

// let counter = 10;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// console.log("Wrong cicle");

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// const max = 10;
// for (let i = 0; i < max; i += 2) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 1) {
//     console.log(`Знайшли число ${i}, перериваємо виконання циклу`);
//     break;
//   }
// }

// console.log("Лог після циклу");

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split("");
//   // Change code above this line
//   return words;

// let ord = message;

// let string = message.split(" ");

// console.log(string);

// const string = "Something for you";

// console.log(string);

// const newString = string.toLowerCase().split(" ").join("-");

// console.log(newString);

// =============================slice=============================

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3, fruits.length);
// console.log(firstTwoEls); // "apple", "plum",
// console.log(nonExtremeEls); // "plum", "pear", "orange"
// console.log(lastThreeEls); // "pear", "orange", "banana"

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = newClients.concat(oldClients );

// console.log(allClients);

// const start = 3;
// const end = 17;

// for (let i = start; i <= end; i += 1) {
//   // Change this line

//   console.log(i % 2);
// }

// const ord = [5, 8, 2];
// let total = 0;
// // Change code below this line
// for (let i = 0; i < ord.length; i += 1) {}
// console.table(ord);

// function filterArray(numbers, value) {
//   // Change code below this line
//     if (numbers > value) {
//         console.log()
//     }
//   // Change code above this line
// }
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   const fruitIncl = fruits.includes(fruit);
//   return fruitIncl; // Change this line
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("plum"));
// console.log(checkFruit("plum"));

// const fruits = ["apple", "plum", "pear", "orange"];
// // const fruit = [];
// const fruitIncl = fruits.includes("pear");
// console.log(fruitIncl);

// const clients = ["Mango", "Poly", "Ajax"];
// console.table(clients);
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]
// console.table(clients);
// clients[2] = "Orange";
// console.table(clients);

// const clients = [
//   "Mango",
//   "Poly",
//   "Ajax",
//   "Mango",
//   "Poly",
//   "Ajax",
//   "Mango",
//   "Poly",
//   "Ajax",
//   "Mango",
//   "Poly",
//   "Ajax",
// ];
// console.log(clients.length); // 3

// const clients = [
//   "Mango",
//   "Poly",
//   "Ajax",
//   "Mango",
//   "Poly",
//   "Ajax",
//   "Mango",
//   "Poly",
//   "Ajax",
//   "Poly",
// ];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"
// console.log(clients.length);

// const clients = ["Mango", "Ajax", "Poly", "Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   clients[i] += " + Ohh";
//   console.log(clients[i]);
// }

// console.table(clients);

// const familyArr = [
//   "Mother",
//   "Father",
//   "Mother",
//   "Father",
//   "Mother",
//   "Hello",
//   "Mother",
//   "Father",
//   "Mother",
//   "Father",
//   "Hello",
//   "Brother",
//   "Sister",
// ];
// const member = "Father";
// const hasMember = familyArr.includes(member);
// if (hasMember) {
//   console.log(`Memder is find`);
// }

// console.log(familyArr);
// const memberNameToFind = "Hello";
// for (const member of familyArr) {
//   if (member === memberNameToFind) {
//     console.log(`Member ${member} is found`);
//     break;
//   }
//   console.log(`Member ${member} is not found`);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// let a = [7];
// console.log(a);
// console.table(a);
// let b = a;
// console.log(b);
// console.table(b);

// a.push(5);
// console.log(a);
// console.table(a);
// console.log(b);
// console.table(b);

// const numbers = [1, 2, 3, 4];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// const clients = [
//   "Mango",
//   "Ajax",
//   "Poly",
//   "Kiwi",
//   "Mango",
//   "Ajax",
//   "Poly",
//   "Kiwi",
//   "Airflash",
//   "Mother",
//   "Father",
//   "Hello",
//   "Brother",
//   "Sister",
// ];
// console.log(clients.slice(0, clients.length - 2)); // ["Ajax", "Poly"]
// console.log(clients.splice(clients.indexOf("Kiwi"), 3));
// console.table(clients);
// console.log(clients.length);
// console.log(clients.splice(2, 0, "Airbus", "Airtrain"));
// console.table(clients);
// console.log(clients.length);

// const scores = ["red", "green", "blue"];
// console.log(scores.splice(2, 0, "purple"));
// console.table(scores);
// console.log(scores.splice(scores.indexOf("green"), 1, "yellow", "black"));
// console.table(scores);
// console.log(scores);
// console.log("Hello");

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// console.log("Hello");

// const data = [1, 2, 3, 4, 5, 6, 7, 8];
// const newArr = [];
// function getReverse(arr) {
//   for (let el of arr) {
//     newArr.unshift(el);
//     console.table(newArr);
//   }
//   return newArr;
// }
// console.log(getReverse(data));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArr = [];
//   for (const el of array1) {
//     if (array2.includes(el)) {
//       newArr.push(el);
//       console.table(newArr);
//     }
//   }
//   return newArr;
//   // Change code above this line
// }
// // console.log(getCommonElements([1, 2, 3], [2, 4]));
// // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// // // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// // console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const arrIntegerNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arrIntegerNumbers.push(i);
//     }
//   }
//   return arrIntegerNumbers;
//   // Change code above this line
// }
// console.log(getEvenNumbers(35, 48));

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(2, 6, 6));

// function includes(array, value) {
//   // Change code below this line

//   for (let el of array) {
//     if (el === value) {
//       return true;
//       // Change code above this line
//     }
//   }
// }
// console.log(includes([1, 2, 3, 4, 5], 3));

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// // count(1, 5); // countFrom = 1, countTo = 5, step = 1
// // count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function fn(...args) {
//   let args2 = [];
//   args = Array.from(arguments);
//   for (const argument of arguments) {
//     if (argument === 7) {
//       args2.push(argument);
//     }
//   }
//   return args2;
// }

// console.log(fn(3, 7, 5));

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   if (clients[i] === "Poly") {
//     clients[i] = "Kiwi";
//   }
//   console.log(clients[i]);
// }

// for (let client of clients) {
//   if (client === "Poly") {
//     client = "Peter";
//   }
//   console.log(client);
// }

// const languageName = "JavaScript";
// for (const character of languageName) {
//   console.log(character);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     // break;
//   }
//   // Якщо не збігається, то на цій ітерації нічого не робимо
// }

// console.log(message); // Клієнт з таким ім'ям є в базі даних!

// const name = "Mango Tango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [20, 30, 40];
// const array3 = [];
// array3.push(...array1, ...array2);
// console.log(array3);
// array3.push(70);
// // console.log(array3.pop());
// console.log(array2);

// console.log(array3);

// const numbers = "2.5.9.12.18.24.35";
// const arrNumbers = numbers.split(".").join(",");
// console.log(arrNumbers);
// ============slice & splice=======
// const numbers = [2, 5, 9, 12, 18, 24, 35];
// console.log(numbers.slice(2, 4));
// console.log(numbers);
// console.log(numbers.splice(2, 4));
// console.log(numbers);

// ========add elements=====
// const numbers = [2, 5, 9, 12, 18, 24, 35];
// console.log(numbers.splice(3, 0, 77, 88, 99));
// console.log(numbers);
// =======change elements===

// const numbers = [2, 5, 9, 12, 18, 24, 35];
// console.log(numbers.splice(3, 1, 100));
// console.log(numbers);

// =======concat===========

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [20, 30, 40];

// console.log(array1.concat(array2));
// 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550

// ===========functions============

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     console.log(argument);
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// =========псевдомасив arguments=========

// ===Array.from======

// function fn() {
//   //   // Змінна args буде містити повноцінний масив
//   return Array.from(arguments);
// }
// const newArr = fn(3, 6, 8, 12, 18, 25);
// console.log(newArr);

// ====[...rest]=======

// function fn(...args) {
//   //   // Змінна args буде містити повноцінний масив
//   return args;
// }
// const newArr = fn(3, 6, 8, 12, 18, 25);
// console.log(newArr);
