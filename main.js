import { OBJEKTUMLISTA } from "./adatok.js";
import { rendezesObjektum } from "./rendezes.js";
let szamlalo = 0;
$(function () {
  init();

  $("form").on("submit", function (event) {
    event.preventDefault();
    let nev = $("#nev").val();
    let faj = $("#faj").val();
    let kor = $("#kor").val();

    let ujAdat = {
      nev: nev,
      fajta: faj,
      kor: kor,
      torles: "X",
    };

    OBJEKTUMLISTA.push(ujAdat);
    $("#nev").val("");
    $("#faj").val("");
    $("#kor").val("");
    init();
  });
});

function init() {
  const articleElem = $("article");
  let tablazat = tablazatKeszit(OBJEKTUMLISTA);
  articleElem.html(tablazat);
  const thElem = $("th");
  if (thElem.on("click")) {
    szamlalo++;
  }
  thElem.on("click", function () {
    console.log(szamlalo);
    let kulcs = $(event.target).attr("id");
    rendezesObjektum(OBJEKTUMLISTA, kulcs, szamlalo);
    console.log(OBJEKTUMLISTA);
    init();
    if (szamlalo > 2) {
      szamlalo = 1;
    }
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

$("#nevsz").on("keyup", function () {
  keres();
});

$("#fajsz").on("keyup", function () {
  keres();
});

$("#korsz").on("keyup", function () {
  keres();
});

function keres() {
  let nevInput = $("#nevsz").val();
  let fajInput = $("#fajsz").val();
  let korInput = $("#korsz").val();

  let KERESLISTA = [];
  let kerestabla;
  const articleElem = $("article");

  for (let i = 0; i < OBJEKTUMLISTA.length; i++) {
    if (
      OBJEKTUMLISTA[i].nev.toLowerCase().includes(nevInput.toLowerCase()) &&
      OBJEKTUMLISTA[i].fajta.toLowerCase().includes(fajInput.toLowerCase()) &&
      OBJEKTUMLISTA[i].kor.toString().includes(korInput)
    ) {
      KERESLISTA.push(OBJEKTUMLISTA[i]);
    }
  }
  kerestabla = tablazatKeszit(KERESLISTA);
  articleElem.html(kerestabla);
}
