import {Inventory} from "./inventory.js";

class Character {
  constructor(name) {
    this.name = name;
    this.money = 0;
    this.maxHP = 30;
    this.currentHP = 30;
    this.level = 1;
    this.exp = 0;
    this.nextLevel = 1000;
    this.inventory = new Inventory();
    this.weapon;
    this.armor;
  }

  getHeal(num) {
    this.currentHP += num;
    if (this.currentHP > this.maxHP) {
      this.currentHP = this.maxHP;
    }
  }

  getExp(num) {
    this.exp += num;
  }

  changeGear(item) {
    let type = item.constructor.name;
    if (type === "Weapon") {
      this.weapon = item;
    }else if (type === "Armor") {
      this.armor = item;
    }
  }
  sellItem(item) {
    this.money += item.value;
  }
}

export {Character};
