class Battle {
  constructor(hero, enemy) {
    this.hero = hero;
    this.enemy = enemy;
    this.turn;
  }

  setTurn() {
    if(this.hero.agility > this.enemy.agility) {
      this.turn = this.hero;
    }else {
      this.turn = this.enemy;
    }
  }

  dealDamage(type) {
    let attack;
    if(type === "power") {
      attack = this.turn.power + this.turn.weapon.power;
    }else if(type === "magic") {
      attack = this.turn.power + this.turn.weapon.power;
    }
    this.turn.weapon.durability -= Math.floor(attack/10);
    if(this.turn === this.hero) {
      this.turn = this.enemy;
    }else {
      this.turn = this.hero;
    }
    return [attack, type];
  }

  defend(attack) {
    let hit;
    if (attack[1] === "power" && this.turn.armor.type === "power") {
      hit = attack[0] - this.turn.defenseP - this.turn.armor.power;
    }else if (attack[1] === "power") {
      hit = attack[0] - this.turn.defenseP;
    }else if (attack[1] === "magic" && this.turn.armor.type === "magic") {
      hit = attack[0] - this.turn.defenseM - this.turn.armor.power;
    }else if (attack[1] === "magic") {
      hit = attack[0] - this.turn.defenseM
    }
    if (hit <= 0) {
      hit = 1;
    }
    this.turn.weapon.durability -= Math.floor(attack[0]/10);
    this.turn.currentHP -= hit;
    if (this.turn.currentHP > 0) {
      return true;
    } else {
      return false;
    }
  }

}

export {Battle};
