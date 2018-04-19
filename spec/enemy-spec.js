import {Enemy} from "./../src/enemy.js";
import {Weapon} from "./../src/weapon.js";

describe ("Enemy", function() {

  let enemy = new Enemy ("Goblin");

  it ("should add enemy stats based on name", function() {
    enemy.addValue();
    expect(enemy.power).toEqual(5);
  });
});
