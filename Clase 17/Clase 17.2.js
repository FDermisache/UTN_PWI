let products = [ // Creamos un array y dentro varios objetos.
    {
        title: 'Tv samsung 32',
        precio: 1000,
        categoria: 'tecnologia',
        Id: 1
    },
    {
        title: 'Tv samsung 42',
        precio: 4000,
        categoria: 'tecnologia',
        Id: 2
    },
    {
        title: 'Tv samsung 50',
        precio: 5000,
        categoria: 'tecnologia',
        Id: 3
    }
]

// Eliminar un producto solo sabiendo su ID, en este caso 2, podriamos usar el splice pero no sabemos su posicion. Tenemos que buscar la posicion del producto mediante su ID.

function eliminarProductoPorID(id_producto){
let posicionProductoEliminar 

    // Logica para eliminar el producto.
for(let posicion=0; posicion < products.length; posicion++){ // recorremos el array
    let productos = products[posicion] // Guardamos en "Productos", cada vez que recorremos el array se guarda la posicion del elemento que se recorrio, La primera vez "productos"  va a valer "Tv samsung 32" y despues 42 y 50
    if(products.id === id_producto){ //con products.id entramos a los id de cada uno de los elementos y le decimos que que verifique si es igual al id que queremos eliminar.
        posicionProductoEliminar = posicion // Para que la variable posicionProductoEliminar valga la posicion del prodcuto que queria eliminar 
        console.log(posicion) // EN la consola va a mostrar ne que posicion esta el elemento quer queremos eliminar
}
products.splice(posicionProductoEliminar, 1)
eliminarProductoPorID(2)
}
}