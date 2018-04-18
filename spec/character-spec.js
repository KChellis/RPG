import {Character} from "./../src/character.js";
import {Inventory} from "./../src/inventory.js";
import {Weapon} from "./../src/weapon.js"
import {Armor} from "./../src/armor.js"
import {Potion} from "./../src/potions.js"

describe ("Character", function(){

  let character = new Character("Bob");

  it ("Should create a base character", function() {
    expect(character.name).toEqual("Bob");
  });
  it ("should remove health if character takes damage", function() {
    character.takeDamage(5);
    expect(character.currentHP).toEqual(25);
  });
  it ("should add health if character takes potion", function() {
    character.getHeal(10);
    expect(character.currentHP).toEqual(30);
  });
  it ("should add experience points after winning battle", function() {
    character.getExp(100);
    expect(character.exp).toEqual(100);
  });
  it ("should add level when needed exp is reached", function() {
    character.exp = 1000;
    character.levelUp();
    expect(character.level).toEqual(2);
  });
  it ("should change active weapon/armor", function () {
    let sword = new Weapon ("sword", "phys", 3);
    character.changeGear(sword);
    expect(character.weapon).toEqual(sword);
  })
});
