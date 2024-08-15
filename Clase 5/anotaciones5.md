# Etiquetas semanticas: Son etiquetas que existen, pero no cumplen una funcion especifica, lo que tiene es un signifcado pra el navegador.

<Article:> Se usa para contenedores donde la importancia del contenedor radica en el parrafo. 
<Header:> Se usa para marcar el cabezal de una pagina. (cabezal: Donde esta el logo, la barra de busqueda,etc.) No siempre tiene q haber un header, pero es lo mas comun.
<Footer:> Pie de pagina, lo que esta debajo de la pagina, donde esta el contactanos, numero de telefono, derechos reservados, redes,etc.
<aside:> Significa que el contenido va a estar a un costado. 
<main:> Nos permite decir el contenido de nuestra pagina, todo lo que no es header y footer, ni aside. 
<nav:> Cuano hagas una lista de links de navegacion en la pagina debes usar nav(por ejemplo en ML son las secciones que aparecen en el encabezado, conocenos, ofertas, envios gratis, etc.), Puede haber links y sublinks, como las paginas que se despliegan varias opciones. 
Ej: <nav>
<a> href=""> link 1</a>
</nav>
<section> Es para separar las diferentes secciones de la pagina, cortar un tema y arrancar otra. A diferencia del div esta indica mas claramente que son secciones distintas. Dentro de la seccion se puede usar div o articulos.

# Listas
<ul> Lista desordenada: La diferencia entre lista ordenada y desordenada es que la lista ordenada tiene que tener un sentido ejemplo una guia de estudio,la lista desordenada no importa en que lugar este cada cosa.
<li> item
<ol> Lista ordenada, se usa para describir pasos y los items se usa li

Para generar jerarquia en las listas y hacer que dentro de un item haya otros lo hacemos asi:
EJ: <ul>
        <li>
            Css
        </li>
        <li>
            Javascrip
        </li>
        <ul>
            <li>
                Node js
            </li>
            <li>
                Pipipis
            </li>
        </ul>
        <li>
            Html
        </li>
    </ul>

# Abreviaturas (EMMET)
En Visual Studio existen abriviaturas, escribiendo con el gancho de cierre le puedo ir diciendo que es lo que va a estar dentro de casa cosa. 
+ = es ponerlo al lado ejemplo <a> href="</a> <span>
* = Multiplica lo que quiero 
nav>ol>li*3> a + span 

Multicursor: Alt+ click derecho, para poder usar el curso en varias lineas.


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











<li> <a href="">Primeros pasos con HTML</a></li>
                <li><a href="">¿Que hay en la cabecera?Metadatos en HTML</a></li>
                <li><a href="">Fundamentos de texto en HTML</a></li>
                <li><a href="">Crear Hipervinculos</a></li>
                <li><a href="">Formateo de texto avanzado</a></li>
                <li><a href="">Estructura web y documentacion</a></li>
                <li><a href="">Depurar en HTML</a></li>
                <li><a href="">Marcando una Carta</a></li>
                <li><a href="">Estructuracion de una pagina de contenido</a></li>