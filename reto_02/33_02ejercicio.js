/* 
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

*/

/* const countText = (text = '', repeat = 0)=>{
    let count = text.;
} */

const repeticiones = (texto = '', search = '')=>{

    if(texto != '' && search != '')
    {
        let transform = texto.trim().split(' ');

        var textRepeat = 0;
    
        transform.forEach(element => {
            if(element === search){
                textRepeat += 1;
            }
        });
        console.log(`El número de veces que se repite es: ${textRepeat}`);
    }else{
        console.warn('Ingrese datos correctos')
    }

}

repeticiones('Juan toledo tomas tomas tomas tomas','tomas');

repeticiones('','vela');

repeticiones();