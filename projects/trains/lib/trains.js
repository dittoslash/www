var cs, csn, data, travel, travelbutton, update;

data = {
  startingstation: "trainyard",
  stations: {
    central: {
      name: "City Centre Station",
      train: true,
      subway: true,
      connections: ["starford_station", "starford_subway", "yard_central_tunnel"]
    },
    starford_station: {
      name: "Starford Station",
      train: true,
      subway: false,
      connections: ["central", "yard_central", "starford_subway_exchange"]
    },
    starford_subway: {
      name: "Starford Subway",
      train: false,
      subway: true,
      connections: ["yard_subway_junction", "starford_subway_exchange", "central"]
    },
    starford_subway_exchange: {
      name: "Starford Subway Exchange",
      train: true,
      subway: true,
      connections: ["starford_station", "starford_subway"]
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
      connections: ["yard_subway_junction", "trainyard", "subyard", "starford_station"]
    },
    yard_central_tunnel: {
      name: "Yard to Central Subway",
      train: false,
      subway: true,
      connections: ["central", "yard_subway_junction"]
    },
    yard_subway_junction: {
      name: "Yard Subway Junction",
      train: false,
      subway: true,
      connections: ["yard_central", "starford_subway", "yard_central_tunnel"]
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
  return "<button onClick=travel('" + x + "')>" + t + "</button>";
};

update = function() {
  var i, j, len, r, ref, results;
  $("#locationdisplay").html(cs()["subway"] && !cs()["train"] ? (cs()["name"]) + " [Subway]" : cs()["train"] && !cs()["subway"] ? (cs()["name"]) + " [Train]" : (cs()["name"]) + " [Subway/Train]");
  $("#travel").html("");
  ref = data["stations"][csn]["connections"];
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    r = data["stations"][i];
    if (r["subway"] && cs()["subway"]) {
      $("#travel").append("<div class='entry'>[Subway] " + (travelbutton(i, r["name"])) + " </div>");
    }
    if (r["train"] && cs()["train"]) {
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
