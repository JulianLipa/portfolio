/*CARROUSEL*/

var inicio = 0;
var posicionCarrousel = Math.floor(Math.random() * 3) + 1;
document.getElementById("paginador").innerHTML = posicionCarrousel+"/3";

var imagenes = ["1.JPG",
                "2.JPG",
                "3.JPG"];

while(inicio == 0){
    document.getElementById('imagen').src="assets/images/carrousel/"+imagenes[posicionCarrousel-1];
    inicio = 1;
}

var cantImagenes = 3;

document.getElementById("retroceder").addEventListener("click", retrocederFoto);
document.getElementById("avanzar").addEventListener("click", avanzarFoto);

function retrocederFoto(){

    if(posicionCarrousel <= 1){
        posicionCarrousel = cantImagenes;
    }else{
        posicionCarrousel--;
    }
    mostrarImagen();
}

function avanzarFoto(){

    if(posicionCarrousel >= cantImagenes){
        posicionCarrousel = 1;
    }else{
        posicionCarrousel++;
    }
    mostrarImagen();
}

function mostrarImagen(){
    document.getElementById("imagen").src = "assets/images/carrousel/"+imagenes[posicionCarrousel-1];
    document.getElementById("paginador").innerHTML = posicionCarrousel+"/3";
}