import { OBJEKTUMLISTA } from "./adatok.js";
$(function () {
  init();
});
function init() {
  const articleElem = $("article");
  let kartyak = kartyaKeszit(OBJEKTUMLISTA);
  articleElem.html(kartyak);
  
  let gombELEM = $("button");
  gombELEM.on("click", function () {
    let kulcs = $(event.target).attr("id")
    Modal(OBJEKTUMLISTA, kulcs );
  });
}

function kartyaKeszit(OBJEKTUMLISTA) {
  let kartya = "";
  kartya += "<div class='row'>";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    kartya += "<div class='card' style='width:400px'>";
    kartya += "<div class='card-body'>";
    for (let key in OBJEKTUMLISTA[index]) {
      if (key == "nev") {
        kartya += `<h1 class='text-bg-dark' class='card-text'> ${OBJEKTUMLISTA[index][key]}</h1>`;
      } else if (key == "torles") {
      } else {
        kartya += `<p class='col-sm-4' class='card-text'> ${OBJEKTUMLISTA[index][key]}</p>`;
      }
    }
    kartya += `<button type='button' id=${index} class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#myModal'>Mutat</button>`;
    kartya += "</div>";
    kartya += "</div>";
  }
  kartya += "</div>";
  return kartya;
}

function Modal(OBJEKTUMLISTA, index) {
  let modalElem = `
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
           <h4 class="modal-title">${OBJEKTUMLISTA[index].nev}</h4>
          </div>
          <div class="modal-body">
            <p>Kor: ${OBJEKTUMLISTA[index].kor}</p>
            <p>Fajta: ${OBJEKTUMLISTA[index].fajta}</p> 
          </div>
          <div class="modal-footer">
            <button type="button" id="bal" class="btn btn-primary">Balra</button>
            <button type="button"  id="jobb" class="btn btn-primary">Jobbra</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Bezár</button>
          </div>
        </div>
      </div>
    </div>`;
  $("body").append(modalElem);
}
