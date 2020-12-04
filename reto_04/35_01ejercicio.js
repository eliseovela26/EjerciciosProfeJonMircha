/* 
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const numeroPrimo = (numero = undefined) => {
    if(numero === undefined) return console.warn('No ingresaste un número');
    if(typeof numero !== 'number') return console.error(`El valor ${numero} ingresado, no es un número`);
    if(numero === 0) return console.error('El número no puede ser 0');
    if(numero === 2) return console.info(`El numero ${numero} si de primo`);
    if(Math.sign(numero) === -1) return console.error('El número no puede ser negativo');
    if(numero === 1) return console.info(`El número ${numero} no es un numero primo`);

    if(numero%numero === 0 && numero%1 === 0 && numero%2 !== 0 ){
        return console.info(`El numero ${numero} si es primo`);
    }else{
        return console.info(`El numero ${numero} no es primo`);
    }
} 

numeroPrimo(-1);
numeroPrimo(3);
numeroPrimo(1);
numeroPrimo(2);
numeroPrimo(8);
numeroPrimo(199);
numeroPrimo(4);
numeroPrimo(6);