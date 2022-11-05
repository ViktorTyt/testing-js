"use strict";

const e = React.createElement;

class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  }

  // Ми закриваємо відкритий список за допомогою setTimeout.
  // Це необхідно, щоб перевірити,
  // що інший дочірній елемент отримав фокус, оскільки
  // подія 'blur' відбувається завжди перед подією 'focus'.
  onBlurHandler() {
    console.log("in blur");
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false,
      });
    }, 1000);
  }

  // Якщо дочірній елемент отримав фокус, то список не закриваємо.
  onFocusHandler() {
    console.log("in focus");
    clearTimeout(this.timeOutId);
  }

  render() {
    // React допомагає нам, підіймаючи події `blur` та
    // `focus` до батьківського елемента.
    return (
      <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        <button
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
        >
          Select an option
        </button>
        <button aria-haspopup="false">2</button>
        <button>3</button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return "You liked this.";
//     }

//     return e(
//       "button",
//       { onClick: () => this.setState({ liked: true }) },
//       "Like"
//     );
//   }
// }

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(BlurExample), domContainer);
