import {Character} from "./../src/character.js";

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
});
