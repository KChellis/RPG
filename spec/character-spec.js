import {Character} from "./../src/character.js";
import {Weapon} from "./../src/weapon.js";


describe ("Character", function(){

  let character = new Character("Bob");
  let sword = new Weapon ("sword", "phys", 3);
  character.inventory = [sword];
  it ("Should create a base character", function() {
    expect(character.name).toEqual("Bob");
  });
  it ("should add health if character takes potion", function() {
    character.getHeal(10);
    expect(character.currentHP).toEqual(30);
  });
  it ("should add experience points after winning battle", function() {
    character.getExp(100);
    expect(character.exp).toEqual(100);
  });
  it ("should change active weapon/armor", function () {
    character.changeGear(sword);
    expect(character.weapon).toEqual(sword);
  });
  it (" add money to character", function() {
    character.sellItem(sword);
    expect(character.money).toEqual(50);
  });
});
