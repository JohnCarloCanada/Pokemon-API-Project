/* Importing the functions from the utils.js and pokemonDetails.js files. */
import { utilsFunc } from "./utils.js";
import { pokemonGet } from "./pokemonDetails.js";

document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    initApp();
  }
});

function initApp() {
  /* Selecting the elements from the DOM. */
  const searchBtn = document.querySelector("#search__btn");
  const searchField = document.querySelector("#search");
  const pokemonDetails = document.querySelector(".pokemon__details");

  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await getPokemonDetails();
  });

  /* Listening for the enter key to be pressed and if the search field is empty it will alert the user
  to enter a pokemon name. If the search field is not empty it will call the getPokemonDetails
  function. */
  window.addEventListener("keypress", async (e) => {
    if (e.key === "Enter" && searchField.value === "") {
      e.preventDefault();
      alert("Please enter a pokemon name");
    } else if (e.key === "Enter") {
      e.preventDefault();
      await getPokemonDetails();
    }
  });

  /**
   * It takes the value of the search field, passes it to the utilsFunc class, which then returns the
   * value in lower case, then it uses that value to fetch the pokemon details from the pokeapi, then
   * it passes the data to the pokemonGet class, which then returns the pokemon details in HTML format.
   */
  const getPokemonDetails = async () => {
    try {
      const useUtilsValue = new utilsFunc(searchField.value);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${useUtilsValue.lowerCaseFunc()}`);
      const data = await response.json();

      const getDetails = new pokemonGet(data);

      pokemonDetails.innerHTML = getDetails.getPokemon();
    } catch (error) {
      console.error(error);
    }
  };
}
