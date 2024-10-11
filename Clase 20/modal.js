const btnRegistre = document.getElementById('btn-registre')
const modal = document.getElementById('modal-conteiner')
const btnCerrar = document.getElementById('btn-close')


function mostrarModal  (){
    modal.classList.remove('hidden')// en este caso eliminamos de la clase el hidden, entonces se muestra el modal
}


function closeModal (){
    modal.classList.add('hidden') // en este caso añade la clase hidden, por lo cual se cierra
}


btnRegistre.addEventListener('click', mostrarModal)
btnCerrar.addEventListener('click', closeModal)

// SI la funcion la vamos a usar una vez, podemos crear una funcion anonima
/* btnCerrar.addEventListener('click', function(){
    modal.classList.add('hidden')
})
 */


const formularioHTML = document.getElementById('formulario')

function enviarForm (evento){
    // los formularios por defecto, recargar la pagina, Tenemos que prevenirlo ya que viene por defecto. para eso pasamos el parametro evento en la funcion y luego evento.preventDefault()
    evento.preventDefault()
    console.log('se envio el formulario')
    const formulario = evento.target
    console.log(formulario.noombre.value)// Asi podemos capturar que es lo que escribio el usuario en el input, y lo mostramos por

}

formularioHTML.addEventListener('submit', enviarForm)