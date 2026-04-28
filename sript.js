function showDetails(model) {
  let descriptions = {
    Clio: "Renault Clio: voiture compacte, économique et moderne.",
    Megane: "Renault Megane: design élégant et performance.",
    Captur: "Renault Captur: SUV urbain pratique.",
    Arkana: "Renault Arkana: SUV coupé sportif.",
    Kadjar: "Renault Kadjar: confort et puissance.",
    Austral: "Renault Austral: technologie avancée.",
    Talisman: "Renault Talisman: luxe et confort."
  };

  document.getElementById("details").innerHTML =
    "<h3>" + model + "</h3><p>" + descriptions[model] + "</p>";
}
