Html lang= "en" = define el lenguaje del navegador, se puede codear en español, pero lo vera gente que vea paginas en ingles, y si esta activado el traductor por mas que este escrito es español lo va a querer traducir.

meta charset="UTF-8" = Configuracion de caracteres, tildes, comas etc.

meta name="viewport" content="width=device-width, initial-scale=1.0" = indica que la pagina sea igual al ancho del dispositivo con una escala 1 a 1


viewport= todo el recuadro que se ve dentro de la pagina desde abajo de la barra de navegacion hasta la barra de herramientas.

Etiquetas mas conocidas:
<h1> = Texto o titulo con mas jerarquia ( puede haber mas de 1, pero por lo gneral es 1)
las etiquetas de heading (h1,h2,h3,h4,h5,h6) va por jerarquia, el 1 el mas alto el 6 el mas bajo, dependiendo el que uses el texto va a ser mas chico o mas grande.
Se tiene que poner las cosas importantes, las que den jerarquia a la pagina.

<p>= Para hacer parrafos, texto corto e importante no es un texto.
<lorem> Texto de relleno para probar la pagina y el posicionamiento del texto, luego lo cambiamos
<span> = texto muy cortos (decoracion), si no es un boton, un h1, un link, y es muy corto es un span 
<a> = ancla a pagina externa, te cambia la dirrecion de la pagina, te redirige a otra pagina.( para que abra una pagina nueva y no cierre la pagina de la cual estamos usando el ancla, luego del link ponemos " targert= " _blank" ").

<div> = division de contenido, dentro de esta ponemos las diferentes etiquetas que queremos dividir. Tambien contiene contenido 

Generar link para moverme a otra solapa de mi pagina <a>href "./" (titulo) </a> y ahi nos van a saltar las diferentes carpetas, seleccionamos cual queremos. 
Para volver a la pagina principal usamos <a> href "../index.html"> </a> cada ves que queramos salir de una carpeta(volver atras) se usa ../ , en el caso que haya 2 carpetas es ../../

<id> Atributo global, se puede usar en cualquier etiqueta, es para darle una identificacion especifica, no se puede repetir. 
Si quisieramos generar un link para ir al Id especifico, usamos el <a> href"#(nombre que le pusimos al id)> Titulo </a>

Tambien se puede combinar el generar link dentro del codigo y volver para atras con el id especifico ../../index.html#recet

