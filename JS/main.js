

var turno = 1; 
var queTurno; 
var arregloGato = new Array(9); 
var celdas = document.getElementsByClassName('box');
var name1 =localStorage.getItem('name1');
var name2 =localStorage.getItem('name2');


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
            
        }
}



function gato (evento){ 
    var celda = evento.target;
    var idCelda = evento.target.id;
    var posicionAMarcar = idCelda [1]-1;
    var name1 =localStorage.getItem('name1');
	var name2 =localStorage.getItem('name2');
	
    queTurno = turno%2; 
    
    if(queTurno!=0){
        celda.innerHTML='<i class="icon-cancel"></i>'; 
        celda.style.background ="#edefca"; 
        arregloGato[posicionAMarcar] = "X";
		var jugador = $('#jugador').html('Turno de:'+name1); 
		ganaJugador("X"); 
    } else if (queTurno==0){
        celda.innerHTML='<i class="icon-radio-unchecked"></i>';
        celda.style.background ="rgb(217, 181, 96)"; 
        arregloGato[posicionAMarcar] = "O";
		var jugador = $('#jugador').html('Turno de:'+name2);
        ganaJugador("O");
    }
    
    if (turno == 9) {
        alert('empate'); 
        //window.location.reload; 
    } else {
        turno++; 
    }
}



function inicio(){
    var n = 0 ; 
    
    while(n < celdas.length){
        celdas[n].addEventListener('click', gato); 
        n++; 
    }
	
	
		
}

