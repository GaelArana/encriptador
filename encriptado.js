const errorMensaje = document.getElementById("errorMensaje")
const errorClave = document.getElementById("errorClave")
const ayudaEncriptar = document.getElementById("ayudaEncriptar")
const ayudaDesencriptar = document.getElementById("ayudaDesencriptar")

var noise = new Audio()
noise.src = "multimedia/meow sound.mp3"

var inputOriginal = document.getElementById("mensajeEntrada")
var patronEncriptamiento = document.getElementById("claveEncriptacion")
var output = document.getElementById("mensajeEncriptado")
var reproductor = document.getElementById("reproductor");

const alphabeth = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","á", "é", "í", "ó", "ú"]

function encriptar(){
    let clavePrimera = parseInt(patronEncriptamiento.value)
    let originalMessage = inputOriginal.value.toLowerCase()
    let newMessage = ""
    noise.play()

    if(originalMessage.length < 1){
        popErrorMensaje()
        inputOriginal.value = ""
    }else if(patronEncriptamiento.value.length < 1 || (patronEncriptamiento.value) % 1 !== 0 || clavePrimera < 1){
        popErrorClave()
        patronEncriptamiento.value = "1"
    }else{
        if(clavePrimera > alphabeth.length || clavePrimera < - alphabeth.length){
            var clave = clavePrimera % alphabeth.length
        }
        else{
            var clave = clavePrimera
        }
        console.log(clave)
        console.log("Working1")
        for(let i = 0; i < originalMessage.length; i++){
            let originalIndex = alphabeth.indexOf(originalMessage[i])
            if (originalIndex !== -1) {
                var newIndex = originalIndex + clave
                if (newIndex > alphabeth.length - 1){
                    let alterIndex = originalIndex + clave
                    newIndex = (alterIndex % alphabeth.length)
                }

                newMessage += alphabeth[newIndex]
            }else{
                newMessage += originalMessage[i]
            }
        }
        output.value = newMessage
        resultado.style.display = "flex"
        console.log(newMessage)
    }
}

function desEncriptar(){
    let clavePrimera = parseInt(patronEncriptamiento.value)
    let originalMessage = inputOriginal.value.toLowerCase()
    let newMessage = ""
    noise.play()

    if(originalMessage.length < 1 == true){
        popErrorMensaje()
        inputOriginal.value = ""
    }else if(patronEncriptamiento.value.length < 1 || (patronEncriptamiento.value) % 1 !== 0 || clavePrimera < 1){
        popErrorClave()
        patronEncriptamiento.value = "1"
    }else{
        if(clavePrimera > alphabeth.length || clavePrimera < - alphabeth.length){
            var clave = clavePrimera % alphabeth.length
        }
        else{
            var clave = clavePrimera
        }
        console.log(clave)
        console.log("Working1.1")
        for(let i = 0; i < originalMessage.length; i++){
            let originalIndex = alphabeth.indexOf(originalMessage[i])
            if (originalIndex !== -1) {
                var newIndex = originalIndex - clave
                if (newIndex < 0){
                    let alterIndex = originalIndex - clave
                    newIndex = alphabeth.length - 1 + alterIndex + 1
                }
                newMessage += alphabeth[newIndex]
            }else{
                newMessage += originalMessage[i]
            }    
        }
        output.value = newMessage
        resultado.style.display = "flex"
        console.log(newMessage)
    }
}

function ayudaEncriptacion(){
    ayudaEncriptar.style.display = "flex"
}

function ayudaDesencriptacion(){
    ayudaDesencriptar.style.display = "flex"
}

function mensajesPop(){
    errorMensaje.style.display = "none"
    errorClave.style.display = "none"
    ayudaEncriptar.style.display = "none"
    ayudaDesencriptar.style.display = "none"
}

function popErrorMensaje() {
    errorMensaje.style.display = "flex"
}

function popErrorClave() {
    errorClave.style.display = "flex"
}

mensajesPop()
resultado.style.display = "none"
