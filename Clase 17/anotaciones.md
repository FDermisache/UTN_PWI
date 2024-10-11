# Arrays metodos y metodos avanzados:
- Sinonimos de array: array, arreglos, listas, matrices, colecciones, collection, list.

- Array : lista de elementos ordenada, Esto quiere decir que los elementos tienen su posicion, no es lo mismo estar primero que ultimo, la posicion empieza en 0.
                 0        1        2
let alumnos = ['pepe', 'maria', 'juan']
let notas = [9 ,5 ,8]


- Mostar array por consola:

console.log(alumnos)

- Acceder a un valor especifico: Necesitamos conocer su posicion

Console.log(alumnos[1])

- Reasignar/crear valores en el array:

alumnos[1] = 'pepito'

- Eliminar propiedad del array: (MALA PRACTICA)❌❌❌

delete alumnos [1]

* Otra mala Practica es crear valores en posiciones no existentes:❌❌❌

alumnos[5] = 'Emi'

- Saber la cantidad o longitud del array:

# lenght: Propiedad de los arrays, Longitud o cantidad.

console.log(alumnos.lenght)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Por cada mail de la lista quiero que por consola diga mail enviado a X usuario

let mails = [
    'pepe@gmail.com',
    'pe@gmail.com',
    'maria@gmail.com',
]

- Opcion 1:
console.log(`Mail enviado a ${mails[0]} `) // en este caso solo estoy mandando el primer mail de la lista


- Opcion 2:

// Una forma escalable es usar el Bucle For, el bucle for servia cuando sabemos cuantas veces se va a repetir el bucle. para saber cuantos mails hay usamos mails.length, Esto se llama recorrer arrays.

for(let posicion = 0; // el iterador, en este caso se llama posicion, empieza en 0 ya que lo usamos como la posicion del array, en este caso va a ir de 0 a 2
    posicion < mails.length; //poner el lenght tiene un problema ya que siempre esta uno por delante, si tenemos 3 elementos el lenght va hasat el 4. 
    posicion++) 


{
    console.log(`mail enviado a ${mails[posicion]}`)
}



// Practica en clase: Por cada producto vendido, deberas mostrar una alerta ' Has vendido {producto} Exitosamente.

let productosVendido = [
    'teclado',
    'Monitor',
    'celular'
]

for (let i = 0;
    i < productosVendido.length;
    i++
){
    alert (`Has vendido ${productosVendido[i]} exitosamente`) // Ponemos el [I] para que empiece desde el principio y recorra uno por uno
}

// Por cada producto vendido vamos a usar un document.write() donde pasaremos un string con el siguiente formato
`<div>
    <h3>{nombre}</h3>
    <hr/>
</div>`


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Otra forma de escribir el bucle for:

# FOR OF: se usa para hacer el recorrido de un arrays. ES una forma mas facil de leerlo

for(let producto of productosVendidos){  // A la variable let le ponemos cualquier nombre que queramos.  // Se lee: por cada "producto" de los "productos que yo vendi hoy" voy a mostrar{}
    document.write(

    `<div>
    <h3> Has vendido: ${productosVendidos}</h3> // no le ponemos el [i] ya que internamente va recorriendo uno por uno
    <button>Comprar</button>
    <hr/>
</div>`
)
}

- Otro Ejemplo:

// Por cada producto generar un div con la siguiente estructura:
/*
` 
<div>
    <h3>${title}</h3>
    <span>Categoria:<b>${categoria}</b></span>
    <span>Precio:<b>$${precio}</b></span>
    <button>Comprar</button>
    <hr/>
    `
 */

let products = [ // Creamos un array y dentro varios objetos.
    {
        title: 'Tv samsung 32',
        precio: 1000,
        categoria: 'tecnologia',
        Id: 1
    },
    {
        title: 'Tv samsung 32',
        precio: 4000,
        categoria: 'tecnologia',
        Id: 2
    },
    {
        title: 'Tv samsung 32',
        precio: 5000,
        categoria: 'tecnologia',
        Id: 3
    }
]

