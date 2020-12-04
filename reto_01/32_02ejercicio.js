/* 
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/




function validateDate(string,number){

    let stringExpresion = /[A-Za-z]/;
    let numberExpresion = /[0-9]/;

    if(stringExpresion.test(string) && !numberExpresion.test(string) && string != '' && !stringExpresion.test(number) && numberExpresion.test(number) && number != ''){
        return true;
    }else{
        return false;
    }

}

function recortar(string, space){
    let stringSlice = string.slice(0 , space);
    return stringSlice;
}

function stringSlice(){

    do{
        
        let texto = prompt('Ingrese una cadena de texto sin numeros');
        let espacios = prompt('Ingrese el numero de caracteres a cortar');

        let stringwithoutspaces = texto.trimEnd().trimStart();
        let numberwithoutspaces = espacios.trimStart().trimEnd();
        var validate = validateDate(stringwithoutspaces,numberwithoutspaces);

        if(validate){

            let stringRecortado = recortar(stringwithoutspaces, numberwithoutspaces);

            console.log(`La cadena es: ${stringwithoutspaces} y recortado es: ${stringRecortado}`);
        }

    }while(!validate);

}

stringSlice()

