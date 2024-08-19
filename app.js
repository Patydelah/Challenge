let mensaje=" ";
let mensajeEncriptado= " ";
let mensajeDesplegar = " ";

function Encriptar(){
 
    let mensaje = document.getElementById('valorUsuario').value;
    
    if (/^[a-z\s]+$/.test(mensaje)) {
            
        mensajeEncriptado = encriptarTexto(mensaje);
            
    } else {
        mensajeEncriptado=("Se tecleo alguna mayuscula, corrija por favor");
    }
        
    mostrarTextoPantalla('span',mensajeEncriptado);
    limpiarCaja();
    return;
}

function encriptarTexto(mensaje,){
   
    const mapeoVocales = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    };
    let mensajeModificado = " ";
   
    for (let caracter of mensaje) {
        if (mapeoVocales[caracter]) {
            mensajeModificado += mapeoVocales[caracter];
        } else {
            mensajeModificado += caracter;
        }
    }
    
    return mensajeModificado;
}

function mostrarTextoPantalla(elemento, texto) {
    
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
    return;
}

function Desencriptar(){
  
    let mensajeEncriptado = document.getElementById('valorUsuario').value;
    
    if (/^[a-z\s]+$/.test(mensaje)) {
        mensaje = desencriptarTexto(mensajeEncriptado);
    } else {
        mensaje = ("Se teclearon Mayusculas, corrija por favor");
    }
    mostrarTextoPantalla('span',mensaje);
    limpiarCaja();
    return;
}

function desencriptarTexto(mensajeEncriptado) {
        
    const mapeoConjuntos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    const regex = new RegExp(Object.keys(mapeoConjuntos).join('|'), 'gi');
    console.log(regex);

    // Reemplazo de los conjuntos por la vocal correspondiente
    let mensajeBien = mensajeEncriptado.replace(regex, (match) => mapeoConjuntos[match.toLowerCase()]);
    console.log(mensajeBien, "antes de regresar");
    return mensajeBien;
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
