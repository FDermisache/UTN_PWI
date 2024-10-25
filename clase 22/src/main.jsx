import { createRoot } from 'react-dom/client' // Import: Importamos/ Que importamos= {createRoot}/ from: de donde / lo importamos de la carpeta react-dom ques es una depedencia, se encuentra en node modules*/
import App from './App.jsx' // Llamamos a la funcion "App" del archivo/modulo de App.jsx
import React from 'react'

createRoot(document.getElementById('root')).render(
  <App />

)

/*  createRoot es una funcion a la cual le puedo pasar el elemento html del doom donde queremos renderizar nuestra app de react */

createRoot(document.getElementById('Root')).render(
  <App />
)

// La 'App' es un componente, como diferencio un componente de una function normal? - Vamos al archivo y si retorna HTML es un componente y para invocarlos hay que llamarlos como en html <>.
