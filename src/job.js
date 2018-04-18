import {Character} from "./character.js";

class Job extends Character{
  constructor(job) {
    super();
    this.job = job;
    this.power = 10;
    this.magic = 3;
    this.defenseP = 7;
    this.defenseM = 5;
    this.agility = 3;
  }
  setJob() {
    let job = this.job;
    if (job === "warrior") {
      this.power = 10;
      this.magic = 3;
      this.defenseP = 7;
      this.defenseM = 5;
      this.agility = 3;
    }else if (job === "cleric") {
      this.power = 3;
      this.magic = 7;
      this.defenseP = 5;
      this.defenseM = 10;
      this.agility = 3;
    }else if (job === "thief") {
      this.power = 5;
      this.magic = 3;
      this.defenseP = 5;
      this.defenseM = 5;
      this.agility = 10;
    }else if (job === "wizard") {
      this.power = 3;
      this.magic = 10;
      this.defenseP = 3;
      this.defenseM = 5;
      this.agility = 5;
    }
  }
  dealDamage(type) {
    if(type === "power") {
      let attack = this.power + this.weapon.power;
      return [attack, type];
    }else if(type === "magic") {
      let attack = this.power + this.weapon.power;
      return [attack, type];
    }
  }

  defend(attack) {
    let hit;
    if (attack[1] === "power" && this.armor.type === "power") {
      hit = attack[0] - this.defenseP - this.armor.power;
    }else if (attack[1] === "power") {
      hit = attack[0] - this.defenseP;
    }else if (attack[1] === "magic" && this.armor.type === "magic") {
      hit = attack[0] - this.defenseM - this.armor.power;
    }else if (attack[1] === "magic") {
      hit = attack[0] - this.defenseM
    }
    if (hit < 0) {
      hit = 0;
    }
    return hit;
  }
}

export {Job};
