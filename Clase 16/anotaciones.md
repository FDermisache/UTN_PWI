# Objetos: Va todo con comillas.
'Clave': 'valor'. Puede ser string, boolean. otro objeto,number

let usuario = {
    'nombre': 'Federico',
    'apellido': 'dermisache',
    'edad': 21,
    'esCliente': false,
    'direccion': {
        'pais': 'AR',
        'provincia': 'Buenos Aires',
    }
}


// Se pueden crear propiedes al objeto Ej:

usuario.dinero = 4000

// Se le puede reasignar valores EJ:

usuario.esCliente = true

// Podemos llamar a propiedas que no existan Ej:

console.log(usuario.propiedadRARA)

El resultado de esto es Undefind

// Eliminar propiedas (MAlA PRACTICA ya que del usuario salen otras cosas, por lo cual si borro una propiedas y otra cosa depende de esa propiedad, ya no va a funcionar.)

delete usuario.edad




// Notacion de corchetes: Forma de acceder


1. console.log(usuario) // para que aparezca en la consola

2. si queremos llamar a algo en especifico..

console.log(usuario['nombre'])

3. Si queremos llamar al pais, que es un objeto dentro de otro objeto se hace asi:

console.log(usuario['direccion']['pais'])



// Notacion de puntos:

4. Forma mas resumida:
console.log(usuario.esCliente)


- Esta forma solo sirve si la clave esta toda junta, Si en vez de esCliente esta escrito es cliente, no se puede usar esta notacion, se debe usar la notacion de corchetes.

- Tampoco pueden tener guiones o operadores.

- Si se puede usar signo pesos, guion bajo, camelCase.

# Datos complejos: Funciones, arrays, objetos..


------------------------------------------------------------------------------------------------------------------------------------

Ejercicio 1: Crear una funcion llamada crearProducto
la funcion recibira titulo, precio y categoria del producto
INICIALMENTE EL PRODUCTO TENDRA stock en 0 y la propiedad estado en false
La funcion debera devolver el producto creado y luego para verificar que este correcto deberas mostrarlo en la consola.


RESUELTO:
function crearProducto(titulo, precio, categoria) {
    let producto = {
        'titulo': titulo,
        'precio': precio,
        'categoria': categoria,
        'stock': 0,
        'estado': false
    }
    return producto
}
let ejemplo1 = crearProducto("nombre",20,"categoria 1")
console.log(ejemplo) // Le pasamos los parametros, podemos crrar varios ejemplos con diferentes parametros.

let ejemplo2 = crearProducto ('fede', 33 , 'robot')



EJERCICIO 2:
Crear una funcion llamada mostrarProducto, la funcion recibira el producto previamente creado y construira un string con el siguiente formato
`
<div>
    <h3>producto.nombre</h3>
    <span><b>Precio:</b>$producto.precio</span>
    <span><b>Categoria:</b>producto.categoria</span>
</div>
`
Luego dicho string debera pasarse a la funcion document.write()
Ejemplo:
let HTML = `<div></div>`
document.write(HTML) (editado) 


RESUELTO: 

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