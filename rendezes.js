function rendezesSzovegSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    if(a[kulcs] > b[kulcs]){
        return +1;
    }else{
        return -1;
    }
  });
}
function rendezesSzovegSzerintCsokkeno(lista, kulcs) {
  lista.sort(function (a, b) {
    if(b[kulcs] > a[kulcs]){
        return +1;
    }else{
        return -1;
    }
  });
}
function rendezesKorSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    return a[kulcs] - b[kulcs];
  });
}
function rendezesKorSzerintCsokkeno(lista, kulcs) {
  lista.sort(function (a, b) {
    return b[kulcs] - a[kulcs];
  });
}
export function rendezesObjektum(lista, kulcs, szamlalo) {
  if(szamlalo == 1){
    if (typeof kulcs == "number") {
      rendezesKorSzerint(lista, kulcs);
    } else {
      rendezesSzovegSzerint(lista, kulcs);
  }
  }else if(szamlalo == 2){
    if (typeof kulcs == "number") {
      rendezesKorSzerintCsokkeno(lista, kulcs);
    } else {
      rendezesSzovegSzerintCsokkeno(lista, kulcs);
  }
  }
}
