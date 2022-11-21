function procesarVinculos(){
    var listaVinculos = document.links; //obtener los vinculos del documento

    for(var i = 0; i < listaVinculos.length; ++i){
        var vinculoActual = listaVinculos[i];
        if(vinculoActual.childElementCount == 0){ //se omiten los botones del menú
            vinculoActual.setAttribute("style", "background: orange;color: black;");
        }
    }
}

window.addEventListener("load", procesarVinculos, false);