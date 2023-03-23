import{OBJEKTUMLISTA} from "./adatok.js";
import {rendezesObjektum} from "./rendezes.js";
$(function(){
    const articleElem = $("article");
    tablazatKeszit(OBJEKTUMLISTA, articleElem);
});
function tablazatKeszit(OBJEKTUMLISTA, articleElem){
    let tablazat = "<table class='table table-striped'>";
    tablazat += " <thead class='table-dark'>";
    tablazat += "<tr> <th> Név: </th> <th>Kor:</th><th> Fajta: </th></tr>"
    tablazat += "</thead>" 
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
      tablazat +="<tr>";
      tablazat += "<td>" + OBJEKTUMLISTA[index].nev + "</td>" + "<td>" + OBJEKTUMLISTA[index].kor +"</td>" + "<td>" + OBJEKTUMLISTA[index].fajta +"</td>";
      tablazat +="</tr>";
    }
    tablazat += "</table>";
    articleElem.append(tablazat);
  }