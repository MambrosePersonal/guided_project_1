const sp = new URLSearchParams(window.location.search);
const id = sp.get("id");
let film;

async function getFilm() {
  let url = ` https://swapi2.azurewebsites.net/api/films/${id}`;

  try {
    film = await fetch(url).then((res) => res.json());
    console.log(film);
  } catch (ex) {
    console.error("error getting film", ex.message);
  }
}
getFilm();
