/* 
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

*/

const Capicua  = (number)=>{
    let numberExpresion = /[0-9]/;
    if(number != '' && numberExpresion.test(number))
    {
        let convertString = number.toString();
        var numberTotal = '';
        for (let i = 0; i < convertString.length; i++) {
            const element = convertString[i];
            numberTotal = element + numberTotal;
        }
        
        const value = (numberTotal === convertString) ? `${number} si es Capicua`: `Joder, ${number} no es Capicua`;

        console.log(value);
    }else{
        console.warn('Ingrese datos correctos');
    }
}

Capicua(1214);
Capicua(123);
Capicua(1245);