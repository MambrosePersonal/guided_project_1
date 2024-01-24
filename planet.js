const sp = new URLSearchParams(window.location.search); 
const id = sp.get('id');
let character;
let films;
let filmsDiv = document.querySelector('.Films')
let characterDiv = document.querySelector('.Character');
let planet;
let planetName = document.querySelector('#name');
let climate  = document.querySelector('#climate');
let diameter= document.querySelector('#diameter');
let gravity = document.querySelector('#gravity');
let orbital_period = document.querySelector('#orbital_period');
let population =document.querySelector('#population');

async function getPlanet() {
  let url = ` https://swapi2.azurewebsites.net/api/planets/${id}`

  try {
    planet = await fetch(url).then((res) => res.json());
    films = await fetch(`${url}/films`).then((res) => res.json());
    characters = await fetch(`${url}/characters`).then((res) => res.json());
    console.log(planet);
    console.log(id);
    renderPlanet(planet);
    renderFilm();
    renderCharacters();
  }catch (ex) {
    console.error(`Error get Planet`, ex.message);
  }
}

const renderPlanet = (planet) => {
  planetName.textContent = planet.name;
  climate.textContent = planet.climate;
  gravity.textContent = planet.gravity;
  population.textContent = planet.population;
  diameter.textContent = planet.diameter;
  orbital_period.textContent = planet.orbital_period;
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

function renderFilm() {
  for (let film of films) {
    console.log(film);
    const filmEl = document.createElement("a");
    filmEl.textContent = film.title;
    filmEl.setAttribute("href", `/film.html?id=${film.id}`);
    filmEl.setAttribute("class", "film");
    filmsDiv.appendChild(filmEl);
  }
}

getPlanet();