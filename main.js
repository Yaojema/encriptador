
// contador de vocales
// function vowels(msg){
//     // let cadena = "vocaleeaas";
//     let numeroVocales = msg.match(/[aeiou]/gi).length;
//     // console.log(numeroVocales);
//     return numeroVocales
// }
// true = encriptar
// false = desencriptar
function encriptar(msg, mode = true){
    let matriz = [
        ['a','ai'],
        ['e','enter'],
        ['i','imes'],
        ['o','ober'],
        ['u','ufat'],
    ];
    if(mode){
        // recorre la matriz 5 veces - 0-4
        for (let i = 0; i < matriz.length; i++) { 
            // Verifica si el mensaje tiene la vocal actual de la interacción [a-e-i-o-u]
            // Verifica si el mensaje tiene la vocal actual de la interacción [0-1-2-3-4]
            // inicia con matriz[0][0] = a
            // inicia con matriz[1][0] = e
            // inicia con matriz[2][0] = i
            // inicia con matriz[3][0] = o
            // inicia con matriz[4][0] = u
            if(msg.includes(matriz[i][0])){
                console.log("ACA: " + matriz[i][0]);
                // Reemplaza la coincidencia
                msg = msg.replaceAll(matriz[i][0], matriz[i][1]);
                console.log("ACA2: " + matriz[i][1]);
            }
            console.log('Encriptado');
        }
    } else {
        let newMatrix = matriz;
        console.log(newMatrix);
        for (let i = 0; i < newMatrix.length; i++) {
            // Verifica si el mensaje tiene el patron actual de la interacion
            if(msg.includes(newMatrix[0][i])){
                // Reemplaza la coincidencia
                msg = msg.replaceAll(newMatrix[i][0], newMatrix[i][1]);
                
            }
            console.log('Desencriptado: Times');
        }
    }
    // console.log(msg);
    return msg
}
console.log(
    encriptar('hola')
    // +" : "+"otros"+" - "+
    // encriptar('a')+" - "+
    // encriptar('e')+" - "+
    // encriptar('i')+" - "+
    // encriptar('o')+" - "+
    // encriptar('u')
    // encriptar('murcielago')
    // mufatrcimesenterlaigober
    // mufatrcimesenterlaimesgober
);