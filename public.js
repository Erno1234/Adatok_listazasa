import { OBJEKTUMLISTA } from "./adatok.js";
$(function () {
  init();
});
function init() {
  const articleElem = $("article");
  let kartyak = kartyaKeszit(OBJEKTUMLISTA);
  articleElem.html(kartyak);
}
function kartyaKeszit(OBJEKTUMLISTA) {
  let kartya = "";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    kartya += "<div class='card' style='width:400px'>";
    kartya += "<div class='card-body'>";
    for (let key in OBJEKTUMLISTA[index]) {
      kartya += `<p class='card-text'> ${OBJEKTUMLISTA[index][key]}</p>`;
    }
    kartya += "<button class='btn btn-primary'>See Profile</>";
    kartya += "</div>";
    kartya += "</div>";
  }
  return kartya;
}
