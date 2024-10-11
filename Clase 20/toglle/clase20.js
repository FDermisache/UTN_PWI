const contenedorHTML = document.getElementById('contenedor')

const btnOcultarHTML = document.getElementById('btn-ocultar')


const btntext = document.getElementById('btn-text')
const textOculto = document.getElementById('textoOculto')

// Cuando le demos click al boton de ocultar, debe mostrarse por consola 'Has ocultado algo'

function mostrarMensaje(){
    console.log('Has ocultado algo')
}

//Opcion 2
// Referencioar a mi funcion, significa pasar el valor, la tratamos como si fuese una variable. Lo que valia esta funcion se lo transfiero a onclick. Le transferimos el contenido de la funcion. entonces podemos usar "onclick " como si fuese una funcion y la podemos llamar onclick()


btnOcultarHTML.onclick = mostrarMensaje

// OPCION 3: Llamamos al boton y le asignamos lo siguiente : addEventListener, es un metodo, nos sirve para añadir un evento a un elemento de HTML. Que necesita para funcionar (), el tipo de evento, y la funcion

btnOcultarHTML.addEventListener('click' , mostrarMensaje)


// Cuando le demos click al boton de ocultar, debe ocultar el div contenedor 




// Como trabajar con las clases de los elementos desde JS
function ocultarCartel (){
    /* contenedorHTML.style.display = 'none' */  //LE cambiamos el estilo, le pasamos display = none para ocultarlo cuando le damos click. NO ES LA MEJOR FORMA DE HACERLO.
    contenedorHTML.classList.toggle('hidden') // dato que se guarda en el elemento, que nos permite . // toggle nos permite interpolar una clase, logica: si la clase esta, la saca, sino la pone. Funciona como un interruptor. 
}

btnOcultarHTML.addEventListener('click', ocultarCartel)

// Ejercicio clase: 

function mostrarText (){
    let estaOculto = textOculto.classList.contains('hidden') // con el contains le pedimos que verifique si algun elemento tiene el atributo hidden, si lo tiene que haga lo siguiente: 
    btntext.innerText = estaOculto ? 'ver mas' : 'ver menos' // antes de tocar el boton no tiene el hidden, luego de tocarlo se agrega entonces ahi entra el 'ver menos' 
    textOculto.classList.toggle('hidden')
    
}
btntext.addEventListener('click',mostrarText )


