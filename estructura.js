function encriptar() { 
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./imagenes/inspector1.png";

    } else {
      muñeco.src = "./imagenes/muñeco.png";
      tituloMensaje.textContent = "Ningun mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/pantera3.png";

    } else {
        muñeco.src = "./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }    
}

document.addEventListener("DOMContentLoaded", function() {
    
    var btnCopiar = document.getElementById("btnCopiar");
    if (btnCopiar) {
        btnCopiar.addEventListener("click", Copiado);
    }
});

function Copiado() {
    let texto = document.getElementById("texto").value;
    if(texto === "") {
        swal("No hay texto para copiar");
    }else{
        navigator.clipboard.writeText(texto).then(() =>{
            swal("¡Texto copiado al portapapeles exitosamente!");
        }).catch(err =>{
            console.error("Error al copiar al portapapeles");
            swal("Error al copiar el texto.");
        });
    }
}