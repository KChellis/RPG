class Skill {
  constructor(name) {
    this.name = name;
    this.power;
    this.type;
    this.duration;
    this.turncount = 0;
    this.active = true;
  }

  addValues() {
    let name = this.name;
    if (name === "heal") {
      this.power = 10;
      this.type = "heal";
      this.duration = "once";
    }else if (name === "fire ball") {
      this.power = 5;
      this.type = "attackM";
      this.duration = "once";
    }else if (name === "pickpocket") {
      this.power = 10;
      this.type = "steal";
      this.duration = "once";
    }else if (name === "charge") {
      this.power = 5;
      this.type = "attackP";
      this.duration = "once";
    }else if (name === "counter attack") {
      this.power = 5;
      this.type = "counter";
      this.duration = 3;
    }else if (name === "cleave") {
      this.power = 10;
      this.type = "attackP";
      this.duration = "once";
    }else if (name === "backstab") {
      this.power = 10;
      this.type = "attackP";
      this.duration = "once";
    }else if (name === "blizzard") {
      this.power = 10;
      this.type = "attackM";
      this.duration = "once";
    }else if (name === "lightning") {
      this.power = 15;
      this.type = "attackM";
      this.duration = "once";
    }else if (name === "double slash") {
      this.power = 15;
      this.type = "attackP";
      this.duration = "once";
    }else if (name === "heal plus") {
      this.power = 30;
      this.type = "attackP";
      this.duration = "once";
    }else if (name === "stoneskin") {
      this.power = 10;
      this.type = "buff";
      this.duration = 3;
    }
  }
}
export {Skill};
