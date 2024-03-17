let mensaje

//Definiendo la función "encriptar" 

function encriptar() {
    let mensajeEncriptado = document.getElementById('cuadro1').value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        console.log(mensajeEncriptado);
    let mensaje = mensajeEncriptado;
    document.getElementById('cuadro2').value = mensaje;
    return;

}

//Definiendo la función "desencriptar"
function desencriptar() {
    let mensajeDesencriptado = document.getElementById('cuadro1').value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        console.log(mensajeDesencriptado);
    let mensaje = mensajeDesencriptado;
    document.getElementById('cuadro2').value = mensaje;
    return;

}

// Definiendo funcion para validar si se ha ingresado un texto o no, y enviar el mensaje de alerta.

function validarIngresoTexto(){

    let textoIgresado = document.getElementById('cuadro1').value;

    if (textoIgresado === "") {
        alertaEnviada = 'Ningun Mensaje fue Ingresado...'
    } else{
        alertaEnviada = '';
    }
    let msj = document.getElementById('alertaNotexto');
    msj.textContent = alertaEnviada; 

    console.log(msj)
    return;
}


function copiarMensaje() {

    let textoCopiado = document.getElementById("cuadro2").value;
    navigator.clipboard.writeText(textoCopiado)
    console.log(textoCopiado);
    return;
  
}

function ocultarImagen(IdImagen) {
    let imagen = document.getElementById(IdImagen);
    imagen.style.display = "none";
    return;
}  

function mostrarImagen(IdImagen) {
    let imagen = document.getElementById(IdImagen);
    imagen.style.display = "block";
    return;
}
  
  // Ejemplo de uso:
  