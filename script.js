// A Database Filters + koppelen JS Database
const movieDatabase = movies["Movies"];
// console.log(moviesDatabase) = everything is list);

// B functie plus argument de films + li tag + posters
const addMoviesToDom = (films) => {
  const allMovies = document.getElementById("content");

  const arr = films.map(function (movie) {
    const movieView = "https://www.imdb.com/title/" + movie.imdbID;
    return (
      "<li class='list-items'><a href=" +
      movieView +
      "><img src=" +
      movie.Poster +
      " alt=''></a></li>"
    );
  });

  arr.forEach(function (movie) {
    allMovies.innerHTML += movie;
  });
};

//addMoviesToDom(movieDatabase)

addMoviesToDom(movieDatabase);

//B Select all RadioButtens met change fucntie

const addEventListeners = () => {
  const buttons = document.querySelectorAll("input[name='film-filter']");
  buttons.forEach(function (button) {
    button.addEventListener("change", function (e) {
      handleOnChangeEvent(e.target.value);
    });
  });
};

addEventListeners();

//Event function 'change'

const handleOnChangeEvent = (movieName) => {
  switch (movieName) {
    case "latesMovies":
      filterLatestMovies();
      break;
    case "avengers":
      filterMovies("Avenger");
      break;
    case "xmen": //koppeling met <input> en dan Label
      filterMovies("X-Men");
      break;
    case "princess":
      filterMovies("Princess");
      break;
    case "batman":
      filterMovies("Batman");
      break;
    default:
      console.log("something went wrong!");
  }
};

// Filter:  movie Name

const filterMovies = (Name) => {
  const resultFilteredMovies = movieDatabase.filter(function (item) {
    return item.Title.includes(Name);
  });

  removeLi();
  addMoviesToDom(resultFilteredMovies);
};

// Filter: movie Latest

const filterLatestMovies = () => {
  const resultFilteredLatestMovies = movieDatabase.filter(function (item) {
    return parseInt(item.Year) >= 2014;
  });

  removeLi();
  addMoviesToDom(resultFilteredLatestMovies);
};

// Functie geven aan removeLi()
const removeLi = () => {
  const liItems = document.querySelectorAll(".list-items");
  liItems.forEach((item) => item.remove());
};
