import {Character} from "./character.js";

class Thief extends Character{
  constructor() {
    super();
    this.physpower = 5;
    this.magic = 3;
    this.defense = 5;
    this.agility = 10;
  }
}

export {Thief};
