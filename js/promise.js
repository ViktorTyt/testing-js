const promise = new Promise((res, rej) => {
  const imitationResult = Math.random() > 0.5;

  setTimeout(() => {
    if (imitationResult) {
      res("Promise good");
    } else {
      rej("Promise with error");
    }
  }, 2000);
});

promise.then(
  (good) => {
    console.log(good);
  },
  (err) => {
    console.log(err);
  }
);

// console.log(promise);

/**
 * =======промісіфікація функцій============
 */

const getFetchById = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((Response) =>
    Response.json()
  );
};

getFetchById(5).then((pokemon) => console.log(pokemon));
getFetchById(8).then((pokemon) => console.log(pokemon));
getFetchById(9).then((pokemon) => console.log(pokemon));

const makePromise = () => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    if (passed) {
      resolve("💙💛");
    }

    reject("💥");
  });
};

makePromise()
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("The end"));
