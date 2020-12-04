/* 
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

function ValidateData(string, number){

    let stringExpresion = /[A-Za-z]/;
    let numberExpresion = /[0-9]/;

    if(stringExpresion.test(string) && !numberExpresion.test(string) && string != '' && !stringExpresion.test(number) && numberExpresion.test(number) && number != '' ){
        return true;
    }else{
        return false;
    }

}

function StringRepeat(string, number){
    console.log(string);
    console.log(number);
    let addSpace = string + ' ';
    let stringRepetido = addSpace.repeat(number);
    return stringRepetido;
}

function stringResult(){

    do{
        
        let texto = prompt('Ingrese una cadena de texto sin numeros');
        let number = prompt('Número de veces a repetir el texto');

        let textowithoutspaces = texto.trimEnd().trimStart();
        let numberwithoutspaces = number.trimEnd().trimStart();

        var validate = ValidateData(textowithoutspaces,numberwithoutspaces);

        if(validate){
            let stringRepeatResult = StringRepeat(textowithoutspaces,numberwithoutspaces);

            console.log(stringRepeatResult);
        }

    }while(!validate);

}

stringResult();