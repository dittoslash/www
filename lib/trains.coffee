data = #connections and startingstation are by ID name, not visible name
  startingstation: "central"
  stations:
    central:
      name: "City Centre Station"
      train: true
      subway: true
      connections: ["starford_station"]
    starford_station:
      name: "Starford Station"
      train: true
      subway: false
      connnections: ["central", "yard_central"]
    trainyard:
      name: "Trainyard"
      train: true
      subway: false
      connections: ["yard_central"]
    yard_central:
      name: "Yard Central"
      train: true
      subway: true
      connections: ["trainyard","subyard", "starford_station"]
    subyard:
      name: "Subway Yard"
      train: false
      subway: true
      connections: ["yard_central"]

csn = data["startingstation"]
cs = ->
  data["stations"][csn]
travel = (x) ->
  csn = x
  update()
travelbutton = (x, t) ->
  "<button onClick=travel(#{x})>#{t}</button>"

update = ->
  $("#locationdisplay").html cs["name"]
  $("#travel").html ""
  for i in data["stations"][csn]["connections"]
    r = data["stations"][i]
    $("#travel").append "<div class='entry'>[Subway] #{travelbutton(i, r["name"])} </div>" if r["subway"] and cs["subway"]
    $("#travel").append "<div class='entry'>[Train] #{travelbutton(i, r["name"])} </div>" if r["train"] and cs["train"]

$(document).ready(->
  update()
)
