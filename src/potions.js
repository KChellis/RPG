export class Potion{
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}
let potion = new Potion("potion", 10);
console.log(potion);
