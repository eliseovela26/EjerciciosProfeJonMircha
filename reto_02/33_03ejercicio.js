/* 
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

*/
const palindromo  = (string = '')=>{
    if(string != '')
    {
        var stringTotal = '';
        for (let i = 0; i < string.length; i++) {
            const element = string[i];
            stringTotal = element + stringTotal;
        }
        
        const value = (stringTotal === string) ? `${string} si es palindromo`: `Joder, ${string} no es palindromo`;

        console.log(value);
    }else{
        console.warn('Ingrese datos correctos');
    }
}

palindromo('adora');
palindromo('salas');
palindromo('ada');