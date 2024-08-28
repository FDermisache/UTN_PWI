# estilos en linea
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

# Class:
ya haciendo esto si tenemos mas de un h1, todos van a tener el mismo estilo y para modificarlo vamos al head.

Si tenemos una etiqueta ej el h1 y hay otras etiquetas h1 pero quiero que un titulo especifico tenga un estilo diferente usamos <class> le ponemos un titulo(no usar espacios), y luego vamos al head y usamos otra forma de llamarlo, ponemos un . y el titulo que pusimos en el class. LA clase se puede reutilizar, podemos usar el mismo class para otras etiquetas.

Si en la clase usamos el espacio, generamos una nueva clase en la misma linea, esto se usa por si le queremos dar un estilo especifico a un titulo, luego vamos al head y lo nombramos con .subrayado{}. Tambien lo podemos usar en otros
<h1 class="titulo-especial subrayado">Titulo Super especial</h1>

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

# Archivo CSS:
Para poder usar los estilos en varios archivos,creamos una carpeta llamada "style.css" y en el head del archivo html lo llamamos de la siguiente forma:
<link rel="stylesheet" href="./style.css">

# Propiedades CSS:
-Color: Color
-letter-spacing: Espacio entre palabras
-word-spacing: Separacion entre cada letra
-text-decoration: Recibe 4 atributos(archivo css)
-line-height: Espaciado entre linea de texto
-text-aling: Hace que todas las oraciones terminen en la misma linea
-text-shadow:5px 5px 0px red ;
Permite modificar la sombra de un texto,Recibe 4 valores(Se puede usar varias veces en el mismo texto):
Eje x:(Positivo derecho, Negativo izq)
Eje y: ( Positivo abajo, Negativo arriba)
difuminado:
color:
Pagina para probar y no tocar codigo: cssgenerator.org
-font-size: Tamaño del texto o titulo
-text aling: mover el texto ( left: Alinea el texto por la izquierda.
right: Alinea el texto por la derecha.
center: Centra el texto.)
-font-family: Cambiar la letra(arial,etc.)
-box shadow:1px 1px 3px rgb(152, 241, 8); 
    /* Sombra para cajas
    Eje x;
    Eje y;
    Difuminado;
    Color;
    Inset; Sombra interna(neumorphismo)

Propiedades de texto
Propiedades de background
Propiedades de border
Propiedades de box

Posicionamiento de elemntos:
-float(ya no se usa)
-flexbox EL MAS USADO
-grid
-position

diseño responsivo:
Mediaquerys

Animaciones y transiciones:
Keyframes