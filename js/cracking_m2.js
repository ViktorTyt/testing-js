console.log("first");

const func = (a, b, c, ...d) => {};

console.log(func.length);

const studentOperator = {
  getSortedMarks: function () {
    return this.marks.sort(function (mark1, mark2) {
      if (mark1 === mark2) return 0;
      if (mark1 > mark2) return 1;

      return -1;
    });
  },

  getAverageMarks: function () {
    const marksSum = this.marks.reduce(function (acc, item) {
      return acc + item;
    });

    return Math.round(marksSum / this.marks.length);
  },
};

const student1 = {
  marks: [8, 3, 4, 5, 6, 2, 7, 3, 2],
};

const student2 = {
  marks: [8, 3, 4, 5, 6, 2, 7, 3, 2, 50],
};

Object.setPrototypeOf(student1, studentOperator);
Object.setPrototypeOf(student2, studentOperator);

// console.log("Sorted marks:", student1.getSortedMarks());
// console.log("Average marks:", student2.getAverageMarks());
// console.log(student2.getAverageMarks());
// console.log(student1.getSortedMarks());

const a = [3, 4, 6, 8, 9, 35, 41, 9, 12];
const b = [8, 9, 9];
let total = 0;

// function arrayDiff(a, b) {
//   return a.filter((item) => !b.includes(item));
// }

// console.log(arrayDiff(a, b));

// for (const iterator of a) {
//   if (iterator % 2 !== 0) {
//     continue;
//   }

//   total += iterator;
// }

// console.log(total);

// for (const iterator of a) {
//   if (iterator === 9) {
//     console.log(iterator);
//     break;
//   }

//   console.log(`Iteration ${iterator}`);
// }
// let biggestNumber = a[0];

// for (const iterator of a) {
//   if (iterator > biggestNumber) {
//     biggestNumber = iterator;
//   }
// }

// console.log(biggestNumber);
// function func1(braces) {
//   console.log(braces);
//   for (const iterator of object) {
//     return braces.includes("{") === braces.includes("}");
//   }
// }

// console.log(func1("[({})](]"));

const cart = {
  items: [],
  add(product) {
    const { items } = this;

    for (const item of items) {
      if (product.name === item.name) {
        item.quantity += 1;
        return;
      }
    }

    const item = {
      ...product,
      quantity: 1,
    };

    return this.items.push(item);
  },
  removeItem(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      if (productName === items[i].name) {
        items.splice(i, 1);
      }
    }
  },
  clear() {
    return (this.items = []);
  },
  getNames() {
    const names = [];

    for (const item of this.items) {
      names.push(item.name);
    }

    return names;
  },
  getTotal() {
    let total = 0;

    for (const item of this.items) {
      total += item.price * item.quantity;
    }

    return total;
  },

  itemQuantityIncrease(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (id === i) {
        this.items[i].quantity += 1;
        return;
      }
    }
  },

  itemQuantityDecrease(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (id === i) {
        if (this.items[i].quantity > 1) {
          return (this.items[i].quantity -= 1);
        }

        this.removeItem(this.items[i].name);
      }
    }
  },
};

cart.add({ name: "Pepsi", price: "16" });
cart.add({ name: "Tidbit", price: "8" });
cart.add({ name: "Tidbit", price: "8" });

cart.add({ name: "Pepsi", price: "16" });
cart.add({ name: "Tidbit", price: "8" });
cart.add({ name: "Nuts", price: "12" });
console.table(cart.items);

// console.log(cart.itemQuantityIncrease(2));
// console.log(cart.itemQuantityIncrease(2));
// console.log(cart.itemQuantityIncrease(2));
console.table(cart.items);

console.log(cart.itemQuantityDecrease(1));
console.log(cart.itemQuantityDecrease(1));

console.table(cart.items);
console.log(cart.itemQuantityDecrease(1));
console.table(cart.items);
console.log(cart.itemQuantityIncrease(1));
cart.add({ name: "Tidbit", price: "8" });
console.table(cart.items);
console.log(cart.itemQuantityDecrease(1));
console.log(cart.itemQuantityDecrease(1));

console.table(cart.items);
