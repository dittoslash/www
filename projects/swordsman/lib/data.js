var d_shields, d_special, d_swords, equipdata, s_none, s_plank, w_none, w_stick;

equipdata = {
  special: {
    noWeapon: {
      damage: "0",
      display: "You wield no weapon.",
      weptype: "swords",
      durability: 0
    },
    noShield: {
      block: "2",
      deflect: "0",
      display: "You wield no shield.",
      durability: 0
    }
  },
  swords: {
    stick: {
      damage: "1d6",
      display: "You wield a stick.",
      weptype: "stick",
      durability: 25
    }
  },
  shields: {
    plank: {
      block: "1d3",
      deflect: "0",
      display: "You wield a wooden plank.",
      durability: 15
    }
  }
};

d_swords = equipdata["swords"];

d_shields = equipdata["shields"];

d_special = equipdata["special"];

w_stick = d_swords["stick"];

w_none = d_special["noWeapon"];

s_plank = d_shields["plank"];

s_none = d_special["noShield"];
