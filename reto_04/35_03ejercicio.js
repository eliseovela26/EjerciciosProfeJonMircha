/* 
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const convert = (numero = '', type = '')=>{
    if(numero === undefined) return console.warn('No ingresaste un número');
    if(typeof numero !== 'number') return console.error(`El valor ${numero} ingresado, no es un número`);
    if(Math.sign(numero) === -1) return console.error('El número no puede ser negativo');
    if(numero === 0) return console.error('El número no puede ser cero');
    if(  type != ''){
        switch (type) {
            case 'F':
                let Fahrenheit =  (numero*1.8)+32;
                console.log(` ${numero}°C grados Celsius es  ${Fahrenheit}°F Fahrenheit`);
                break;
            case 'C':
                let Celsius =  (numero - 32)/1.8;
                console.log(`   ${numero}°F Fahrenheit es ${Celsius}°C grados Celsius`);
                break
            default:
                console.log('Ingrese C o F para convertir')
                break;
        }
    }else{
        console.warn('Ingrese un tipo de conversíon');
    }
}

convert(30, 'F');
convert(86, 'C');
convert(86);
convert('',86);