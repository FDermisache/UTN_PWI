Siempre que empezamos un CSS generalizamos las siguientes cosas en la etique global:
-Margin: 0px
-Box-sizing: border-box
-Fuente 
-Padding: 0px

# FLEXBOX:
Propiedad que nos habilta a usar flexbox, es lo primero que hay que poner: LAS PROPIEDADES QUE LE SIGUEN AL DISPLAY SOLO SE PUEDEN USAR PORQUE ESTA DISPLAY PRIMERO. POR LO GENERAL SE USA EN UNA ETIQUETA PADRE EJM: CLASE8.HTML
<display: flex;>
<flex-direction:row;>  Determina la direccion en la que van los elementos, Row: uno al lado del otro/ colum: uno abajo del otro.
Cuando usamos la propiedad colum, Justify-content cambia el eje Y y ALING-ITEMS va a cambiar el eje x, se invierten.
<gap> Espaciar los elementos entre si EJM: gap: 20px; 
<justify-conter> center:  Centrar los elementos en el eje horizontal 
<Aling-items> Tiene varios valores, Su funcion es mover a los elementos en el eje vertical. Center: Se centran los valores en el eje Y.
<justify-content:-flex-end> los manda hacia la derecha
<justify-content:-flex-start> los manda hacia la izquierda
<justify-content>: Tiene 3 valores todos deben empezar con space :round/betwwen/evenly
<Flex wrap: wrap> Cuando achicas la pagina y los elementos se quedan sin espacio, hacen un salto de linea hacia abajo.
- Unidad de media vh: viewport height: Va con el height, Se usa para indicarle al elemento padre cuanta pagina va a ocupar respecto a la pantalla, si le ponemos el 100vh va a ocupar todo el tamaño de mi pantalla. Viewport: contenido de la pagina.


 La capacidad maxima de pixeles en 1000px

# Para usar todos estos se necesita espacio, darle withd, si no no funciona. Se le pone un withd al padre(lo que mida el contenedor que queramos hacer) y otro witdh al hijo respecto al padre. 

-Between:Ocupa todo el espacio de la pantalla, el espacio sobrante lo divide en la cantidad de elementos -1, el resultado es el espacio entre elemento y elemento, es lo que el elemento se aleja del otro. ES LA PROPIEDAD MAS USADA.

-Evenly: Hace el maximo espaciado posible hacia todos lados con todos los hijos. Espacio sobrante divido cantidad de hijos + 1. (No se usa casi ya que no podes controlar el espacio, ya que al ocupar todo el espacio posible calcula automaticamente todo)

-Around: Hace el maximo espaciado poisble entre los hijos y va a tomar un 3er espacio, lo divide por dos y lo pone en los costados. Espacio sobrante divido cantidad de hijos.( si tenes 3 elementos va haber un espacaciado dde 333px entre cada y luego se va a dividir 333%2 y el resultado va a ser el espaciado a los costados.)
