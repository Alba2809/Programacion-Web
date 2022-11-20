let primera = [ //a
    "¡Y yo gozaba! El rocío",
    "Cantaba el mozo y decía:",
    "Por quereros, ser perdido",
    "Hubo una selva y un nido",
    "Beldad, como por despojo,",
    "Aquí la envidia y mentira",
    "Nadie se atreve a salir:",
    "Suprime lo al hecho extraño;",
    "Si el hombre debe callar,"
];
let segunda = [
    "-nocturno llanto del cielo-",
    "El querer es cosa buena,",
    "pensaba, que no culpado;",
    "y en ese nido un jilguero",
    "van en copla a vos las vidas",
    "me tuvieron encerrado.",
    "la plebe grita indignada,",
    "que apostaron me es notorio",
    "cállese y cumpla su sino"
];
let tercera = [ //a
    "el bosque espeso y umbrío,",
    "porque dobla la alegría",
    "mas que todo lo haya sido",
    "que alegre y estremecido,",
    "que defiendo con enojo.",
    "¡Dichoso el humilde estado",
    "las damas se quieren ir",
    "a quién haría en un año,",
    "que lo que importa en andar..."
];
let cuarta = [
    "la dulce quietud del suelo,",
    "y parte entre dos la pena...",
    "así me lo habéis mostrado,",
    "tras de un ensueño querido",
    "Y ¿quién puede, sino un cojo,",
    "del sabio que se retira",
    "porque la fiesta empezada",
    "con más fortuna, más daño,",
    "andar es sembrar camino"
];
let quinta = [ //a
    "el manso correr del río.",
    "¡Pero nadie lo quería!",
    "que lo tengo bien sabido.",
    "cruzó por el mundo entero.",
    "abogar por las caídas?",
    "de aqueste mundo malvado!",
    "no puede ya proseguir.",
    "Luis Mejía y Juan Tenorio.",
    "y morir es despertar."
];
let resultados, boton;

function iniciar(){
    resultados = document.getElementById("resultados");
    boton = document.getElementById("generar");
    boton.addEventListener("click", quintilla, false);
}

function quintilla(){
    let posicionPTQ = generarPrimera();
    let posicionSC = generarSegunda();
    generarTercera(posicionPTQ);
    generarCuarta(posicionSC);
    generarQuinta(posicionPTQ);
}

function generarPrimera(){
    var posicion = Math.floor(Math.random() * 9);
    resultados.innerHTML = primera[posicion] + "<br>";
    return posicion;
}

function generarSegunda(){
    var posicion = Math.floor(Math.random() * 9);
    resultados.innerHTML += segunda[posicion] + "<br>";
    return posicion;
}

function generarTercera(posicion){
    resultados.innerHTML += tercera[posicion] + "<br>";
}

function generarCuarta(posicion){
    resultados.innerHTML += cuarta[posicion] + "<br>";
}

function generarQuinta(posicion){
    resultados.innerHTML += quinta[posicion] + "<br>";
}

window.addEventListener("load", iniciar, false);