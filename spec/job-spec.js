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
  
  it ("should give character more skills at set levels", function() {
    job.level = 4;
    job.addSkills();
    expect(job.skills).toEqual(["charge", "cleave"]);
  });
  it ("should add level when needed exp is reached", function() {
    job.exp = 1000;
    job.levelUp();
    expect(job.level).toEqual(5);
  });
  it ("should add levelUp points to chosen attribute", function() {
    job.addPoints("power");
    expect(job.power).toEqual(11);
  });
});
