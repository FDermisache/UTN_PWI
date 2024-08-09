<article> = cumple la misma funcion que un div, pero se usa en parrafos, reseñas, textos. Le presta mas atencion al texto, al contenido, ejemplos blogs, reviews, diarios.

<boton> se usa para desencadenar una accion, cuando no cambia la url

# Formularios:

<form>= viene con un atributro, en front end se elimina.

<input>= ingreso de datos, viene con un atributo "Type=text", esto indica que el es para enviar texto, hay diferentes tipos ejem: password, mail,etc.
<submit> -el input type "submit"= desencadena el enviar un formulario. Genera un boton de "enviar"( se puede modificar el mensaje predeterminado agregandole value = "lo que queremos").
-Podemos usar la etique <button> pero hay que ponerle un type submit .. <button type="submit">Lo que queremos</button>
-<required>Para poner que algo sea obligatorio de completar le agregamos el atributro required  ejm: <input type="email" required>
- Hay otros atributros que se pueden usar para "obligar" a que el usuario haga algo ejmplo que el txto que pone sea menor a 10 letras o mayor a 5 ej <input type= "text" minlenghet="5"> para cada input hay algo que obliga a que se puede hacer o no.
- <placheholder>atributo placeholder, se usa en el type text, es el texto que aparece en los formularios para dar una idea de que poner, ejemplo "escribe aqui"

<label for=""> = Etiqueta que indica que hacer, el atributo for le damos un valor nosotros parecido al id, hay que conectarlo con un input, en el caso de nombre, ponemos en el for "nombre" y en el input ponemos id "nombre". Siempre en un formulario tiene que haber un label. Todos los input menos el sumit deben tener un label.
EJEMPLO: <label for="Nombre">Ingrese su nombre:</label>
        <input type="text" id="Nombre">

<textarea name="" id=""></textarea> = Area de texto, se desplega un cuadrado para escribir texto mas largo, debe ir con un label para completar el id.

<input file> = input para adjuntar un archivo.
<inpurt date> = Poner fecha

# En mozilla en la solapa input estan todos los inputs que se usan.
# Todos los input menos el submit deben tener el atributo "name" para desp identificarlo en javascrip





