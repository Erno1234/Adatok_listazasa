import { OBJEKTUMLISTA } from "./adatok.js";
$(function () {
  init();
});
function init() {
  const articleElem = $("article");
  let kartyak = kartyaKeszit(OBJEKTUMLISTA);
  articleElem.html(kartyak);
  
  const gombELEM = $(".megjelenit");
  gombELEM.on("click", function () {
    let index = $(event.target).attr("id")
    Modal(OBJEKTUMLISTA, index );
  });
}

function kartyaKeszit(OBJEKTUMLISTA) {
  let kartya = "";
  kartya += "<div class='row'>";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    kartya += "<div class='card col-sm-6 col-md-4 col-lg-3'>";
    kartya += "<div class='card-body'>";
    for (let key in OBJEKTUMLISTA[index]) {
      if (key == "nev") {
        kartya += `<h1 class='text-bg-dark card-text'> ${OBJEKTUMLISTA[index][key]}</h1>`;
      } else if (key == "torles") {
      } else {
        kartya += `<p class='card-text'> ${OBJEKTUMLISTA[index][key]}</p>`;
      }
    }
    kartya += `<button type='button' id=${index} class='btn btn-primary megjelenit' data-bs-toggle='modal' data-bs-target='#myModal'>Mutat</button>`;
    kartya += "</div>";
    kartya += "</div>";
  }
  kartya += "</div>";
  kartya+=`
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
  
 
        <div class="modal-header">
          <h4 class="modal-title">Modal Heading</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
 
        <div class="modal-body">
        </div>
  
      
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
  
      </div>
    </div>
  </div>`
  return kartya;
}

function Modal(OBJEKTUMLISTA, index) {
  console.log(index);
  console.log(OBJEKTUMLISTA[index].nev);

  let modalTitleElem = $(".modal-title");
  modalTitleElem.html(OBJEKTUMLISTA[index].nev)
  let modalBodyElem = $(".modal-body");
  modalBodyElem.html(` <p>${OBJEKTUMLISTA[index].fajta}</p>
  <p>${OBJEKTUMLISTA[index].kor}</p>`)
 /*  `

        <h4 class="modal-title">${OBJEKTUMLISTA[index].nev}</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
       
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Balra</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Jobbra</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Bezár</button> 
      </div>

    </div>
  </div>
</div>`; */
    
  const balGomb = $("#bal");
  balGomb.on("click", function () {
    index--;
    console.log(index);
  });
  const jobbGomb = $("#jobb");
  jobbGomb.on("click", function () {
    index++;

  });
}
