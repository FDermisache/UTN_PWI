# Hover
Efecto hover: Cambiar el estado del elemento, posicionarme sobre un elemento y cambia el color.
- Llamamos al elemento en css EJM: .Fede:hover y ahi cambiamos el background color.

Cursor:pointer/wait  es para cmabiar el estilo del cursor cuando me posiciono sobre el elemento.  Pagina : MDN CURSOR CSS

- Darle color o propiedades a un elemento teniendo la misma clase: 
EJM=
.hijo:nth-child(1){ /*Esto lo usamos si tenemos 3 hijos y le queremos dar diferentes colores a cada uno, en ves de nombrarlos con diferentes clases, usamos esto y le damos color. empieza con el 1  */
    background-color: chartreuse;
}

.hijo:nth-child(2){
    background-color: cornflowerblue;
}




# Posicionamiento:


-Position: <relative : activa 4 valores: top, bottom, left, right. (mal dicho tiene los controles invertidos, si le decimos izqueirda se mueve hacia la derecha)

-Left: se le pasan unidades de media, de la posicion original se mueve X cantidad de pixeles a la izq.
-Top:Arriba
-Bottom:Abajo
-Right:Derecha

-Tambien activa la propiedad z-index, esta se usa para posicionar un elemento por encima del otro, y elegir cual esta arriba arriba o abajo. EL elemento que tenga el numero mas alto va a ser el de mayor importancia.

-Position <Absolut: No ocupa un lugar en la pagina, esta por encima de cualquier elemento. Se usa con left,right,etc. Para que no se vaya a cualquier lado, le tenemos que indicar a un elemento padre, que sea position relative, ya que el elemento busca quien no sea un position estatic y por defecto todos lo son.