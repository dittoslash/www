data = #connections and startingstation are by ID name, not visible name
  startingstation: "trainyard"
  stations:
    central:
      name: "City Centre Station"
      train: true
      subway: true
      connections: ["starford_station", "starford_subway", "yard_central_tunnel"]
    starford_station:
      name: "Starford Station"
      train: true
      subway: false
      connections: ["central", "yard_central", "starford_subway_exchange"]
    starford_subway:
      name: "Starford Subway"
      train: false
      subway: true
      connections: ["yard_subway_junction", "starford_subway_exchange", "central"]
    starford_subway_exchange:
      name: "Starford Subway Exchange"
      train: true
      subway: true
      connections: ["starford_station", "starford_subway"]
    trainyard:
      name: "Trainyard"
      train: true
      subway: false
      connections: ["yard_central"]
    yard_central:
      name: "Yard Central"
      train: true
      subway: true
      connections: ["yard_subway_junction", "trainyard", "subyard", "starford_station"]
    yard_central_tunnel:
      name: "Yard to Central Subway"
      train: false
      subway: true
      connections: ["central", "yard_subway_junction"]
    yard_subway_junction:
      name: "Yard Subway Junction"
      train: false
      subway: true
      connections: ["yard_central", "starford_subway", "yard_central_tunnel"]
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
  "<button onClick=travel('#{x}')>#{t}</button>"

update = ->
  $("#locationdisplay").html if cs()["subway"] and not cs()["train"] then "#{cs()["name"]} [Subway]" else if cs()["train"] and not cs()["subway"] then "#{cs()["name"]} [Train]" else "#{cs()["name"]} [Subway/Train]"

  $("#travel").html ""
  for i in data["stations"][csn]["connections"]
    r = data["stations"][i]
    $("#travel").append "<div class='entry'>[Subway] #{travelbutton(i, r["name"])} </div>" if r["subway"] and cs()["subway"]
    $("#travel").append "<div class='entry'>[Train] #{travelbutton(i, r["name"])} </div>" if r["train"] and cs()["train"]

$(document).ready(->
  update()
)
