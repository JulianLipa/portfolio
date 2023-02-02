/*SECCION BARDO*/

var option = 0;

function buttonSelection(option){
    var bardo = document.getElementById("bardo-content");
    var freelance = document.getElementById("freelance-content");
    var university = document.getElementById("university-content");
    
    console.log(option);
    if(option == 1 || option == 0){
        bardo.classList.remove("no-visible");
        bardo.classList.add("visible");

        freelance.classList.remove("visible");
        freelance.classList.add("no-visible");

        university.classList.remove("visible");
        university.classList.add("no-visible");

        document.getElementById("bardo-section-1").classList.add("selected");
        document.getElementById("bardo-section-2").classList.add("not-selected");
        document.getElementById("bardo-section-3").classList.add("not-selected");
        document.getElementById("bardo-section-2").classList.remove("selected");
        document.getElementById("bardo-section-3").classList.remove("selected");
    }

    if(option == 2){
        bardo.classList.remove("visible");
        bardo.classList.add("no-visible");

        freelance.classList.remove("no-visible");
        freelance.classList.add("visible");

        university.classList.remove("visible");
        university.classList.add("no-visible");
        
        document.getElementById("bardo-section-1").classList.remove("selected");
        document.getElementById("bardo-section-2").classList.add("selected");
        document.getElementById("bardo-section-3").classList.remove("selected");

        document.getElementById("bardo-section-1").classList.add("not-selected");
        document.getElementById("bardo-section-3").classList.add("not-selected");
    }

    if(option == 3){
        bardo.classList.remove("visible");
        bardo.classList.add("no-visible");

        freelance.classList.remove("visible");
        freelance.classList.add("no-visible");

        university.classList.remove("no-visible");
        university.classList.add("visible");
        
        document.getElementById("bardo-section-1").classList.remove("selected");
        document.getElementById("bardo-section-2").classList.remove("selected");
        document.getElementById("bardo-section-3").classList.add("selected");

        document.getElementById("bardo-section-1").classList.add("not-selected");
        document.getElementById("bardo-section-2").classList.add("not-selected");
    }
}


/*MODAL*/

var modal = document.getElementById("modal");
var buttonModal = document.getElementById("cerrar-modal");

setTimeout(() => {
    modal.classList.add("visible");
    
    buttonModal.onclick = function(){
        modal.classList.add("no-visible");
        modal.classList.remove("visible");
    }
    
    document.addEventListener('keydown', (event) => {
        if(event.key == "Enter" || event.key == "Escape"){
            modal.classList.add("no-visible");
            modal.classList.remove("visible");
        }
      }, false);
  }, 1000)


/*SIGUERRATONES*/

var siguerratones = document.getElementById('siguerratones').style;

function seguir(){
    siguerratones.top = parseInt(window.event.pageY + 5) + "px";
    siguerratones.left = parseInt(window.event.pageX + 5) + "px";

    document.getElementById("img-hover").src="assets/images/buzo-skeitin-bardo.jpg";
}

function seguir2(){
    siguerratones.top = parseInt(window.event.pageY + 5) + "px";
    siguerratones.left = parseInt(window.event.pageX + 5) + "px";

    document.getElementById("img-hover").src="assets/images/freelance/Poster Euphoria Rue.png";
}

function seguir3(){
    siguerratones.top = parseInt(window.event.pageY + 5) + "px";
    siguerratones.left = parseInt(window.event.pageX + 5) + "px";

    document.getElementById("img-hover").src="assets/images/university/Afiche-tipografico.jpg";
}
