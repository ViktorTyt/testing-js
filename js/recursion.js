let company = {
  // той же об’єкт, стиснутий для компактності
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// Функція для підрахунку суми зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // випадок (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сума масиву
  } else {
    // випадок (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно викликається для підвідділів, суммуючи результат
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 7700
