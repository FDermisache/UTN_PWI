# HTML:
-Html lang= "en" = define el lenguaje del navegador, se puede codear en español, pero lo vera gente que vea paginas en ingles, y si esta activado el traductor por mas que este escrito es español lo va a querer traducir.

-Meta charset="UTF-8" = Configuracion de caracteres, tildes, comas etc.

-Meta name="viewport" content="width=device-width, initial-scale=1.0" = indica que la pagina sea igual al ancho del dispositivo con una escala 1 a 1.

-Viewport= todo el recuadro que se ve dentro de la pagina desde abajo de la barra de navegacion hasta la barra de herramientas.

-Las paginas web estan compuestas de elementos, Ejemplo: button 
Los elementos se expresan en *Etiquetas*.
Tambien existen los atributos:

Ejemplo 1= input: elemento
type: atributo
file: el valor del atributo
<input required type="file" >

# Estilos en linea: Usar CSS desde HTML.
Vamos a la etiqueta y le agregamos style="", luego se despliega un listado de propiedades.
EJ: <h1 style="color: blue;">Titulo Principal </h1>, si le queremos poner un color de fondo le agregamos despues del punto y coma el <background color>. Si queremos que la fuente sea mas grande, le agremoas <font-size:10px> (para lo que son tamaños hay unidades ej pixel)
Los estilos en linea no son muy recomendables ya que si tenes muchos titulos tenes q copiar y pegar en cada uno el style, y si queres el mismo diseño en cada uno, es poco escalable.

# Style en el head
Podemos poner en el head la etiqueta <style> y le indicamos al navegador que el texto dentro de esta etiqueta tiene que ser interpetrado como css

Para poder darle estilos debemos llamar a cda item con selectores, los selectores son asi:
EJ: Si queremos que mas etiquetas lo tenga, le agregamos a la etiqueta otro
h1,h2{
    color:
    back-ground:
}

# Etiquetas mas usadas:
<aside>
<main>
<body>
<article>
<section>
<nav>
<footer>

<h1> = Texto o titulo con mas jerarquia 
las etiquetas de heading (h1,h2,h3,h4,h5,h6) va por jerarquia, el 1 el mas alto el 6 el mas bajo, dependiendo el que uses el texto va a ser mas chico o mas grande.

<p>= Para hacer parrafos, texto corto e importante no es un texto.

<lorem> Texto de relleno para probar la pagina y el posicionamiento del texto, luego lo cambiamos.

<span> = texto muy cortos (decoracion), si no es un boton, un h1, un link, y es muy corto es un span.

<a> = ancla a pagina externa, te cambia la dirrecion de la pagina, te redirige a otra pagina.( para que abra una pagina nueva y no cierre la pagina de la cual estamos usando el ancla, luego del link ponemos " targert= " _blank" ").

<div> = division de contenido, dentro de esta ponemos las diferentes etiquetas que queremos dividir. Tambien contiene contenido 

Generar link para moverme a otra solapa de mi pagina <a>href "./" (titulo) </a> y ahi nos van a saltar las diferentes carpetas, seleccionamos cual queremos. 
Para volver a la pagina principal usamos <a> href "../index.html"> </a> cada ves que queramos salir de una carpeta(volver atras) se usa ../ , en el caso que haya 2 carpetas es ../../

<id> Atributo global, se puede usar en cualquier etiqueta, es para darle una identificacion especifica, no se puede repetir. 
Si quisieramos generar un link para ir al Id especifico, usamos el <a> href"#(nombre que le pusimos al id)> Titulo </a>

Tambien se puede combinar el generar link dentro del codigo y volver para atras con el id especifico ../../index.

<article> = cumple la misma funcion que un div, pero se usa en parrafos, reseñas, textos. Le presta mas atencion al texto, al contenido, ejemplos blogs, reviews, diarios. Se usa para contenedores donde la importancia del contenedor radica en el parrafo. 

<ul> Lista desordenada: La diferencia entre lista ordenada y desordenada es que la lista ordenada tiene que tener un sentido ejemplo una guia de estudio,la lista desordenada no importa en que lugar este cada cosa.
<li> item
<ol> Lista ordenada, se usa para describir pasos y los items se usa li

Para generar jerarquia en las listas y hacer que dentro de un item haya otros lo hacemos asi: Ejemplo clase 5 anotaciones.

