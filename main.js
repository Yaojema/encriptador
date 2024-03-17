/** Uso del DOM */
const texto = document.querySelector('.texto');
const mensaje = document.querySelector('.resultados-texto');
const aviso = document.querySelector('.mensajes');
const resultados = document.querySelector('.resultados');

function btnEncriptar(mode = true){
    const textoManipulado = encriptar(texto.value, mode);
    mensaje.innerHTML = textoManipulado;
    texto.value = "";
    aviso.style.display = "none";
    resultados.style.display = "flex";
}

const borrado = document.querySelector('.titulo');
function drop(){
    borrado.innerHTML = "";
}
/** Logica de encriptar */
// true = encriptar
// false = desencriptar
function encriptar(msg, isEnc = true){
    let matriz = [
        ['e','enter'],
        ['i','imes'],
        ['a','ai'],
        ['o','ober'],
        ['u','ufat'],
    ];
    if(isEnc){
        // recorre la matriz 5 veces - 0-4
        for (let i = 0; i < matriz.length; i++) { 
            // Verifica si el mensaje tiene la vocal actual de la interacción [a-e-i-o-u]
                if(msg.includes(matriz[i][0])){
                // Reemplaza la coincidencia
                msg = msg.replaceAll(matriz[i][0], matriz[i][1]);
            }
        }
    } else {
        for (let i = 0; i < matriz.length; i++) {
            if(msg.includes(matriz[i][1])){
                msg = msg.replaceAll(matriz[i][1], matriz[i][0]);
            }
        }
    }
    return msg
}
console.log(
    'Encriptado: '+
    encriptar('murcielago')
    // encriptar('murcielago')
    // mufatrcimesenterlaigober
    // mufatrcimesenterlaimesgober
);
console.log(
    'Desencriptado: '+
    encriptar('mufatrcimesenterlaigober', false)
);