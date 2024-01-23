const sp = new URLSearchParams(window.location.search);
const id = sp.get("id");
let film;
let characters;
let planets;
let filmTitle = document.querySelector(".film-title");
let director = document.querySelector(".director");

async function getFilm() {
  let url = ` https://swapi2.azurewebsites.net/api/films/${id}`;

  try {
    film = await fetch(url).then((res) => res.json());
    characters = await fetch(`${url}/characters`).then((res) => res.json());
    planets = await fetch(`${url}/planets`).then((res) => res.json());
    console.log(film);
    console.log(characters);
    console.log(planets);
    renderFilm();
  } catch (ex) {
    console.error("error getting film", ex.message);
  }
}

function renderFilm() {
  filmTitle.textContent = film.title;
  director.textContent = `Directed by ${film.director}`;
}

getFilm();
