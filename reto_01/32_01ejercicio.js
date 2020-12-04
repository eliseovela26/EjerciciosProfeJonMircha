/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/



function validateString(string){

        var estado = true;

        let stringExpresion = /^[A-Za-z0-9]/;
        let numberExpresion = /[0-9]/ig;
    
        if(stringExpresion.test(string) && ! numberExpresion.test(string)){
            return estado;
        }else{
            estado = false;
            return estado;
        }
    
}


function lengthByString(){

    do{
        
        let texto = prompt('Ingrese una cadena de texto sin numeros');
        let stringwithoutspaces = texto.trimEnd().trimStart();
        var validate = validateString(stringwithoutspaces);

        if(validate){
            let longitud = stringwithoutspaces.length;
            console.log(`El numero de caracteres en el sring es: ${longitud}`);
        }

    }while(!validate);

}

lengthByString();

