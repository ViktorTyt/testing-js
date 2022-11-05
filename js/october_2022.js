class Bork {
  //Property initializer syntax
  instanceProperty = "bork";
  boundFunction = () => {
    return this.instanceProperty;
  };

  //Static class properties
  static staticProperty = "babelIsCool";
  static staticFunction = function () {
    return Bork.staticProperty;
  };
}

console.log(Bork.instanceProperty);
console.log(Bork.staticProperty);

const heading = document.createElement("h1");
console.log(heading);

const element = document.createElement("h1", {
  className: "greeting",
  children: "Hello, world!",
});

console.log(element);
