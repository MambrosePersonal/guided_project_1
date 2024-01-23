const sp = new URLSearchParams(window.location.search); 
const id = sp.get('id');

async function getPlanet() {
  let url = ` https://swapi2.azurewebsites.net/api/planets/${id}`
  let planet;
  try {
    film = await fetch(url).then((res) => res.json());
    console.log(film);
  }catch (ex) {
    console.error(`Error get film`, ex.message);
  }
}
getPlanet();