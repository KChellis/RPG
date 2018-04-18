import {Inventory} from "./../src/inventory.js";
import {Weapon} from "./../src/weapon.js"
import {Armor} from "./../src/armor.js"
import {Potion} from "./../src/potions.js"

describe("Inventory", function() {
  let inventory = new Inventory();

  it ("should add weapons/armor/potions to respective inventories", function() {
    let sword = new Weapon ("sword", "phys", 3);
    inventory.addItem(sword);
    expect(inventory.weapons).toEqual([sword]);
  });
  it ("should not add items if inventory is full", function() {
    let sword = new Weapon ("sword", "phys", 3);
    inventory.weapons = ["sword", "wand", "scepter"];
    let outcome = inventory.addItem(sword);
    console.log(outcome);
    expect(outcome).toEqual(false);
  });
});
