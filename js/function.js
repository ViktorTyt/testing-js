function changeName(newName) {
  console.log(this);
}

console.log(changeName());

const cats = {
  name: "Bom",
  changeName(newName) {
    this.name = newName;
    console.log(this);
  },
};

// cats.changeName("Tom");

function MyFunction() {
  console.log(this);
}

new MyFunction(); // виводить екземпляр MyFunction

export { cats };

const refs = {
  gallery: document.querySelector(".gallery"),
};

const cardForRender = 20;

const render = (cardForRender) => {
  const arrForRender = [];
  for (let i = 1; i <= cardForRender; i += 1) {
    arrForRender.push(i);
  }
  console.log(arrForRender);
  const markup = arrForRender
    .map(
      (item) => `<li class="card-set__item" data-id="${id}">
            <div class="card-set__box-img">
            <img
                loading="lazy"
                src="${posterPath}"
                alt="${original_title}"
                class="card-set__img"
                
            />
            </div>
            <h3 class="card-set__title">${title}</h3>
            <div class="card-set__description">
            <ul class="card-set__genre">
                ${genresMarkup}
            </ul>
            <span class="card-set__genre-movie">&nbsp| ${productionYear}</span>
            </div>
        </li>`
    )
    .join(" ");
  refs.gallery.insertAdjacentHTML("afterbegin", markup);
};

// render(cardForRender);
