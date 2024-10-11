/*  Metodos de los string: */


/* - Includes  */

// vamos a comprobaar si la palabra nombre esta incluido dentro del mensaje:
let mensaje = 'Hola a todos, mi nombre es Federico'

mensaje.includes('nombre') // devolvera un Booleano.


/* --------------------------------------------------------------------------------- */

// Queremos transformar a categoria a minuscula o mayuscula.
let categoria = 'Tecnologia'

categoria.toLowerCase // pasa todo a minicusla
categoria.toUpperCase // Pasa todo a mayusucka

let mensajeBuscado = 'hola'

console.log(mensaje.toLowerCase().includes(mensajeBuscado)) // mensaje.toLowerCase( pasamos todo a miniscula) y luego le decimos que busque con el includes.


/* ----------------------------------------------------------------------------------*/

// Quiero transformar mi titulo a URL friendly(Que no haya espacios en la URL para que no se rompa) Transforma el espacio en guion. SOLO LO HACE UNA VEZ, SI EL TITULO FUESE MAS LARGO, SOLO LO HACE EN EL PRIMER ESPACIO QUE ENCUENTRA.    

let titulo = 'Tv samsung'

titulo.replace( '' , '-') // modificamos el espacio entre los string por el guion.

// ReplaceALL : lo mismo que el anterior pero lo remplaza todo.

titulo.replaceAll( '' , '-')

/* --------------------------------------------------------------------------------- */

// Transformar el "codigo" en este array codigo = ['11', '2','PROD', '12/03/24']
// Transforma un string en un array.


/* 
Primer numero: codigo del elemento
Segundo Numero: codigo area de la empresa
Tercer Num: que tipo de producto es
Cuarto Numero: Fecha 

 */

let codigo = ' 11-2-PROD-12/03/24' // Para nosotros tendria que ser un objeto.Ahi entra el metodo


let codigo_Partido = codigo.split('-') // Donde habia un guion se parte y crea nuevos elementos para crear el array.

// Si tenemos mas de un codigo, para no escribir el split 3 veces, hacemos una funcion

let codigo2 = ' 13-2-TRANS-17/03/24'
let codigo3 = ' 14-2-SERV-18/03/24'


function transformarCodigo (codigo){
    let codigo_Partido = codigo.split('-')

        const datosElemento = {
            codigo: codigo_Partido[0],
            area : codigo_Partido[1],
            tipo : codigo_Partido[2],
            fecha: codigo_Partido[3]
        }
        return datosElemento
}

transformarCodigo(codigo)
transformarCodigo(codigo2)
transformarCodigo(codigo3)

/* --------------------------------------------------------------------------------- */
 // Si queremos volver al valor original:

 // Opcion 1:

let codigo_partido = ['11' , '2' , 'PROD' , '12/02/24']

let codigod = ''
for (let element of codigo_partido){
    codigo = codigo + '-' + element
}


// Opcion 2: Usando el metodo join(meotod de array) Nos permite transformar un array en un string

codigo_Partido.join() // Se devuelve con comas, si le queremos dar otra forma ...
codigo_Partido.join(('-')) // En este caso devulevre con guion medio


/* --------------------------------------------------------------------------------- */

// Saber cuantos cartacteres tiene un string.

let string = 'pepe'

console.log( ' mi string tiene' + string.length)

//Quiero saber cual es el primer caracter del string

console.log(string[0]) // te va a traer el caracter en la posicon 0 del string
console.log(string.charAt[0]) // Hace lo mismo

// Quiero que mi string se repita una X cantidad de veces

console.log(string.repeat(3)) // le pasamos la cantidad de veces que queremos que el string se repita.

