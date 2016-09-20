var cs, csn, data, travel, travelbutton, update;

data = {
  startingstation: "central",
  stations: {
    central: {
      name: "City Centre Station",
      train: true,
      subway: true,
      connections: ["starford_station"]
    },
    starford_station: {
      name: "Starford Station",
      train: true,
      subway: false,
      connnections: ["central", "yard_central"]
    },
    trainyard: {
      name: "Trainyard",
      train: true,
      subway: false,
      connections: ["yard_central"]
    },
    yard_central: {
      name: "Yard Central",
      train: true,
      subway: true,
      connections: ["trainyard", "subyard", "starford_station"]
    },
    subyard: {
      name: "Subway Yard",
      train: false,
      subway: true,
      connections: ["yard_central"]
    }
  }
};

csn = data["startingstation"];

cs = function() {
  return data["stations"][csn];
};

travel = function(x) {
  csn = x;
  return update();
};

travelbutton = function(x, t) {
  return "<button onClick=travel(" + x + ")>" + t + "</button>";
};

update = function() {
  var i, j, len, r, ref, results;
  $("#locationdisplay").html(cs["name"]);
  $("#travel").html("");
  ref = data["stations"][csn]["connections"];
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    r = data["stations"][i];
    if (r["subway"] && cs["subway"]) {
      $("#travel").append("<div class='entry'>[Subway] " + (travelbutton(i, r["name"])) + " </div>");
    }
    if (r["train"] && cs["train"]) {
      results.push($("#travel").append("<div class='entry'>[Train] " + (travelbutton(i, r["name"])) + " </div>"));
    } else {
      results.push(void 0);
    }
  }
  return results;
};

$(document).ready(function() {
  return update();
});
