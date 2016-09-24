weapon = w_none
shield = s_none

f_swords_sidebar = ->
  s = """#{weapon["display"]}
  #{shield["display"]}"""
  $(".swords-col").html s


update = ->
  $(".wep").html weapon["weptype"]
  f_swords_sidebar()



$(document).ready ->
  update()
