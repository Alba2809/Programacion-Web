var campoPalabra;

const listaDePalabras = [];

//se cargan los datos desde los archivos .txt que contienen
//las palabras por letra
for(var i = 97; i <= 122; i++){

    fetch('/JavaScript/Capitulo 11/Diccionario/' + String.fromCharCode(i) + '.txt')
        .then(doc => doc.text())
        .then(cont => {
            let lineas = cont.split(/\n/);
            listaDePalabras.push(lineas);
    });
    
}

fetch('/JavaScript/Capitulo 11/Diccionario/ñ.txt')
    .then(doc => doc.text())
    .then(cont => {
        let lineas = cont.split(/\n/);
        listaDePalabras.push(lineas);
});

function inicio(){
    var divTabla = document.getElementById("tabla");
    comprobar(0);
}

function primeraLetra(){
    var contArreglo = 0;
    document.getElementById("resultado").innerHTML = "";
    if(campoPalabra.value[0] == "ñ"){
        comprobar(26);
    }
    else{
        for(var i = 97; i <= 122; i++){
            if(campoPalabra.value[0].toLowerCase() == String.fromCharCode(i)){
                if(comprobar(contArreglo)){
                    document.getElementById("resultado").innerHTML = "La palabra está escrita correctamente";
                }
                else{
                    document.getElementById("resultado").innerHTML = "La palabra no está escrita correctamente";
                    document.getElementById("resultado").innerHTML += "¿Quiso decir " + coincidencias(contArreglo) + "?";
                    
                }
                break;
            }
            contArreglo++;
        }
    }
    
}

function comprobar(index){
    var caracteresCoincidentes = [];
    var palabraEscrita = "ala";
    for(var palabra in listaDePalabras[index]){
        var sumaCaracteres = 0;
        if(palabraEscrita.length >= listaDePalabras[index][palabra].length){
            for(var c in palabraEscrita){
                if(listaDePalabras[index][palabra][c] == palabraEscrita[c]){
                    sumaCaracteres++;
                }
            }

        }
        caracteresCoincidentes.push(sumaCaracteres);
    }
    //console.log(caracteresCoincidentes);
    //return imprimirMejor(index, caracteresCoincidentes);
}

/* function coincidencias(index){
    var caracteresCoincidentes = [];
    var palabraEscrita = campoPalabra.value.toLowerCase();
    for(var palabra in listaDePalabras[index]){
        var sumaCaracteres = 0;
        if(palabraEscrita.length >= listaDePalabras[index][palabra].length){
            for(var c in palabraEscrita){
                if(listaDePalabras[index][palabra][c] == palabraEscrita[c]){
                    sumaCaracteres++;
                }
            }

        }
        caracteresCoincidentes.push(sumaCaracteres);
    }
    return imprimirMejor(index, caracteresCoincidentes);
}

function imprimirMejor(index, arreglo){
    var maximo = Math.max(...arreglo);
    for(var carac in arreglo){
        if(arreglo[carac] == maximo){
            return listaDePalabras[index][carac];
        }
    }
} */

window.addEventListener("load", inicio, false);