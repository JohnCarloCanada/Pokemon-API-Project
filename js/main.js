import { lowerCaseFunc, upperCaseFunc } from "./utils.js";

document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState) {
    initApp();
  }
});

function initApp() {
  const searchBtn = document.querySelector("#search__btn");
  const searchField = document.querySelector("#search");
  const pokemonDetails = document.querySelector(".pokemon__details");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getPokemonDetails();
  });

  const getPokemonDetails = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${lowerCaseFunc(searchField.value)}`
      );
      const data = await response.json();

      pokemonDetails.innerHTML = `<img
      src="${data.sprites.other["official-artwork"].front_default}"
      alt="${data.name}"
    />
    <div class="details">
      <h3 class="pokemon__name">${upperCaseFunc(data.name)}</h3>
      <div class="pokemon__abilities">
        <h4>Abilities</h4>
        <div class="ability">
          <p>${data.abilities[0].ability.name}</p>
          <p>${data.abilities[1].ability.name}</p>
        </div>
      </div>
      <div class="pokemon__type">
        <h3>Type</h3>
        <p>${data.types[0].type.name}</p>
      </div>
    </div>`;
    } catch (error) {
      console.error(error);
    }
  };
}
