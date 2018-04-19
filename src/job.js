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
    this.skills = [];
  }

  setJob() {
    let job = this.job;
    if (job === "warrior") {
      this.power = 10;
      this.magic = 3;
      this.defenseP = 7;
      this.defenseM = 5;
      this.agility = 5;
      this.skills = ["charge"]
    }else if (job === "cleric") {
      this.power = 4;
      this.magic = 8;
      this.defenseP = 7;
      this.defenseM = 8;
      this.agility = 3;
      this.skills = ["heal"]
    }else if (job === "thief") {
      this.power = 7;
      this.magic = 3;
      this.defenseP = 5;
      this.defenseM = 5;
      this.agility = 10;
      this.skills = ["pickpocket"]
    }else if (job === "wizard") {
      this.power = 4;
      this.magic = 10;
      this.defenseP = 4;
      this.defenseM = 7;
      this.agility = 5;
      this.skills = ["fire ball"]
    }
  }

  addSkills() {
    let level = this.level;
    let job = this.job;
    let length = this.skills.length;
    if (level === 4 && length === 1) {
      if (job === "warrior") {
        this.skills.push("cleave");
      }else if (job === "cleric") {
        this.skills.push("counter attack");
      }else if (job === "thief") {
        this.skills.push("backstab");
      }else if (job === "wizard") {
        this.skills.push("blizzard");
      }
    }else if (level === 7 && length === 2) {
      if (job === "warrior") {
        this.skills.push("stoneskin");
      }else if (job === "cleric") {
        this.skills.push("heal all");
      }else if (job === "thief") {
        this.skills.push("double slash");
      }else if (job === "wizard") {
        this.skills.push("lightning");
      }
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
    if (hit <= 0) {
      hit = 1;
    }
    return hit;
  }
}

export {Job};
