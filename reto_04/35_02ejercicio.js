/* 
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/


const numberValidate = (numero = undefined )=>{
    if(numero === undefined) return console.warn('No ingresaste un número');
    if(typeof numero !== 'number') return console.error(`El valor ${numero} ingresado, no es un número`);
    if(Math.sign(numero) === -1) return console.error('El número no puede ser negativo');
    if(numero === 0) return console.error('El número no puede ser cero');

    if(numero%2 === 0){
        return console.log(`El numero ${numero} es par`);
    }else{
        return console.info(`En numero ${numero} no es par`)
    }

}

numberValidate(-2);
numberValidate(-1);
numberValidate(0);
numberValidate(1);
numberValidate(2);