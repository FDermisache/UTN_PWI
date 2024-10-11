// crear en HTML un span que tenga un id que sea 'Resultado'
//solicitar al usuario 2 numeros y sumarlos
// mostrar en el span : ' EL resultado de sumar { numero1} y {numero2} es {resultado}

/* let numero1 = prompt('ingrese un numero')
let numero2 = prompt('ingrese el segundo numero')
let resultado = Number(numero1) + Number(numero2)

document.getElementById('resultado')
resultado.innerText = `EL resultado de sumar ${numero1} y ${numero2} es ${resultado}`

let contenedorHTML = document.getElementById('contenedor')


let producto = {
    nombre: 'Tv samsung',
    precio : 400,
    stock : 4
}

let contenido = `
<h2>${producto.nombre}</h2>
<span> precio: ${producto.precio}</span><br>
<span>Unidades Disponibles: ${producto.stock}</span>
`
contenedorHTML.innerHTML= contenido */


// Tarea de clase: Hacer un usuario de slack 

const usuSlack = {
    nombre : 'Federico Dermisache',
    avatar : '',
    mail: 'dermisache3@gmail.com',
    ultimaConexion : '20:37'
}

const usuario = document.getElementById('usuSlack')

usuario.innerHTML = `
<div> </div>
<img src => ${usuario.avatar}
<h2> Nombre de usuario: ${usuario.nombre} </h2>
<div> 
<span> Email:${usuario.mail}</span>
<span> Ultima Conexion: ${usuario.ultimaConexion}</span>
</div>
`
// --------------------------------------------------------------------------------

// Mostar por cada producto del arrays, un prodcuto en el HTML

const productos = [
    {
    nombre: 'Tv samsung',
    precio : 400,
    stock : 4,
    comprado: false
    },

    {nombre: 'Tv samsung 43',
    precio: 10000,
    stock: 10,
    comprado : true
    }
]

const productsContainerHTML = document.getElementById('products-containers')


// Habria que repetir esto por cada producto, en este caso 2 veces, pero si tenes 100, 100 prodcutos. ES POCO ESCALABLE


`
<div>
<h2>${productos[0].nombre}</h2>
<span> precio: ${productos[0].precio}</span><br>
<span>Unidades Disponibles: ${productos[0].stock}</span>
</div>
`
`
<div>
<h2>${productos[1].nombre}</h2>
<span> precio: ${productos[2].precio}</span><br>
<span>Unidades Disponibles: ${productos[3].stock}</span>
</div>
`

// por cada producto del array de prodcutos deberas crear un div y deberas guardarlo en el resultado. ( Ahora si agregamos 1000 productos se va a justar automaticamente)

let resultadoo = ''
for (const produc of productos){
    // si el prodcuto cuesta mas de 500, vamos a decir en un span, que es muy caro
    let productoCaro = produc.precio > 500
    let prodcuCOmprado = produc.comprado === true
    let cantidadStock = produc.stock = 0
    
    resultadoo += `
<div>
    <h2>${produc.nombre}</h2>
    <span> precio: ${produc.precio}</span><br>
    <span>Unidades Disponibles: ${produc.stock}</span>
    <button> Comprar </button>
   ${
    productoCaro ? '<span>el producto es caro</span>' : ''
   }
   ${
    prodcuCOmprado ? '<button>Comprado</button>' : '<button> Comprar </button'
   }
   ${
    cantidadStock ? '<span>Ya no quedan unidades disponibles</span>' : '<span> Unidades disponibles: ${producto.stock} </span>'}
</div>
`
}
productos.innerHTML= resultadoo


// Clase tarea: Si el prodcuto esta comprado, debera decir comprado en vez de comprar.
// (HECHO)
