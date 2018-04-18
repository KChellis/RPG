export class Character {
  constructor(name) {
    this.name = name;
    this.maxHP = 30;
    this.currentHP = 30;
    this.level = 1;
    this.exp = 0;
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
}
let character = new Character("Bob");
console.log(character);
