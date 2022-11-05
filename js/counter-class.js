const markup = (initialValue) => `
<button data-name="decrement">-</button>
<span data-name="value">${initialValue}</span>
<button data-name="increment">+</button>`;

class Counter {
  constructor({ selector, initialValue }) {
    this.value = initialValue;
    this.refs = {};

    this.parent = document.querySelector(selector);
    this.parent.insertAdjacentHTML("beforeend", markup(initialValue));
    this.init();
  }

  init() {
    this.refs.btnDecrement = this.parent.querySelector(
      '[data-name="decrement"]'
    );
    this.refs.valueItem = this.parent.querySelector('[data-name="value"]');
    this.refs.btnIncrement = this.parent.querySelector(
      '[data-name="increment"]'
    );
    this.refs.btnDecrement.addEventListener(
      "click",
      this.handleDecrement.bind(this)
    );
    this.refs.btnIncrement.addEventListener(
      "click",
      this.handleIncrement.bind(this)
    );
  }

  handleDecrement() {
    this.value -= 1;
    this.refs.valueItem.textContent = this.value;
  }

  handleIncrement() {
    this.value += 1;
    this.refs.valueItem.textContent = this.value;
  }
}
export default Counter;
// module.exports = Counter;
