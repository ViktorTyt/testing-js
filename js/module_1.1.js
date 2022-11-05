// console.log("Hello World")

// Задаяа 1
// Вивести суму непарних чесил в діапазоні від 0 до 100
// Рішенн задачі:
// 1. Створити змінні мін і макс
// 2. Застосувати фор
// 3. Застосувати метод залишку ділення з використанням строгої нерівності
// 4. Вивести тотал в консоль поза тілом фор

// const min = 5;
// const max = 6;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//     continue;
//     }
//     total += i;
//     console.log(total);
// }
// console.log("Hello")

// let i = 0;

// while (i <= 50) {
//     console.log(i)
//     i += 1
// }
// Task 6
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// const browser = prompt("Введите название браузера").toLowerCase();

// if (browser === 'edge' ) {
//     alert( "You've got the Edge!")

// } else if (browser ===  'chrome' || browser === 'firefox' || browser ==='safari' || browser === 'opera') {
//     alert( 'Okay we support these browsers too' );
// } else { alert( 'We hope that this page looks ok!' );}

// Task 5
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод добавляется к значению переменной total. Операция ввода числа продолжается
// до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. После того как
// пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// Сделать проверку на то что пользователь ввел именно число.

// let total = 0;

// while (true) {
//     const num = prompt("Введите значение");
//     // total += +num;
//     if (num === null) {
//         alert(total)
//         break;
//     }
//     if (Number.isNaN(+num)) {
//         alert("Вы ввели не число");
//     } else {
//         total += +num;
//     }

//     }

// const answer = prompt("Введите предложение: ");
// const message = answer === null ? "" : answer;
// if (
//   message.toLowerCase().includes("spam") ||
//   message.toLowerCase().includes("sale")
// ) {
//   console.log("Это spam!!!");
// } else {
//   console.log("Ok");
// }
// const name = "JavaScript is awesome".toLowerCase();

// console.log(name)

// let yearOfBirth = 2006;
// yearOfBirth += 3;
// console.log(yearOfBirth)

// let selectedProduct = null;
// console.log(selectedProduct)

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// const username = "Mango";
// console.log("Username like ", username, "very much"); // Username is Mango

// const message = "JavaScript is awesome!";
// alert(message);

// const isComing = confirm("Підтвердіть бронювання");
// console.log(isComing);

// if (isComing === true) {
//     alert("Ласково просимо")
// } else {
//     alert('Пока')
// }
// isComing === true ? alert("Ласково просимо") : alert('Пока')

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// const val = "7";
// console.log(val)
// console.log(typeof val)
// console.log(Number(val))

// const validNumber = Number("аа"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("10"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// console.log(Math.ceil(6.1)); // 1

// console.log(Math.round(1.5)); // 1
// console.log(Math.round(1.5)); // 2

// console.log(Math.pow(2, 4)); // 5

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("as")); // 8
// console.log(message.indexOf("hello")); // -1
// console.log(message.length)

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.js";
// console.log(cssFileName.endsWith("css")); // false
// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace("pt.js", "PT.min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// =========================Модуль 1. Занятие 1. Переменные, типы и операторы========================

// ====Example 1 - Базовые математические операторы=====

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)

// // ====Example 2 - Комбинированные операторы====

// // Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

// // ====Example 3 - Приоритет операторов====

// // Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ====Example 4 - Класс Math====

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.9;

// console.log(Math.floor(value));

// ====Example 5 - Шаблонные строки====

// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// // ====Example 6 - Методы строк и чейнинг====

// Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// const weight = prompt('Enter your weight in kg');
// const height = prompt('Enter your height in metters');
// const weightNum = Number(weight.replace(',', '.'));
// const heightNum = Number(height.replace(',', '.'));
// const bodyWeightIndex = (weightNum / Math.pow(heightNum, 2)).toFixed(3);
// alert(`Your body weight index ${bodyWeightIndex}`);

// ====Example 7 - Операторы сравнения и приведение типов====
// Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// ====Example 8 - Логические операторы====

// Каким будет результат выражений?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// ====Example 9 - Значение по умолчанию и оператор нулевого слияния====

// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue,
// если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений
// Ёпеременной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const incomingValue = false;
// const defaultValue = 10;
// const value = (incomingValue ?? null ?? 0 ?? false) || defaultValue;
// console.log(value);

// // ====Example 10 - Опертор % и методы строк====

// // Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.
// // 70 покажет 01:10
// // 450 покажет 07:30
// // 1441 покажет 24:01

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
