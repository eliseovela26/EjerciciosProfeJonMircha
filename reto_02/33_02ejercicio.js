/* 
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/


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