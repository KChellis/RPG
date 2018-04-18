import {Character} from "./character.js";

class Wizard extends Character{
  constructor() {
    super();
    this.physpower = 3;
    this.magic = 10;
    this.defense = 3;
    this.agility = 5;
  }
}

export {Wizard};
