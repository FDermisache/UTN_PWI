let propiedadNueva = prompt('Ingresame una nueva propiedad al obj')
let valorNuevo = prompt('INGRESAME EL NUEVO VALOR')



let usuario = {
    nombre: 'Federico',
    apellido: 'dermisache',
    edad: 21,
    esCliente: false,
    direccion: {
        pais: 'AR',
        provincia: 'Buenos Aires',
    },
    [propiedadNueva]: valorNuevo  /// Asi conectamos la variable propiedadNueva con el objeto. Asi se agrega al objeto para que aparezca en consola.
}
console.log(usuario)

/* let propiedadAMostar = prompt ('Ingrese la clave que quiere mostrar')

alert(usuario[propiedadAMostar]) */

// Esto esta mal.

/* alert(usuario.propiedadAMostar) 
console.log(usuario['direccion']['provincia']) */


// Crear el objeto producto que tenga titulo, precio, id ,stock,vendedor.

let negocio ={
    'title': 'Negocio',
    'id': 'Ventas',
    'precio': 'Ars 2000',
    'stock': 100,
    'Vendedor': 'Pepe',
}


function saludarUsuario (pepito){
    console.log(`HOLA ME LLAMO  ${usuario.nombre} ${usuario.apellido} y tengo ${usuario.edad}`)

    saludarUsuario(usuario)
}

function crearProducto (titulo, precio, categoria){
    let producto ={
    'titulo': titulo,
    'precio': precio,
    'categoria': categoria,
    'stock': 0,
    'estado': false
    }
return producto
}

let product1 = crearProducto('Monitores',4000, 'tecnologia' )



function mostrarProducto(productoo){
    let HTML = `
    <div>
    <h3>${product1.titulo}</h3>
    <span><b>Precio:</b>${product1.precio}</span>
    <span><b>Categoria:</b>${product1.categoria}</span>
</div>
`
document.write(HTML)

}
mostrarProducto(product1)