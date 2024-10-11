let mails = [
    'pepe@gmail.com',
    'pe@gmail.com',
    'maria@gmail.com',
]

// Por cada mail de la lista quiero que por consola diga mail enviado a X usuario

console.log(`Mail enviado a ${mails[0]} `) // en este caso solo estoy mandando el primer mail de la lista

// Una forma escalable es usar el Bucle For, el bucle for servia cuando sabemos cuantas veces se va a repetir el bucle. para saber cuantos mails hay usamos mails.length, Esto se llama recorrer arrays.

for(let posicion = 0; // el iterador, en este caso se llama posicion, empieza en 0 ya que lo usamos como la posicion del array, en este caso va a ir de 0 a 2
    posicion < mails.length;
    posicion++) //poner el lenght tiene un problema ya que siempre esta uno por delante, si tenemos 3 elementos el lenght va hasat el 4. 


{
    console.log(`mail enviado a ${mails[posicion]}`)
}



// Practica en clase: Por cada producto vendido, deberas mostrar una alerta ' Has vendido {producto} Exitosamente.

let productosVendidos = [
    'teclado',
    'Monitor',
    'celular'
]

for (let i = 0;
    i < productosVendidos.length;
    i++
){
    alert (`Has vendido ${productosVendidos[i]} exitosamente`)
}

// Por cada producto vendido vamos a usar un document.write() donde pasaremos un string con el siguiente formato

for (let i = 0;
    i < productosVendidos.length;
    i++
){
let html =
`<div>
    <h3>${productosVendidos[i]}</h3>
    <button>Comprar</button>
    <hr/>
</div>`
;
document.write(html)

}

for(let pepe of productosVendidos){  // A la variable let le ponemos cualquier nombre que queramos.
    document.write(

    `<div>
    <h3> Has vendido: ${productosVendidos}</h3>
    <button>Comprar</button>
    <hr/>
</div>`
)
}

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

