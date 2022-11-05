const KEY = "18ae920eccc30023e44661ce76c3e71c";

const getGenresMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`
  );

  const popularMovies = await response.json();
  console.log(popularMovies);
  return popularMovies;
};

const getTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending//movie/day?api_key=${KEY}`
  );

  const trendingMovies = await response.json();
  console.log(trendingMovies.results);
  return trendingMovies;
};
// getTrendingMovies();

const saveGenreListToLS = async (callback) => {
  const genreList = await callback();
  console.log(genreList);
  const saved = localStorage.setItem("genreList", JSON.stringify(genreList));
  return saved;
};

// saveGenreListToLS(getGenresMovies);

const refs = {
  gallery: document.querySelector(".gallery"),
};
