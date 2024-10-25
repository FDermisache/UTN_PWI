import React from 'react'


/* Si nuestro modulo trabaja con componentes ese modulo debe tener como extension .jsx */
/*  Esta funcion es un componente, decimos que es un componente porque devuelve HTML */
/* Los archvios jsx traen una nueva sintaxis. por ejemplo nos permiten escribir html como si fuera un nuevo tipo de dato. */
/*  SI nuestro archivo tiene componentes, entonces debemos importar a React */

const mostrarMensaje = () => {
  alert('soy un mensaje')
}

function App() {
  return (
    <>
      <h1>Hola mundo</h1>
      <button onClick={mostrarMensaje}>Click</button> {/* Asociamos la funcion mostrar mensaje al boton, cuando en la web toquemos el boton aparecera la alerta */}
    </>
  )
}

export default App  /*  */


/* Como importar algo desde un arhcivo .JS:

- tenemos que ir al archivo js y decirle a lo que queramos importar, que esta disponible hay 3 tipos:
1. export default nombre de lo que queramos importar ( Ahora volvemos al JSX y ponemos import nombre(puede ser cualuier nombre ya que al declararlo en el archivo como import deafult, si o si importams eso) from ./archivo.js) (ESTO ES PARA EXPORTAR 1 SOLA COSA), esto lo ponemos debajo.
2. SI QUEREMOS EXPORTAR VARIAS COSAS ANTES DE DECLARAR CUALQUIER COSA LE AGREAMOS EXPORT, EJ: export function(a,b). ( Volvemos a JSX y lo llaamos "import {nombre, nombre2, nombre3} from './archivo.js'")

- Le podemos cambiar el nombre desde el archivo JSX, EJEMPLO: import {sumar as "Nuevo Nombre"} from './archivo.js'

*/


/* 
Lo bueno de React es que combina el html y JS, ejemplo creamos un <div>Resultado{sumar(1,2)}</div> Por un lado muestra el html "Resultado" y luego lee la funcion de JS y la ejecuta.
Otro ejemplo, Hacer condiciones: <div>
{
nombre ? <h1>Hola {nombre}</h1>
: <h1>HOla desconocido</h1>
}
</div>





*/