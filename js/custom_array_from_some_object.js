const initialState = {
  avatar: "",
  name: "Bobby",
  sex: "male",
  email: "bobby@com",
  city: "Kyiv",
  phone: "097-555-25-25",
  planet: "Mars",

  birthDay: "00/00/0000",
};

const orderFieldForRender = ["name", "email", "birthDay", "phone", "city"];

const createArray = (object = {}, options = []) => {
  let arrForRender = [];

  for (let index = 0; index < options.length; index++) {
    Object.entries(object).map((item) => {
      if (item[0] === options[index]) {
        arrForRender.push(item);
      }
       return item;
    });
  }

  return arrForRender;
};

console.log(createArray(initialState, orderFieldForRender));