<boton> se usa para desencadenar una accion, cuando no cambia la url.

# Archivos Multimedia:
# Imagenes
1. Descargar una imagen y ponerla en la misma carpeta del proyecto.
2. creamos la carpeta assets y dentro de esa hacemos la carpeta imagenes, audio,video y ponemos lo que corresponda en cada uno. 
3. Para ponerlo en el proyecto usamos la etique img, tiene dos atributros, el primero src(aca ponemos una dirrecion relativa = ./assets (clase 4)) Las imagenes se pueden comprimir para que pesen menos y la pagina no se relentice. Alt = Texto alternativo que va a tener la imagen(si la imagen no carga es el texto que va a mostrar. tiene que estar siempre)

# Audio
1. Descargar un audio y cargarlo en la carpeta
2. usar la etiqueta siguiente =>
<audio> Tiene un src: hacer lo mismo que las imagenes y para que funcione hay que agregarle el atributro controls, si no no va ni aparecer en la web.
atributo <loop> para que termine y se vuelva a reproducir(No se usa.)

# Video
1. descar video y cargarlo en la carpeta
2. usar la siguiente etiqueta =>
<video> tiene un src hacer lo mismo que con img, hay que poner el atributo controls para que funcione.
El loop si se usa en el video. Tener en cuenta que el video tarda en cargar ya que es una de las cosas mas pesadas. 

<iframe> cargar una pagina dentro de tu pagina, se puede configurar altura y ancho. Es para poner un video de youtube  ya que el video viene optimizado.( entras a yotube pones compartir y tocas la opcion con los don angulares, ya te da el iframe )

# Imagenes vectoriales: son los icono que tinen la pagina, se pueden buscar en internet y por lo general te dan el codigo html, o podes descargar la imagen hacer una carpeta .svg y luego en el archivo de html llamarla con ./ BOOTSRAP ICONS
# Para hacerlo mas facil vamos hasta abajo de todo de bootsrap copiamos el codigo de CDN, lo pegamos en nuestro head y luego en cada icono que queramos de la pagina copiamos el codigo de "ICON FONT"

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

<inpurt date> = Poner fecha.

<input Radio>= genera un circulo para poder elegir opciones, para que se pueda selecionar uno a la vez, todos tienen que tener el mismo name:
Ej= <label for="html">HTML</label>
        <input type="radio" id="html" name="Elegi1">
        <label for="css">CSS</label>
        <input type="radio" id="css" name="Elegi1">

<chekbox> Si queremos un selector multiple usamos <input checkbox>

<selec> y <option> = desplega una lista para elegir. Para poner un atributro por defecto(que aparezca siempre primero) le agregamos "selected", y una vez que elijan una opcion y salga la opcion por defecto, la tenemos que desabilitar con la opcion disabled.
EJ: 
        <label for="pais">Seleccionar un pais</label>
        <select name="pais" id="pais">
            <option value="AR">Argentina</option>
            <option value="BR">Brasil</option>
            <option value="FR">Francia</option>
            <option value="NULL" selected disabled>No seleccionado</option>
        </select>
En name y id ponemos lo mismo. El value es lo que llega al servidor, no afecta al usuario.

# Etiquetas semanticas: Son etiquetas que existen, pero no cumplen una funcion especifica, lo que tiene es un signifcado pra el navegador.

<Header:> Se usa para marcar el cabezal de una pagina. (cabezal: Donde esta el logo, la barra de busqueda,etc.) No siempre tiene q haber un header, pero es lo mas comun.

<Footer:> Pie de pagina, lo que esta debajo de la pagina, donde esta el contactanos, numero de telefono, derechos reservados, redes,etc.

<aside:> Significa que el contenido va a estar a un costado. 

<main:> Nos permite decir el contenido de nuestra pagina, todo lo que no es header y footer, ni aside. 

<nav:> Cuano hagas una lista de links de navegacion en la pagina debes usar nav(por ejemplo en ML son las secciones que aparecen en el encabezado, conocenos, ofertas, envios gratis, etc.), Puede haber links y sublinks, como las paginas que se despliegan varias opciones. 
Ej: <nav>
<a> href=""> link 1</a>
</nav>

<section> Es para separar las diferentes secciones de la pagina, cortar un tema y arrancar otra. A diferencia del div esta indica mas claramente que son secciones distintas. Dentro de la seccion se puede usar div o articulos.

