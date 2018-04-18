import {Character} from "./character.js";

class Warrior extends Character{
  constructor() {
    super();
    this.physpower = 10;
    this.magic = 3;
    this.defense = 7;
    this.agility = 3;
  }
}

export {Warrior};
