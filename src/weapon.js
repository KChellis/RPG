export class Weapon {
  constructor(name, type, power) {
    this.name = name;
    this.type = type;
    this.power = power;
  }
}
let weapon = new Weapon("sword", "phys", 3);
console.log(weapon);
