/* 
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/


const invertirString = (string)=>{
    var stringTotal = '';
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        stringTotal = element + stringTotal;
    }
    console.log(` Este es el segundo resultado ${stringTotal}`);
}

invertirString('Hola Mundo');