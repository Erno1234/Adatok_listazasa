import { OBJEKTUMLISTA } from "./adatok.js";
$(function () {
    init();
});
function init() {
    const articleElem = $("article");
    let kartyak =kartyaKeszit(OBJEKTUMLISTA) ;
    articleElem.html(kartyak);
}
function kartyaKeszit(OBJEKTUMLISTA){
    let kartya="";
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
        kartya += "<div>";
        for (let key in OBJEKTUMLISTA[index]) {
            
            if (key == "nev") {
                kartya += "<h1>"+OBJEKTUMLISTA[index][key]+ "</h1>";
            } else {
                kartya += "<div>" + OBJEKTUMLISTA[index][key] + "</div>";
          }
          
        }
        kartya += "</div>";
      }
      return (kartya);

}