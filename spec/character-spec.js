import {Character} from "./../src/character.js";

describe ("Character", function(){

  let character = new Character("Bob");

  it ("Should create a base character", function() {
    expect(character.name).toEqual("Bob");
  });
  it ("should remove health if character takes damage", function() {
    character.takeDamage(5)
    expect(character.currentHP).toEqual(25);
  });
});
