window.addEventListener("load", init);

function init() {
  const SUBMIT = document.querySelector("#kuld");
  SUBMIT.addEventListener("click", validalas);
}

function urlapAdatokKuldese(adatObj) {
  console.log(adatObj);
  //a kész, valid adatok kerülnek a listába és jelennek meg az oldalon
}

function validalas() {
  event.preventDefault() //letiltja a submit gomb alapértelmezett működését
  const adatObj = {};

  let kuldheto = true;
  let hibauzenet = "";
  /**szedjük össze az űrlap adatait,
   * és tegyük bele egy objektumba
   */
  const NevInputElem = document.querySelector("#nev");

  //itt is érdemes ellenőrizni, hogy megfelelő-e az adat:
  var filter =
    /^[A-Z][a-zA-Z]{2,}$/; /**ez a reguláris kifejezés, amivel összehasonlítom a beviteli mező értékét */
  if (filter.test(NevInputElem.value)) {
    //megnézem, hogy stimmel-e a reg kifejezéssel. true=false
    //ha megfelel a reg kifejezésnek, akkor hozzáadom az objektum megfelelő kulcsához
    adatObj.nev = NevInputElem.value;
    document.querySelector("#nevhiba").innerHTML = "";
    kuldheto = true;
  } else {
    //ha nem felel meg a kifejezésnek, akkor hibaüzenetet ír ki az oldalra.
    kuldheto = false;
    hibauzenet = "A név hiányzik, vagy a formátuma hibás!";
    document.querySelector("#nevhiba").innerHTML = hibauzenet;
  }
console.log(kuldheto)
  if (kuldheto) {
    //ha van hibás input mező, akkor nem töténik meg az elem elküldése
    urlapAdatokKuldese(adatObj);
  }
}