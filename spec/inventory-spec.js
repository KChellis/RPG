import {Inventory} from "./../src/inventory.js";
import {Weapon} from "./../src/weapon.js"

describe("Inventory", function() {
  let inventory = new Inventory();
  let sword = new Weapon ("sword", "phys", 3);
  it ("should add weapons/armor/potions to respective inventories", function() {
    inventory.addItem(sword);
    expect(inventory.weapons).toEqual([sword]);
  });
  it ("should not add items if inventory is full", function() {
    inventory.weapons = ["sword", "wand", "scepter"];
    let outcome = inventory.addItem(sword);
    expect(outcome).toEqual(false);
  });
  it ("should remove dropped items from inventory", function() {
    inventory.weapons = ["wand", sword, "scepter"];
    inventory.dropItem(sword);
    expect(inventory.weapons).toEqual(["wand", "scepter"]);
  });
});
