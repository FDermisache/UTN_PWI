Normalizaciones en el css(cosas que van al principio):
@import con la fuente que queremos importar, luego ponemos el font-family,etc. 
box-sizing: Para que se tomen los valores desde el borde y no modifique el tamaño.


# Fuentes
-Pagina para fuentes : Google fonts
-Los pesos de la fuente, es para darle mas importancia a un texto que otro, se recomienda usar 3/4 en una pagina profesional, se puede usar nas de una fuente, pero hay que elegir una para la mayoria de texto o titulos.

Para usar las fuentes de google primero tocamos "get font", luego "get embed code", Luego hay dos opciones: Link y @import
Link(poco recomendable por si tenes mas de una pagina y queres usar las mismas fuentes): te da un codigo para pegar en el HEAD, que es un archivo css.
@import: En este caso copiamos desde donde dice @import hasta el punto y coma(NO LA ETIQUETA) y lo pegamos en el css directamente, Los import siempre van arriba de todo(esto le dice al navegador que solicite la fuente de la URL), mas recomendable ya que si tenemos varios archivos HTML solo tenemos que llamar al archivo css. 

-Tdo lo anterior es para poder usarlo, ahora tenemos que ir a las etiquetas que queramos modificar la fuente y usar el "Font-family" que nos brinda la pagina.

- Una vez que tengamos defina la fuente, no es recomendable poner la fuente en las etiquetas como <p>, <a>, directamente en el archivo css llamamos a todos los elementos con *{font-family: fuente X}, asi toda la pagina tiene la misma fuente, y si queremos cambiar alguno en especifico ahi si lo ponemos dentro de la etiqueta correspondiente.

# Box-modeling

-Existen 4 capas: Contenido/Padding/Border/Margin todos los elementos tienen estas capas.
# Siempre al empezar un archivo CSS hay que poner la propiedad box-sizing: Para que no aumente el tamaño del contenido, ya que por lo general tiene un tamaño especifico, se usa la propiedad box-sizing:border-box lo que hace esto es que se toma el 200x200 desde el borde

El <contenido> lo definimos con Withd y height.
El padding se define con la etiquta <padding> (tiene 4 valores izq,der,abajo,arriba):
/* Ponemos el padding cuando queremos que haya un espacio entre el texto y el borde de la caja, en este caso le indicamos que queremos una separacion a la derecha de 10 pixeles, la pagina paso de ser 200x200 a 210x200, cada vez que le agrege un padding(no importa si arriba,abajo,izq,derech) se va a sumar a los pixeles del contenido*/
/* Para que no aumente el tamaño del contenido, ya que por lo general tiene un tamaño especifico, se usa la propiedad box-sizing:border-box lo que hace esto es que se toma el 200x200 desde el borde, esto hace que el padding se va a contar del borde para dentro, esto hace que no modifque el valor apesar de poner los padding. Se recomienda ponerlo globalmente para todas las etiquetas.*/
/* Para no tener que estar escribiendo 4 etiquetas padding left,right,etc. Directamente ponemos padding 10px(esto hace que de todos los lados tenga 10px). 
    Ejem: padding: 10px 
    Si le ponemos dos valores el primer valor va a ser verticalmente(arriba,abajo) y el segundo horizontalmente(izq,derecga)
    Ejem: padding: 10px 20px;
    Si le ponemos 3 valores, el primer valor va hacer hacia arriba, el segundo horizontal(ambos lados) y el tercero padding hacia abajo
    Ejem: padding 10px 20px 30px
    Si ponemos los 4 valores 1.Arriba 2.derecha 3.abajo 4. izquierda
    Ejem: padding 10px 20px 30px 40px
*/
<Border> Nos permite hacer un borde, si esta el box-sizing el borde se va a calcular hacia adentro. Dentro de la etiqueta tenemos que determinar el borde, como va a ser la linea(solida,punteada,etc) y el color. Se puede configurar cada lado del borde, podemos poner de un lado linea punteada, otro sin borde, otro color, etc.
 EJM: border:3px solid black;

<Margin> Va por fuera de la caja de borde, espacio externo entre el borde y lo de afuera.
margin-left: 20px; (Hacemos que la caja se separa 20px hacia la derecha). /* Se cumple al igual que padding la abreviatura de escribir los valores. */


# Tipos de elementos: inline, block, inline-block

<inline> a, span, label, b, strong, i , em 
<block>   Div,article, body, header,  footer, h1..h6, p, aside, section, main, nav, form, br, hr, listas
<inline-block> button, img, video, input, iframe, audio

-Los elementos en bloque no se alinean entre si, ocupan todo el bloque, siempre se pone uno debajo del otro, Se le puede dar margin,withd,height,padding 

-Los elementos en linea ocupan solo el contenido que necesitan, se alinean entre si, y no se les puede modificar sus dimensiones(ancho y alto) ni tampooo margin vertical y padding vertical.

- Los elementos inline-block: Ocupan solo el contenido, pero se les puede dar dimensiones, se puede margin,border,alto y ancho. Se alinean entre si.


<Display>
Todo esto se puede modificar en el archivo CSS, los elementos inlines pueden pasar a ser block. Para lograr eso usamos la etiqueta <display>, Ejemplo si queremos al <a> modificar el alto y ancho que normalmente no podriamos, usando display en css, lo podemos modficar. 