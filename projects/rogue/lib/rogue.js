var createMap, display, drawMap, h, map, mapd, passable, w, x, y;

x = 0;

y = 0;

w = 50;

h = 25;

display = new ROT.Display({
  width: w,
  height: h
});

map = new ROT.Map.Digger(w, h);

mapd = {};

createMap = function() {
  var i, len, ref, results, room;
  map.create(function(nx, ny, wall) {
    return mapd[nx + "," + ny] = wall ? "wall" : "floor";
  });
  ref = map.getRooms();
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    room = ref[i];
    results.push(room.getDoors(function(nx, ny) {
      return mapd[nx + "," + ny] = "door";
    }));
  }
  return results;
};

drawMap = function() {
  var i, l, len, loc, nx, ny, ref, t;
  $(".canvas").html(display.getContainer());
  ref = Object.keys(mapd);
  for (i = 0, len = ref.length; i < len; i++) {
    l = ref[i];
    t = mapd[l];
    loc = l.split(",");
    nx = loc[0];
    ny = loc[1];
    displayr;
    if (t === "door") {
      display.draw(nx, ny, "~", "red");
    } else if (t === "wall") {
      display.draw(nx, ny, "#", "grey");
    } else if (t === "floor") {
      display.draw(nx, ny, ".", "white");
    } else {
      display.draw(nx, ny, "!", "red", "red");
    }
  }
  return display.draw(x, y, "@", "white");
};

passable = function(nx, ny) {
  if (mapd[nx + "," + ny] === "wall") {
    return false;
  } else {
    return true;
  }
};

$(document).ready(function() {
  var i, j, nx, ny, ref, ref1;
  createMap();
  for (nx = i = 0, ref = w - 1; 0 <= ref ? i <= ref : i >= ref; nx = 0 <= ref ? ++i : --i) {
    for (ny = j = 0, ref1 = h - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; ny = 0 <= ref1 ? ++j : --j) {
      if (passable(nx, ny)) {
        x = nx;
        y = ny;
        break;
      }
    }
  }
  return drawMap();
});
