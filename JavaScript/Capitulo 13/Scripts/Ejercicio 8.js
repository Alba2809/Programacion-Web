var imagenes, imagenActual;
function inicio(){
    imagenes = document.getElementsByName("avion");

    imagenes.forEach(imagen =>{
        imagen.addEventListener("mousedown", 
            function(e){
                imagenActual = this;
                moverAvion(e);
            }, false);
    });

    //evitar el error de arrastrar imagen
    document.addEventListener('dragstart', function(evt) {
        if (evt.target.tagName == 'IMG') {
          evt.preventDefault();
        }
      });
}


function moverAvion(e){
    imagenActual.style.left = e.clientX - 80 + "px";
    imagenActual.style.top = e.clientY - 80 + "px";
    imagenActual.addEventListener("mousemove", moverAvion, false);
    imagenActual.addEventListener("click", detener, false);
}

function detener(){
    imagenActual.removeEventListener("mousemove", moverAvion, false);
}

window.addEventListener("load", inicio, false);