

var turno = 1; 
var queTurno; 
var arregloGato = new Array(9); 
var celdas = document.getElementsByClassName('gato');



function ganaJugador(letra){
    if (
        (arregloGato[0]== letra && arregloGato[1]== letra && arregloGato[2]== letra )||
        (arregloGato[3]== letra && arregloGato[4]== letra && arregloGato[5]== letra )||
        (arregloGato[6]== letra && arregloGato[7]== letra && arregloGato[8]== letra )||
        (arregloGato[0]== letra && arregloGato[3]== letra && arregloGato[6]== letra )||
        (arregloGato[1]== letra && arregloGato[4]== letra && arregloGato[7]== letra )||
        (arregloGato[2]== letra && arregloGato[5]== letra && arregloGato[8]== letra )||
        (arregloGato[0]== letra && arregloGato[4]== letra && arregloGato[8]== letra )||
        (arregloGato[2]== letra && arregloGato[4]== letra && arregloGato[6]== letra )
        )
        {
            alert ('jugador'+letra+'gana'); 
            window.location.reload();
        }
}


function gato (evento){ 
    var celda = evento.target;
    var idcelda = evento.target.id; 
    var posicionAMarcar = idCelda [1]-1;
    
    queTurno = turno%2; 
    
    if(queTurno!=0){
        celda.innerHTML="x"; 
        celda.style.background ="red"; 
        arregloGato[posicionAMarcar] = "X";
        ganaJugador("X"); 
    } else if (queTurno==0){
        celda.innerHTML="O";
        celda.style.background ="aqua"; 
        arregloGato[posicionAMarcar] = "O";
        ganaJugador("O");
    }
    
    if (turno == 9) {
        alert('empate'); 
        window.location.reload; 
    } else {
        turno++; 
    }
}

function init(){
    var n = 0 ; 
    
    while(n < celdas.length){
        celdas[n].addEventListener('click', gato); 
        n++; 
    }
}

