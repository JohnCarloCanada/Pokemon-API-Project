import { utilsFunc } from "./utils.js";
// prettier-ignore
/* It takes the data from the API and returns a string of HTML */
class pokemonGet {
  #pokemonName;
  #image;
  #pokemonAbility;
  #pokemonType;
  constructor(data) {
    this.#pokemonName = data.name;
    this.#image = data.sprites.other["official-artwork"].front_default;
    this.#pokemonAbility = data.abilities;
    this.#pokemonType = data.types;
    this.upperCase = new utilsFunc(data);
  }

  getPokemon() {
    return `<img src="${this.#image}" alt="${this.#pokemonName}" loading="eager"/>
            <div class="details">
              <h3 class="pokemon__name">${this.upperCase.upperCaseFunc()}</h3>
              <div class="pokemon__abilities">
                <h4>Abilities</h4>
                <div class="ability">
                  <p>${this.#pokemonAbility[0].ability.name}</p>
                  <p>${this.#pokemonAbility[1] === undefined ? "" : this.#pokemonAbility[1].ability.name}</p>
                  <p>${this.#pokemonAbility[2] === undefined ? "" : this.#pokemonAbility[2].ability.name}</p>
                </div>
              </div>
              <div class="pokemon__type">
                <h3>Type</h3>
                <p>${this.#pokemonType[0].type.name}</p>
                <p>${this.#pokemonType[1] === undefined ? "" : this.#pokemonType[1].type.name}</p>
              </div>
            </div>`;
  }
}

export { pokemonGet };
