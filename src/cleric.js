import {Character} from "./character.js";

class Cleric extends Character{
  constructor() {
    super();
    this.physpower = 3;
    this.magic = 7;
    this.defense = 10;
    this.agility = 3;
  }
}

export {Cleric};
