/* 
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/


const factorial = (numero)=>{
    /* var result = 1;
    for (let i = 1 ; i <= numero; i++) {
        result = i*result;
        console.log(result);
    }
    console.log('result'); */

    var contador = 0;
    var resultado = 1;
    while( contador < numero){
        ++contador;
        resultado *= contador; 
        console.log(resultado);
    }
};


factorial(8);
factorial(7);
factorial(5);