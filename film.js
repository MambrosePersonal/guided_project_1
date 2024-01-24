const sp = new URLSearchParams(window.location.search);
const id = sp.get("id");
let film;
let characters;
let planets;
let filmTitle = document.querySelector(".film-title");
let director = document.querySelector(".director");
const planetDiv = document.querySelector(".planets");
const characterDiv = document.querySelector(".characters");

async function getFilm() {
  let url = `https://swapi2.azurewebsites.net/api/films/${id}`;

  try {
    film = await fetch(url).then((res) => res.json());
    characters = await fetch(`${url}/characters`).then((res) => res.json());
    planets = await fetch(`${url}/planets`).then((res) => res.json());

    console.log(film);
    console.log(characters);
    console.log(planets);

    renderFilm();
    renderCharacters();
    renderPlanets();
  } catch (ex) {
    console.error("error getting film", ex.message);
  }
}

function renderFilm() {
  filmTitle.textContent = film.title;
  director.textContent = `Directed by ${film.director}`;
}

function renderCharacters() {
  for (let character of characters) {
    console.log(character);
    const characterEl = document.createElement("a");
    characterEl.textContent = character.name;
    characterEl.setAttribute("href", `/character.html?id=${character.id}`);
    characterEl.setAttribute("class", "character");
    characterDiv.appendChild(characterEl);
  }
}

function renderPlanets() {
  for (let planet of planets) {
    console.log(planet);
    const planetEl = document.createElement("a");
    planetEl.textContent = planet.name;
    planetEl.setAttribute("href", `/planet.html?id=${planet.id}`);
    planetEl.setAttribute("class", "planet");
    planetDiv.appendChild(planetEl);
  }
}

getFilm();
