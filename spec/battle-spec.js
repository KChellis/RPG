import {Battle} from "./../src/battle.js";
import {Job} from "./../src/job.js";
import {Enemy} from "./../src/enemy.js";
import {Armor} from "./../src/armor.js";
import {Weapon} from "./../src/weapon.js";

describe ("Battle", function() {
  let hero = new Job ("warrior");
  hero.weapon = new Weapon("sword", "power", 3);
  hero.armor = new Armor("leather","magic", 4);
  let enemy = new Enemy ("Goblin");
  enemy.addTraits();
  console.log(enemy);
  let battle = new Battle (hero, enemy);

  it ("should determine turn order based on agility", function() {
    battle.setTurn();
    expect(battle.turn).toEqual(enemy);
  });

  it("should determine total attack power", function(){
    let attack = battle.dealDamage(battle.turn.weapon.type);
    expect(attack).toEqual([8, "power"]);
  });

  it ("should remove health if character takes damage", function() {
    let outcome = battle.defend([14, "magic"]);
    expect(battle.turn.currentHP).toEqual(25);
    expect(outcome).toEqual(true);
  });
});
