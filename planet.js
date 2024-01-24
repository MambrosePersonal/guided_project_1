const sp = new URLSearchParams(window.location.search); 
const id = sp.get('id');
let character;
let film;
let planet;
let planetName = document.querySelector('#name');
let climate  = document.querySelector('#climate');
let diameter= document.querySelector('#diameter');
let gravity = document.querySelector('#gravity');
let orbital_period = document.querySelector('#orbital_period');
let surface_water = document.querySelector('#surface_water');
let population =document.querySelector('#population');

async function getPlanet() {
  let url = ` https://swapi2.azurewebsites.net/api/planets/${id}`

  try {
    planet = await fetch(url).then((res) => res.json());
    film = await fetch(`${url}/films`).then((res) => res.json());
    characters = await fetch(`${url}/characters`).then((res) => res.json());
    console.log(planet);
    console.log(id);
    renderPlanet(planet);
  }catch (ex) {
    console.error(`Error get Planet`, ex.message);
  }
}

const renderPlanet = (planet) => {
  document.title = `SWAPI - ${planet?.name}`;
  climate.textContent = planet.climate;
  gravity.textContent = planet.gravity;
  population.textContent = planet.population;
}
getPlanet();