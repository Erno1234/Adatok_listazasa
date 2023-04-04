import { OBJEKTUMLISTA } from "./adatok.js";
import { rendezesObjektum } from "./rendezes.js";
$(function () {
  rendezes();
  torles();
});
function rendezes() {
  const articleElem = $("article");
  let tablazat = tablazatKeszit(OBJEKTUMLISTA);
  articleElem.html(tablazat);
  const thElem = $("th");
  thElem.on("click", function () {
    let kulcs = $(event.target).attr("id");
    rendezesObjektum(OBJEKTUMLISTA, kulcs);
    console.log(OBJEKTUMLISTA);
    rendezes();
  });
}
function torles(){
  const torlesElem = $("td");
  torlesElem.on("click", function(){
    let torles = $(event.target).attr(".torles");
  })
}

function tablazatKeszit(OBJEKTUMLISTA) {
  let tablazat = "<table class='table table-striped'>";
  tablazat += "<thead class='table-dark'>";

  let attributes = Object.keys(OBJEKTUMLISTA[0]);
  let fejlec = "<tr>";
  for (let i = 0; i < attributes.length; i++) {
    fejlec += `<th id=${attributes[i]}> ${attributes[i].toUpperCase()}: </th>`;
  }
  fejlec += "</tr>";

  tablazat += fejlec;
  tablazat += "</thead>";

  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    tablazat += "<tr>";
    for (let i = 0; i < attributes.length; i++) {
      if (OBJEKTUMLISTA[index][attributes[i]] == OBJEKTUMLISTA[index].torles) {
        tablazat += "<td class='torles'>" + OBJEKTUMLISTA[index][attributes[i]] + "</td>";
      } else {
        tablazat += "<td>" + OBJEKTUMLISTA[index][attributes[i]] + "</td>";
      }
    }
    tablazat += "</tr>";
  }
  return (tablazat += "</table>");
}
