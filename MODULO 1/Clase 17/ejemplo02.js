function ocultarMensaje(){

const mensaje = document.getElementById('mensaje'); //amarillo nombre del id que esta en el html
mensaje.style.display = 'none';

}

//ocultarMensaje() --> no se vería el cartel

setTimeout(ocultarMensaje, 5000); //1000 es 1 segundo. 5000 es 5 segundos