/* 
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/


const randomNumber = (min, max)=>{

    let numberExpresion = /[0-9]/;

    if(numberExpresion.test(min) && numberExpresion.test(max)){

        return  Math.round(Math.random()*(max - min) + min);  
    }else{
        console.warn('Ingrese numeros validos');
    }

}

console.log(randomNumber(501,600));
console.log(randomNumber(30,90));