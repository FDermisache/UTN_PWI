# Como trabajar el DOM: Document objet model: El objeto dom contiene una replica exacta como objeto con todos los datos de nuestro HTML

- Si el objeto(document) es modificado, el HTML tambien se ve modificado.
- document es una varible global, creada al cargarse el script 


document: contiene todos los datos del html 

console.dir = si los objetos estan predeterminamos a mostrase de una forma, el dir los hara ver como objetos

console.dir(document)


Modificar el HTML:

document.getElementById(): nos permite busacr un elemento en particular en el html, mediante el ID

Ej: 
HTML:
<h1 id ='titulo'>Hola<h1>

JS:
let titulo = document.getElementById('titulo')

console.dir(titulo) : vemos todas las propiedades de la etiqueta.



# Como trabajar html desde JS

- Modificar el valor de una propiedad desde JS: Esto sirve para modificar las propiedades dinamicas, ejemplo le pedis el nombre al usuario y crear una varible llamada nombre, luego lo mostras en el html dependiendo del nombre que ponga cada usuario.

titulo.innerText = 'pepe'

let nombre = prompt('Ingrese su nombre')
titulo.innerText = 'Hola' + nombre


- Si queremos cambiar los estilos desde JS

titulo.style.fontSize = '90px'

- Propiedad inner.HTML: Si tiene formato HTML, se va a mostrar en la web como HTML, si usamos innerText  se va a mostrar em la web toda la linea  <h2>Hola</h2>

let contenedorHTML = document.getElementById('contenedor')

let contenido = `
<h2>Hola</h2>
<h2>Hola</h2>
<h2>Hola</h2>
`

contenedorHTML.innerHTML= contenido


# TODO LO QUE SEA ARRAYS O OBJETOS LOS DECLARAMOS CON CONST


# RENDERIZADO CONDICIONAL: bajo ciertas condiciones vamos a mostrar diferentes cosas.
- Operador ternario: es una forma de hacer condiciones en JS, parecido a un IF.

- Sintaxis: condicion ? caso_verdadero : caso_falso

?: si es verdadero
: caso contrario


let dia = 'martes'
let condicion = dia === 'martes'


SI es martes, decir 'odio este dia', sino decir 'por suerte hoy no es martes'
console.log(condicion ? 'odio este dia' : por suerte hoy no es martes)

Ej: clase19.JS 

