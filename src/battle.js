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
}

export {Battle};