for(let prod of products){
    document.write(
        ` 
<div>
    <h3>${prod.title}</h3>
    <span>Categoria:<b>${prod.categoria}</b></span>
    <span>Precio:<b>$${prod.precio}</b></span>
    <button>Comprar</button>
    <hr/>
    `
    )
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Metodos de los arrays: Acciones que existen en el prototipo de los arrays. Son esquemas donde se define que va a pasar con cada tipo de dato.

- Para usar un metodo dentro del array hay que : Llamar al array y poner el punto Ej: productos."el metodo del array"


- Push: Sirve para agregar elementos al final del array. 
Ej: productos.push({
    titulo: 'Nuevo prodcuto'
    id:30
    precio: 4000
})

Ej: tambien se puede hacer con arrays:

let nombres = [ 'fede', 'emi', 'pepe']
nombres.push('maria')

- unshift: Sirve para agregar un elemento al principio del array, los demas se desplazan un lugar a la derecha.

- pop: Eliminar el ultimo elemento de un array y lo retorna.

Ej:
producto.pop()

Ej: Retornar el producto eliminado, hacemos una variable que se llama productos elimiandos para que no los muestre.

let productoEliminado = productos.pop()
console.log( 'Has eliminado a ' , productoELiminado) Se le pone la coma para que no aparezca objet object en la consola


- shift: Eliminar el primer elemento del array y lo retorna.

- indexOf: Nos permite buscar el indice de un elemento del arrays de string. NO FUNCIONA BIEN CON OBJETOS. SI NO ENCUENTRA EL ELEMENTO DEVOLVERA -1

Ej:
let nombres = [ 'fede', 'emi', 'pepe']
console.log(nombres.indexOF('pepe'))


- includes: Solo Sirve para arrays de string. Nos permite saber si un elemento esta includo en el array.

let carrito [ 'tv', 'celular', 'empanadas' , 'vaso']

console.log(carrito.includes('empanadas'))

Devolvera True o false 

Ej: 

let categoriasDisponibles = ['Tecnologia', 'Comida', 'Hogar']

let categoriaSolicitada = promp ('Ingrese su categoria:?)

if(categoriasDisponibles.includes(categoriasSolicitada)){
    alert('perfecto')
}else{
    alert('ERROR: categoria no disponible')
}


- splice: Nos permite empalmar, Sirve para 3 cosas: eliminar, agregar, remplazar elementos dentro de un arrays. A diferencia del pop, podemos elegir en que posicion queremos modificar. 
Ej:
let nombres = [ 'fede', 'emi', 'pepe']

* Eliminar
nombres.splice(1, 1) // El primer valor que le pasamos es desde que posicion vamos a querer eliminar, y el segundo cuantos valores vamos a querer eliminar.

* Agregar sin eliminar ningun valor
nombres.splice(1, 0, 'hueso') // primer valor: posicion en la empezamos, segundo valor: le indicamos q no eliminamos a nadie, tercer valor: el string que queremos agregar

* Reemplazar( eliminar un valor y agregar otro en su misma posicion)

nombres.splice(1,1,'Natalia')


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- Recorrer un Array solo sabiendo el ID o un dato

// Eliminar un producto solo sabiendo su ID, en este caso 2, podriamos usar el splice pero no sabemos su posicion. Tenemos que buscar la posicion del producto mediante su ID.

function eliminarProductoPorID(id_producto){
let posicionProductoEliminar 

    // Logica para eliminar el producto.
for(let posicion=0; posicion < products.length; posicion++){ // recorremos el array
    let productos = products[posicion] // 
    if(products.id === id_producto){ //con products.id entramos a los id de cada uno de los elementos y le decimos que que verifique si es igual al id que queremos eliminar.
        posicionProductoEliminar = posicion // Para que la variable posicionProductoEliminar valga la posicion del prodcuto que queria eliminar 
        console.log(posicion) // EN la consola va a mostrar ne que posicion esta el elemento quer queremos eliminar
}
products.splice(posicionProductoEliminar, 1)
eliminarProductoPorID(2)
}
}
