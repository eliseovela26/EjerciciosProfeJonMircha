/* 
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

function ValidateData(string){

    let stringExpresion = /[A-Za-z]/;
    let numberExpresion = /[0-9]/;

    if(stringExpresion.test(string) && !numberExpresion.test(string) && string != ''){
        return true;
    }else{
        return false;
    }

}

function ArrayString(string, type){
    console.log(string);
    console.log(type);
    let stringSlice = string.split(type);
    return stringSlice;
}

function stringSplit(){

    do{
        
        let texto = prompt('Ingrese una cadena de texto sin numeros');
        let type = prompt('Por que caracter quiere separa?');

        let stringwithoutspaces = texto.trimEnd().trimStart();

        var validate = ValidateData(stringwithoutspaces);

        if(validate){
            let stringCut = ArrayString(stringwithoutspaces,type);

            console.log(stringCut);
        }

    }while(!validate);

}

stringSplit()