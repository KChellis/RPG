import {Armor} from "./../src/armor.js";
import {Weapon} from "./../src/weapon.js";

class Enemy{
  constructor(name) {
    this.name = name;
    this.health;
    this.power;
    this.magic;
    this.defenseP;
    this.defenseM;
    this.agility;
    this.expValue;
    this.weapon;
    this.armor;
    this.money;
  }

  addValues() {
    if(this.name === "Goblin") {
      this.health = 20;
      this.power = 5;
      this.magic = 3;
      this.defenseP = 7;
      this.defenseM = 6;
      this.agility = 7;
      this.expValue = 100;
      this.weapon = new Weapon("sword", "power", 3);
      this.armor = new Armor("leather","magic", 4);
      this.money = 50;
    }
  }
}

export {Enemy};
