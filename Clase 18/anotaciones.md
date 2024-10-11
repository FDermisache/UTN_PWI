# Recorrer un array en busca de algo:
function obtenerProdcutoPorID (producto_ID){
    for (let producto of productos){
        if(producto.id === producto_ID){ // comparamos, con el for of va recorriendo el array uno por uno, empieza desde el principio, producto.id = 1 producto_ID = 3, al no ser igual lo sigue recorriendo hasta llegar al dato pasado abajo.
            console.log(producto) // no es util, mejor usar return
            return producto
        }
    }
}
let producto_encontrado = obtenerProdcutoPorID(3) // Le pasamos el ID que nos Dieron de dato

- Recorrer un array con el FOR:

for(let i = 0; i < array.lenght; i++)

----------------------------------------------------------------------

# Metodos de string:  Ejemplos script.2.js

- Includes: Verifica que el valor que le pasemos este dentro del string, Devuelve Booleanos, Distingue entre mayusculas y minicuslas, Plural y singular.

- toLowerCase/ toUpperCase : el primero pasa todo a minuscula y el otro todo a mayus. 

- replace : Transforma el espacio en guion. Recibe 2 valores, lo que queremos reemplazar y el porque. SOLO LO HACE UNA VEZ, SI EL String FUESE MAS LARGO, SOLO LO HACE EN EL PRIMER ESPACIO QUE ENCUENTRA

- ReplaceAll : Lo mismo que el anterior pero lo reemplaza en todo el string.

- Split: Nos transforma un string a array

- join : Nos permite transformar un array en un string