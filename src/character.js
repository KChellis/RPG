import {Inventory} from "./inventory.js";
export class Character {
  constructor(name) {
    this.name = name;
    this.maxHP = 30;
    this.currentHP = 30;
    this.level = 1;
    this.exp = 0;
    this.nextLevel = 1000;
    this.inventory = new Inventory();
    this.weapon;
    this.armor;
  }
  takeDamage(num) {
    this.currentHP -= num;
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
  levelUp() {
    if(this.exp >= this.nextLevel) {
      this.level += 1;
      this.nextLevel += this.level * 1000;
    }
  }
}
let character = new Character("Bob");
console.log(character);
