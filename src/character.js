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
}
let character = new Character("Bob");
console.log(character);
