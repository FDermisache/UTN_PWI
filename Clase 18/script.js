let productos = [
    {
        titulo: 'Coca cola',
        precio: 1000,
        descripcion: 'Bebida con azucar',
        stock: 10,
        id: 1
    },
    {
        titulo: 'Pepsi',
        precio: 2000,
        descripcion: 'Bebida con azucar',
        stock: 8,
        id: 2
    },
    {
        titulo: 'Fanta',
        precio: 3000,
        descripcion: 'Bebida con azucar',
        stock: 6,
        id: 3
    },
    {
        titulo: 'sprite',
        precio: 4000,
        descripcion: 'Bebida con azucar',
        stock: 15,
        id: 4
    }
]

// hacer una funcion que dado un ID me permita obtener un producto por su id:

// Esto es una JSDocs: Si nos paramos sobre "obtener producto por id" nos aparece una descripcion de la funcion, Es la documentacion.
/**
 ** Producto_id es un any, parametro a buscar
 ** producto objeto : es el producto q tengo q recorrer
 ** productos: arrays
 */

function obtenerProdcutoPorID (producto_ID){
    for (let producto of productos){
        if(producto.id === producto_ID){ // comparamos, con el for of va recorriendo el array uno por uno, empieza desde el principio, producto.id = 1 producto_ID = 3, al no ser igual lo sigue recorriendo hasta llegar al dato pasado abajo.
           /*  console.log(producto)  */ // NO ES REUTILIZABLE  
        return producto
        }
    }
}
let producto_encontrado = obtenerProdcutoPorID(3) 
console.log('Producto encontrado', producto_encontrado)// Le pasamos el ID que nos Dieron de dato


// Una funcioin que nos permita obtener a todos los productos que su valor sea mayor a 1100( Si quiero devovler mas de un producto, retorno un array

function obtenerProductosMayoresA(precio_minimo){ // le pasamos un parametro para que el valor no sea constante,que pueda ir cambiando segun lo que le pasemos abajo.
    let array_resultante = []
    for ( let producto of productos){
        if(precio > precio_minimo)
            array_resultante.push(producto)
    }
    return array_resultante
}

let productosA1100 = obtenerProductosMayoresA(900)  // llamamos a la funcion, le pasamos el precio que queremos y lo guardamos en una variable para guardar el resultado y despues lo podamos mostrar por console.log

console.log(productosA1100)

// Crear una funcion que me permita dado un id, obtener la posicion en el array. SI no lo encuentra debe devolver -1. RECOMENDACION: ver que bucle conviene usar( no el for of).

function obtID (prod_id){
    for(let i = 0; i < productos.length; i++){
        if(productos[i].id === prod_id){
            return i
        }
    }
    return -1
}




/* ---------------------------------------------------------------------------------------------------------------------- */

