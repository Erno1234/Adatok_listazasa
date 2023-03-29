import{OBJEKTUMLISTA} from "./adatok.js";
import {rendezesObjektum} from "./rendezes.js";
$(function(){
   init();

    
});
function init(){
  const articleElem = $("article");
  let tablazat = tablazatKeszit(OBJEKTUMLISTA);
  articleElem.html(tablazat);
  const thElem =  $("th");
  thElem.on("click",function(){
    let kulcs = $(event.target).attr("id")
    rendezesObjektum(OBJEKTUMLISTA, kulcs);
    console.log(OBJEKTUMLISTA);
    init();
  })
}
function tablazatKeszit(OBJEKTUMLISTA){
    let tablazat = "<table class='table table-striped'>";
    tablazat += " <thead class='table-dark'>";
    tablazat += "<tr> <th id='nev'> Név: </th> <th id='kor'>Kor:</th><th id='fajta'> Fajta: </th></tr>"
    tablazat += "</thead>" 
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
      tablazat +="<tr>";
      tablazat += "<td>" + OBJEKTUMLISTA[index].nev + "</td>" + "<td>" + OBJEKTUMLISTA[index].kor +"</td>" + "<td>" + OBJEKTUMLISTA[index].fajta +"</td>";
      tablazat +="</tr>";
    }
    return tablazat += "</table>";
    
  }