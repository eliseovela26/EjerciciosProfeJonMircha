/* 
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

*/

const removeCharacter = (string = '' , removed = '') =>{
    if(string != ''){

        let transform = string.trim().split(' ');

        var textTranformRemoved = '';

        transform.forEach(element => {
            textTranformRemoved += ' ' + element.replace(removed, '');
        });
        console.log(`El resultado es: ${textTranformRemoved}`);
    }else{
        console.warn('Ingrese datos correctos');
    }
}

removeCharacter('xyz1, xyz2, xyz3, xyz4 y xyz5','xyz');
removeCharacter('xyz1, xyz2, xyz3, xyz4 y xyz5','xy');
removeCharacter('xyz1, xyz2, xyz3, xyz4 y xyz5','y');
removeCharacter('y');