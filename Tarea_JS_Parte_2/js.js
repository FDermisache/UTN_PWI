/* METODOS DE STRINGS

1.
Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida"
 */


/* let texto = prompt('Por favor ingrese una direccion web:').toLowerCase();
function urlValida(url){
        if(url.includes('https://')){
            alert('La url ingresada, cuenta con certificado ssl')
        }else if(url){
            alert ("la url ingresada no cuenta con certificado ssl")
        }else{
            alert(' No has ingresado una url valida')
        }
    }
    
urlValida(texto)
 */
/* 2.
Dado los siguientes texto 
"hola%20como%20estas,%20todo%bien?" 
"no%20me%20siento%20bien"
"que%20mal"

descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar

"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18

Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo"*/


let codigoADecisfrar = [
    codigo1= "hola%20como%20estas,%20todo%bien?",
    codigo2 =  "no%20me%20siento%20bien",
    codigo3 = "que%20mal"
]

function descifrador (){
for (let descifrar of codigoADecisfrar ){
    let codigoDescifrado = descifrar.replaceAll('%20', ' ');
        console.log('El codigo descrifado es :  ' + codigoDescifrado)
}
}
descifrador();
function cantidadDeLetas (){
    for (let caracteres of codigoADecisfrar){

        if(codigoADecisfrar.length <= 8){
            console.log('el mensaje es corto')
        }else if(codigoADecisfrar.length <= 18){
            console.log('el mensaje es mediano')
        }else if(codigoADecisfrar.length > 18){
        console.log('el mensaje es largo')
    } 
    if(codigoADecisfrar.includes(',') || codigoADecisfrar.includes('@') || codigoADecisfrar.includes('-')){
        console.log('el mensaje es complejo')
    } else{
        console.log('el mensaje no es complejo')
    }
}
}

cantidadDeLetas(); 



































/* 3.
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior. 
 */
/* 4.
Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
una maysucula, sino decir "tiene minuscula"


 Dado una cadena de texto, imprimir "La cadena es mayor a 10 caracteres" si la longitud de la cadena es mayor a 10, de lo contrario imprimir "La cadena es menor o igual a 10 caracteres".

 Dada una cadena de texto, imprimir "La cadena contiene la letra 'a'" si la cadena contiene la letra 'a', de lo contrario imprimir "La cadena no contiene la letra 'a'".

 Dada una cadena de texto, reemplazar todas las apariciones de la letra 'a' con la letra 'x' y imprimir la nueva cadena.
 Dada una cadena de texto, imprimir "La cadena es un número" si la cadena es un número válido, de lo contrario imprimir "La cadena no es un número".

 Dada una cadena de texto, imprimir "La cadena es una dirección de correo electrónico válida" si la cadena es una dirección de correo electrónico válida, de lo contrario imprimir "La cadena no es una dirección de correo electrónico válida". */