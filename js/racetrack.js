// локальна база даних

const horses = [
  "Silverhorse",
  "Goldhorse",
  "Bronzehorse",
  "Whitehorse",
  "Silverhorse",
];

// Ініціалізуємо змінну лічильника заїздів
let raceCounter = 0;

// отримуємо рефи на дом-вузли
const refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-results-table > tbody"),
};

// створюємо функцію для генерування часу забігу кожного учасника
const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// створюмо функцію яка спрацьовую на клік "Старт заїзду"
const onStart = () => {
  raceCounter += 1;
  const horsesP = horses.map(run);

  updateWinnerField("");
  updateProgressField("Заїзд розпочався,ставки не приймаються");
  determineWinner(horsesP);
  waitAll(horsesP);
};

// створємо фунцію визначення переможця заїзду
const determineWinner = (horsesP) => {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`Winner ${horse}, time ${time}`);
    updateResultsTable({ horse, time, raceCounter });
  });
};

// створємо фунцію, яка очікує всіх участиків заїзду
const waitAll = (horsesP) => {
  Promise.all(horsesP).then(() => {
    updateProgressField("Заїзд завершився, приймаються ставки");
  });
};

// свторюємо фунції оновлення полів і таблиці
const updateProgressField = (mesaage) => {
  refs.progressField.textContent = mesaage;
};

const updateWinnerField = (message) => (refs.winnerField.textContent = message);

const updateResultsTable = ({ horse, time, raceCounter }) => {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML("beforeend", tr);
};

// створюємо проміс на одного учасника заїзду
const run = (horse) => {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
};

// підписуємося на подію клік по кнопці "Старт заїзду"
refs.startBtn.addEventListener("click", onStart);
