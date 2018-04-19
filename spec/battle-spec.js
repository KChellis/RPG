import {Battle} from "./../src/battle.js";
import {Job} from "./../src/job.js";
import {Enemy} from "./../src/enemy.js";
import {Armor} from "./../src/armor.js";
import {Weapon} from "./../src/weapon.js";

describe ("Battle", function() {
  let hero = new Job ("warrior");
  hero.weapon = new Weapon("sword", "power", 3);
  hero.armor = new Armor("leather","magic", 4);
  let enemy = new Enemy ("goblin");
  let battle = new Battle (hero, enemy);

  it ("should determine turn order based on agility", function() {
    battle.setTurn();
    expect(battle.turn).toEqual(enemy);
  });
});
