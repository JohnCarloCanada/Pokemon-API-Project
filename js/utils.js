/* It's a class that takes in a data object and returns a lowercase and uppercase version of the name
property. */
class utilsFunc {
  constructor(data) {
    this.data = data;
    this.name = data.name;
  }

  lowerCaseFunc() {
    return this.data.trim().toLowerCase();
  }

  upperCaseFunc() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }
}

export { utilsFunc };
