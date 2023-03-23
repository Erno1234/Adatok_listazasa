function rendezesSzovegSzerint(lista){
    lista.sort()
}
function rendezesKorSzerint(lista){
    lista.sort(function(a, b){return a - b});
}
export function rendezesObjektum(lista,kulcs){
    if(typeof kulcs =='number'){
        rendezesKorSzerint(lista,kulcs);
    }else{
        rendezesSzovegSzerint(lista,kulcs);
    }
}