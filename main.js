/** Uso del DOM */
const texto = document.querySelector('.texto');
const mensaje = document.querySelector('.resultados-texto');
const aviso = document.querySelector('.mensajes');
const resultados = document.querySelector('.resultados');

// Seleccionar el elemento textarea
const textarea = document.querySelector('.texto');

// Agregar un event listener para el evento input
textarea.addEventListener('input', function() {
    // Obtener el valor actual del textarea
    let texto = textarea.value;
    // Convertir el texto a minúsculas, sin caracteres especiales
    texto = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    texto = texto.toLowerCase().replace(/[^a-z\s]/g, '');
    texto = texto.trimStart();
    // Actualizar el valor del textarea con el texto en minúsculas
    textarea.value = texto;
});


function btnEncriptar(mode = true){
    const textoManipulado = encriptar(normalizar(texto.value), mode);
    mensaje.innerHTML = textoManipulado;
    texto.value = "";
    aviso.style.display = "none";
    resultados.style.display = "flex";
}
// funcion de copiado al portapapeles
async function copiarContenido(){
    try {
        await navigator.clipboard.writeText(mensaje.innerHTML);
        console.log('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}
// quita acentos diacríticos y los vuelve en minúsculas 
function normalizar(text){
    let normalizado = textarea.value;
    normalizado = normalizado.toLowerCase().replace(/[^a-z\s]/g, '');
    normalizado = normalizado.trimStart();
    normalizado = normalizado.trimStart();
    if (normalizado.trim() === '') {
        // Si el texto es vacío, establecer un mensaje predeterminado en placeholder
        textarea.placeholder = 'Por favor, ingresa un texto.';
        return;
    }
    return normalizado;
    // return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

    // const copiarContenido = async () => {
    // try {
    //     await navigator.clipboard.writeText(mensaje.innerHTML);
    //     console.log('Contenido copiado al portapapeles');
    // } catch (err) {
    //     console.error('Error al copiar: ', err);
    // }
    // }


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