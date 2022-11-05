// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUserList(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }

// const headers = new Headers({
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value",
// });

// console.log(headers.append("X-Custom-Header", "custom value"));
// console.log(headers.append("Content-Type", "text/bash"));
// console.log(headers.has("Content-Type")); // true
// console.log(headers.get("Content-Type")); // "text/bash"
// console.log(headers.set("Content-Type", "application/json"));
// console.log(headers.delete("X-Custom-Header"));

//==========Форма ім'я та прізвище=============

const refs = {
  form: document.querySelector(".users"),
};

const createFormData = (e) => {
  const formData = e.currentTarget;

  const username = formData.username.value;
  const usersurname = formData.usersurname.value;

  return { username, usersurname };
};

const showResult = (e, callback) => {
  const users = {};
  const formDataValues = callback(e);

  users.name = formDataValues.username;
  users.surname = formDataValues.usersurname;

  console.log(users);

  return users;
};

const onFormSubmit = (e) => {
  e.preventDefault();

  showResult(e, createFormData);
};

refs.form.addEventListener("submit", onFormSubmit);

//==========Об'єкти методом reduce==========

const users = [
  {
    name: "Viktor",
    age: 35,
    languages: ["ukrainian", "english", "russian"],
    city: "Kyiv",
  },
  {
    name: "Petr",
    age: 25,
    languages: ["english", "polish"],
    city: "Krakow",
  },
  {
    name: "Michel",
    age: 30,
    languages: ["german", "english"],
    city: "Berlin",
  },
  {
    name: "Jesus",
    age: 38,
    languages: ["english", "spanish"],
    city: "Sevilla",
  },
  {
    name: "Ali",
    age: 45,
    languages: ["arabic"],
    city: "Cairo",
  },
];

// 1. Створюємо масив мов

const allLanguages = users.reduce(
  (acc, user) => [...acc, ...user.languages],
  []
);

console.log(allLanguages);

// 2. Створємо новий об'єкт статистики по знанню мов

const languagesStats = allLanguages.reduce(
  (acc, language) => ({
    ...acc,
    [language]: acc[language] ? acc[language] + 1 : 1,
  }),
  {}
);

console.log(languagesStats);
