import {Skill} from "./../src/skill.js";

describe ("skill", function() {

  let skill = new Skill("heal")
  it ("should assign values to new skill based on name", function(){
    skill.addValues();
    expect(skill.power).toEqual(10);
  });
});
