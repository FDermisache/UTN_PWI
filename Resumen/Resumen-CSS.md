# Archivo CSS:
Para poder usar los estilos en varios archivos,creamos una carpeta llamada "style.css" y en el head del archivo html lo llamamos de la siguiente forma:
<link rel="stylesheet" href="./style.css">


# Normalizaciones en CSS: Cosas que tienen que estar siempre al comenzar el css.
-@import con la fuente que queremos importar, luego ponemos el font-family,etc. 
-Box-sizing: Para que se tomen los valores desde el borde y no modifique el tamaño.
-Padding: 0
-Margin: 0

# Class: Esta etiqueta se pone en el HTML.
ya haciendo esto si tenemos mas de un h1, todos van a tener el mismo estilo y para modificarlo vamos al head.

Si tenemos una etiqueta ej el h1 y hay otras etiquetas h1 pero quiero que un titulo especifico tenga un estilo diferente usamos <class> le ponemos un titulo(no usar espacios), y luego vamos al head y usamos otra forma de llamarlo, ponemos un . y el titulo que pusimos en el class. LA clase se puede reutilizar, podemos usar el mismo class para otras etiquetas.

Si en la clase usamos el espacio, generamos una nueva clase en la misma linea, esto se usa por si le queremos dar un estilo especifico a un titulo, luego vamos al head y lo nombramos con .subrayado{}. Tambien lo podemos usar en otros
<h1 class="titulo-especial subrayado">Titulo Super especial</h1>

Para norbrarlo en CSS usamos .Nombre{}

# ID en css, 
No se puede repetir y es recomendable no usarlo en CSS, se usa en casos muy especificos
Para nombrarlos usamos el # 


# Piramide de la especifidad(Mas especifico)
Orden por importancia: 
1. !Important(Es para que si o si se use, puede ser en el color, en el fondo, Al ser el mas importante no importa que despues lo quieras modificar con otra cosa, no se va a poder), se pone al final de la propiedad:EJ
h1,h2{
color: black !important; }
2. Inline style(Estilos en linea) Ya que esta puesto directamente en el elemento(mala practica)
3. Selector de id
4. Selector de clases
5. Selector de elemtos(todas las etiquetas de html, p,div,body,etc.)
6. Selector universal (Selecciona todos los elementos del codigo) se puede usa por ejemplo para cambiarle la letra a todos los elementos:
Se usa con *{}, Se suele ubicar arriba de todo ya que es el menos jerarquico.
Ej;*{
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

# Si una propiedad esta en conflicto(tenemos una etiqueta con dos ordenes) le va hacer caso al que mas jerarquia tenga. 
# Si hay misma jerarquia se le hara caso al que este mas abajo en el codigo.

# Propiedad CSS para textos:

-Color: Color

-Letter-spacing: Espacio entre palabras.

-Word-spacing: Separacion entre cada letra.

-Text-decoration: Recibe 4 atributos(archivo css).

-Line-height: Espaciado entre linea de texto.

-Text-aling: Hace que todas las oraciones terminen en la misma linea.

-Text-shadow: Permite modificar la sombra de un texto,Recibe 4 valores(Se puede usar varias veces en el mismo texto):5px 5px 0px red ; Eje X / Eje Y / Difuminado / Color.

-Font-family: Cambiar la letra(arial,etc.)

-Font-Weight: Peso de la letra

-Font-size: Tamaño del texto o titulo o ICONOS.

-Text aling: mover el texto ( left: Alinea el texto por la izquierda.
right: Alinea el texto por la derecha.
center: Centra el texto.)

-Font-family: Cambiar la letra(arial,etc.).


# Propiedades de bordes:
- Border: Genera un borde: 1px solid color (Grosor, Tipo de linea, color)
-Border-radious: Redondea la punta de los bordes : 5px.

# Propiedades para caja:

-Box shadow: Sombra para cajas : 1px 1px 3px rgb(152, 241, 8); (Eje x/ Eje Y / Difuminado / Color)
Inset; Sombra interna(neumorphismo).

# Propiedades de color:
-Background-color: Color de fondo, se puede usar en cualquier lado.
-Color: Color de cualquier cosa, texto,



