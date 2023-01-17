import { utilsFunc } from "./utils.js";
// prettier-ignore
/* It takes in data from the API and returns a string of HTML */
class pokemonGet {
  #pokemonName;
  #image;
  #firstAbi;
  #secondAbi;
  #pokemonType;
  constructor(data) {
    this.#pokemonName = data.name;
    this.#image = data.sprites.other["official-artwork"].front_default;
    this.#firstAbi = data.abilities[0].ability.name;
    this.#secondAbi = data.abilities[1].ability.name;
    this.#pokemonType = data.types[0].type.name;
    this.upperCase = new utilsFunc(data);
  }

  getPokemon() {
    return `<img src="${this.#image}" alt="${this.#pokemonName}" loading="eager"/>
            <div class="details">
              <h3 class="pokemon__name">${this.upperCase.upperCaseFunc()}</h3>
              <div class="pokemon__abilities">
                <h4>Abilities</h4>
                <div class="ability">
                  <p>${this.#firstAbi}</p>
                  <p>${this.#secondAbi}</p>
                </div>
              </div>
              <div class="pokemon__type">
                <h3>Type</h3>
              <p>${this.#pokemonType}</p>
              </div>
            </div>`;
  }
}

export { pokemonGet };
