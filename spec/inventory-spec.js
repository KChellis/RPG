import {Inventory} from "./../src/inventory.js";
import {Weapon} from "./../src/weapon.js"
import {Job} from "./../src/job.js";

describe("Inventory", function() {
  let warrior = new Job ("warrior");
  warrior.setJob();
  warrior.inventory = new Inventory();
  let sword = new Weapon ("sword", "phys", 3);
  it ("should add weapons/armor/potions to respective inventories", function() {
    warrior.inventory.addItem(sword);
    expect(warrior.inventory.weapons).toEqual([sword]);
  });
  it ("should not add items if inventory is full", function() {
    warrior.inventory.weapons = ["sword", "wand", "scepter"];
    let outcome = warrior.inventory.addItem(sword);
    expect(outcome).toEqual(false);
  });
  it ("should remove dropped/sold items from inventory", function() {
    warrior.inventory.weapons = ["wand", sword, "scepter"];
    warrior.inventory.removeItem(sword);
    expect(warrior.inventory.weapons).toEqual(["wand", "scepter"]);
  });
});
