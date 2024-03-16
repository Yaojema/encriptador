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
                // console.log("ACA: " + matriz[i][0]);
                // Reemplaza la coincidencia
                msg = msg.replaceAll(matriz[i][0], matriz[i][1]);
                // console.log("ACA2: " + matriz[i][1]);
            }
            // console.log('Encriptado');
        }
    } else {
        for (let i = 0; i < matriz.length; i++) {
            // Verifica si el mensaje tiene el patron actual de la interacion
            if(msg.includes(matriz[i][1])){
                // Reemplaza la coincidencia
                msg = msg.replaceAll(matriz[i][1], matriz[i][0]);
            }
            // console.log('Desencriptado: Times');
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
    encriptar('mufatrcimesenterlaigober', false)+""
);