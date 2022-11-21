function inicio(){
    var caracter = /&/g; //expresion con busqueda global
    document.getElementById("comentarios").addEventListener("blur",
        function(){
            this.value = this.value.replace(caracter, " y ");
        },false);
}

window.addEventListener("load", inicio, false);