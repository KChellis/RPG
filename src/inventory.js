import {Weapon} from "./weapon.js"
import {Armor} from "./armor.js"
import {Potion} from "./potions.js"

export class Inventory {
  constructor(){
    this.weapons = [];
    this.armors = [];
    this.potions = [];
    this.maxItems = 3;
  }

  addItem(item) {
    let type = item.constructor.name;
    if (type === "Weapon") {
      if (this.weapons.length === this.maxItems) {
        return false;
      } else {
        this.weapons.push(item);
      }
    }else if (type === "Armor") {
      if (this.armors.length === this.maxItems) {
        return false;
      } else {
        this.armors.push(item);
      }
    }else if (type === "Potion") {
      if (this.potions.length === this.maxItems) {
        return false;
      } else {
        this.potions.push(item);
      }
    }
    return true;
  }

  dropItem(item) {
    let type = item.constructor.name;
    if (type === "Weapon") {
      let index = this.weapons.indexOf(item);
      this.weapons.splice(index,1);
    }else if (type === "Armor") {
      let index = this.armors.indexOf(item);
      this.armors.splice(index,1);
    }else if (type === "Potion") {
      let index = this.potions.indexOf(item);
      this.potions.splice(index,1);
    }
  }
}

let inventory = new Inventory();
console.log(inventory);
let armor = new Armor("armor", 10);
console.log(armor);
let potion = new Potion("potion", 10);
console.log(potion);
let weapon = new Weapon("sword", "phys", 3);
console.log(weapon);
