/* 
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

const factorial = (numero)=>{
    var resultado = 1;
    if(numero === 0){
        return resultado;
    }else{
        for (let i = 1 ; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));