# Eventos: Son acciones que desencadenan acciones. EJemplo darle click a algo. 

Las acciones sew suelen guardar en funciones.

para que al darle click se haga el evento se puede hacer de 3 formas:


MALA PRACTICA: 
- La primera opcion es ir al HTML y pasarle el atributo onclick"" y entre comillas pasarle la funcion que creamos en Js  EJ: <button id="btn-ocultar" onclick="mostrarMensaje()">ocultar</button>.

- Llamar al boton y asignarle la funcion al propiedad onclick 

EJ: Referencioar a mi funcion, significa pasar el valor, la tratamos como si fuese una variable. Lo que valia esta funcion se lo transfiero a onclick. Le transferimos el contenido de la funcion. entonces podemos usar "onclick " como si fuese una funcion y la podemos llamar onclick()

EJ:
btnOcultarHTML.onclick = mostrarMensaje


- addEventlistener: s un metodo, nos sirve para añadir un evento a un elemento de HTML. Que necesita para funcionar (), el tipo de evento, y la funcion.

EJ: 
btnOcultarHTML.addEventListener('click' , mostrarMensaje)

- Como hacer una modal, Ejemplo en JS y HTML MODAL


# Funcion anonima. 
// SI la funcion la vamos a usar una vez, podemos crear una funcion anonima, no se le declara nombre, y se usa solo ahi.
btnCerrar.addEventListener('click', function(){
    modal.classList.add('hidden')
})


- classList: EN EL ARCHIVO CLASE20.JS

- Usar en la classList remove y add: EJemplos 

function mostrarModal  (){
    modal.classList.remove('hidden')// en este caso eliminamos de la clase el hidden, entonces se muestra el modal
}


function closeModal (){
    modal.classList.add('hidden') // en este caso añade la clase hidden, por lo cual se cierra
}



# Eventos extras: W3schools HTML events

- keydown = se activa cuando el usuario esta presionando una tecla
- keyup = se activa cuando el usuario deja de presionar la tecla.
Para saber que tecla toco, a la funcion le pasamos un parametro ej: function(evento), luego hacemos un console.log(evento) y en "key" nos mostrara que letra es. Luego con esa key podemos hacer un if o else (if (evento.key == 'p'){ console.log('el juego esta en pausa')})
- Tambien se puede guardar que teclas se tocaron en un array, Ejemplo en la clase 20 
- preventDafault : evitar que copien algo de la web, Ejemplo un texto o una contraseña.

- submit: Se activa cuando se activa un formulario. ( para los input, el id, pasa a llamarse name )



# Target de un evento: Es de donde se ejecuto el evento. Para que necestio esto, Lo podemos guardar en una variable y ver que envia el usuario. 
