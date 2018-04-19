class Enemy{
  constructor(name, health, power, magic, defenseP, defenseM, agility) {
    this.name = name;
    this.health = health;
    this.power = power;
    this.magic = magic;
    this.defenseP = defenseP;
    this.defenseM = defenseM;
    this.agility = agility;
    this.expValue;
    this.weapon;
    this.armor;
    this.money;
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

export {Enemy};
