import {Weapon} from "./src/weapon.js"
import {Armor} from "./src/armor.js"
import {Potion} from "./src/potion.js"

export class Inventory {
  constructor(){
    this.weapons = [];
    this.armors = [];
    this.potions = [];
    this.maxItems = 10;
  }
}
