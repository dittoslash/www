x = 0
y = 0
w = 50
h = 25
display = new ROT.Display {width:w, height:h}
map = new ROT.Map.Digger w, h
mapd = {}
createMap = ->
    map.create (nx, ny, wall) ->
      mapd[nx+","+ny] = if wall then "wall" else "floor"
    for room in map.getRooms()
      room.getDoors (nx, ny) ->
        mapd[nx+","+ny] = "door"
drawMap = ->
  $(".canvas").html display.getContainer()
  for l in Object.keys(mapd)
    t = mapd[l]
    loc = l.split ","
    nx = loc[0]
    ny = loc[1]
    displayr
    if t is "door"
      display.draw nx, ny, "~", "red"
    else if t is "wall"
      display.draw nx, ny, "#", "grey"
    else if t is "floor"
      display.draw nx, ny, ".", "white"
    else
      display.draw nx, ny, "!", "red", "red"
  display.draw x, y, "@", "white"

passable = (nx, ny) ->
  if mapd[nx+","+ny] is "wall" then false else true

$(document).ready ->
  createMap()
  for nx in [0..w-1]
    for ny in [0..h-1]
      if passable nx, ny
        x = nx
        y = ny
        break
  drawMap()
