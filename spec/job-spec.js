import {Job} from "./../src/job.js";
import {Armor} from "./../src/armor.js";
import {Weapon} from "./../src/weapon.js";

describe("Job", function() {
  let job = new Job("warrior");
  job.weapon = new Weapon("sword", "power", 3);
  job.armor = new Armor("leather","magic", 4);

  it("should assign values to properties based on job", function(){
    job.setJob();
    expect(job.power).toEqual(10);
  });
  it("should determine total attack power", function(){
    let attack = job.dealDamage(job.weapon.type);
    expect(attack).toEqual([13, "power"]);
  });
  it ("should determine number of hit points taken based on type and attack power", function() {
    let attack = [10, "magic"];
    let hit = job.defend(attack);
    expect(hit).toEqual(1);
  });
  it ("should give character more skills at set levels", function() {
    job.level = 4;
    job.addSkills();
    expect(job.skills).toEqual(["charge", "cleave"])
  });
});
