import React from 'react'

function App() {
  let num1 = 1
  let num2 = 2
  let estaComprado = true
  let estaLog = false
  let status = 'abierto' | 'cerrado'
  let espacioCons = 10
  let espacioMax = 10
  return (
    <>
      <div className='title'>
        <h1>Hola mundo</h1>
        <h2>Resultado entre sumar {num1} y {num2} es {num1 + num2}</h2> {/* Interpolar JS y JSX */}
        { /* Renderizado condicional */
          estaComprado 
          ? <button>Comprado</button>
          :
          <button>Comprar</button>
        }
        {! estaLog && <button>Logearse</button>}
      </div>
      {status === 'abierto' ?
        <button>Cerrar</button>
        :
        <button>Abierto</button>
      }
      
      
      {
            espacio >= espacioMax - 2 && ( /* "-2" definimos el parametro de que es estar cerca, es una condicion , en este caso si estamos en 8 estamos cerca del espacio Max */
              <div>
                {
                  espacioCons === espacioMax
                  ? <span>Has consumido el espacio máximo</span>
                  : <span>Estás cerca del límite de espacio</span>
                }
                <button>Mejorar plan</button>
              </div>
      )
    }
    </>
  )
}


export default App

/* Los componentes son:
Funciones que devuelven JSX(html)

-Como poner una clase:
En JSX no existe class, se usa className=


Renderizado condicional: Segun la condicion elijo que mostrar.

- Si creamos otra funcion que hicimos otro HTMl la podemos llamar en cualquier parte del archivo de la siguinte forma
<NombreFuncionNueva /> SOLO SE PUEDE RETORNAR UN ELEMENTO DE HTML, Para eso podemos hacer un div padre y meter todo ahi
*/