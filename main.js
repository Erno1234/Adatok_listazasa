import { OBJEKTUMLISTA } from "./adatok.js";
import { rendezesObjektum } from "./rendezes.js";
$(function () {
  init();
});
function init() {
  const articleElem = $("article");
  let tablazat = tablazatKeszit(OBJEKTUMLISTA);
  articleElem.html(tablazat);
  const thElem = $("th");
  thElem.on("click", function () {
    let kulcs = $(event.target).attr("id");
    rendezesObjektum(OBJEKTUMLISTA, kulcs);
    console.log(OBJEKTUMLISTA);
    init();
  });
  torles();
}
function torles() {
  const torlesElem = $(".torles");
  console.log(torlesElem);
  torlesElem.on("click", function () {
    let torlesID = $(event.target).attr("id");
    //kitörlöd az akt elemet az objektumlistából
    console.log(torlesID);
    OBJEKTUMLISTA.splice(torlesID, 1);
    console.log(OBJEKTUMLISTA);
    init();
  });
}

function tablazatKeszit(OBJEKTUMLISTA) {
  let tablazat = "<table class='table table-striped'>";
  tablazat += "<thead class='table-dark'>";

  let fejlec = "<tr>";
  for (let key in OBJEKTUMLISTA[0]) {
    fejlec += `<th id='${key}'>${key} </th>`;
  }
  fejlec += "</tr>";

  tablazat += fejlec;
  tablazat += "</thead>";

  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    tablazat += "<tr>";
    for (let key in OBJEKTUMLISTA[index]) {
      if (key == "torles") {
        tablazat += `<td class='torles' id='${index}'>  ${OBJEKTUMLISTA[index][key]} </td>`;
      } else {
        tablazat += "<td>" + OBJEKTUMLISTA[index][key] + "</td>";
      }
    }
    tablazat += "</tr>";
  }
  return (tablazat += "</table>");
}
