var f_swords_sidebar, shield, update, weapon;

weapon = w_none;

shield = s_none;

f_swords_sidebar = function() {
  var s;
  s = weapon["display"] + "\n" + shield["display"];
  return $(".swords-col").html(s);
};

update = function() {
  $(".wep").html(weapon["weptype"]);
  return f_swords_sidebar();
};

$(document).ready(function() {
  return update();
});
