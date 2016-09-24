equipdata =
  special:
    noWeapon:
      damage: "0"
      display: "You wield no weapon."
      weptype: "swords" #.wep content
      durability: 0 #goes down by (0.5 * damage dealt) on attack
    noShield:
      block: "2" #bearer takes (damage dealt by attacker (after deflect) - this result) damage
      deflect: "0" #attacker takes (this result * .01 * damage dealt to bearer) damage, non-deflected damage goes to block
      display: "You wield no shield."
      durability: 0 #goes down by deflected damage (result of block roll)
  swords:
    stick:
      damage: "1d6"
      display: "You wield a stick."
      weptype: "stick"
      durability: 25
  shields:
    plank:
      block: "1d3"
      deflect: "0"
      display: "You wield a wooden plank."
      durability: 15
#shortcuts
d_swords = equipdata["swords"]
d_shields = equipdata["shields"]
d_special = equipdata["special"]
w_stick = d_swords["stick"]
w_none = d_special["noWeapon"]
s_plank = d_shields["plank"]
s_none = d_special["noShield"]
