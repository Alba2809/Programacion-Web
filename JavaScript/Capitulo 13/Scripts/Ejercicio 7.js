var imagen;
function inicio(){
    imagen = document.getElementById("avion");
    imagen.addEventListener("mousedown", moverAvion, false);
    //evitar el error de arrastrar imagen
    document.addEventListener('dragstart', function(evt) {
        if (evt.target.tagName == 'IMG') {
          evt.preventDefault();
        }
      });
}

function moverAvion(e){
    imagen.style.left = e.clientX - 80 + "px";
    imagen.style.top = e.clientY - 80 + "px";
    imagen.addEventListener("mousemove", moverAvion, false);
    imagen.addEventListener("click", detener, false);
}

function detener(){
    imagen.removeEventListener("mousemove", moverAvion, false);
}

window.addEventListener("load", inicio, false);