Hacer fondos con un difuminado pagina cssgradiante

# Responsive:

<medyaqury:> condiciones que se le ponen al navegador, ejemplo el modo oscuro o el claro, o el ancho que se le pone a la pantalla. Primero tenemos que poner max-withd y despues el min. Ejemplos en style.css

-EJEMPLOS:
@media screen and (max-width:1200px){
    .padre{
        background-color: rgb(182, 24, 24);
    }
}/* Estamos diciendo que cuando la pantalla tenga un ancho de max 1200 este codigo se va a ejecutar  */

@media screen and (max-width:600px) {/* Para saber las medidas para cada desarollo(compu,celu,tablets) hay medidas estandarizadas se busca en google breakpoints */
    .padre{
        
        flex-direction: column;/* Si estamos desde el celular y queremos que el contenido  q estaba uno al lado del otro pasen uno abajo del otro por el tamaño.*/
        background-color: rgb(142, 165, 42);
    }

        .hijo:nth-child(2){
            display: none;
        }
        header nav{
            display: none;/* con display none desaparecemos algo y con la media query le damos la condicion de cuando desaparecer, en este caso desaparece segun el tamaño */
        }

        header .btn-nav{
            display: flex; /* Aca le cambiamos el display para cuando lleguemos a 600 aparezca el boton */
        }
    
}

# Tranciciones y transformaciones:

btn-wsp:hover{
    transform: scale(1.5);/* Si media 100 ahora va a medir 110 al pocicionar el mouse se va agrandar. */
    transition: 1000ms ease-in;/* se usa milisegundos MS o segundos */ /* ease-in: Fijarse video clase 11 horario 19:55 pagina con ejemplos medium.com */
}


# Mobile Firs: Desarrolo mobil:
Primero hacemos la aplicacion para el celular y luego hacemos que se adapte a la computadora.
-Vamos a la web, inspeccionar elemento, tocamos el simbolo que tiene una computadora y un telefono y en dimensiones ponemos la opcion predeterminada.

Ejemplo:
@media screen and (max-width:600px) {/* Para saber las medidas para cada desarollo(compu,celu,tablets) hay medidas estandarizadas se busca en google breakpoints */
    .padre{
        
        flex-direction: column;/* Si estamos desde el celular y queremos que el contenido  q estaba uno al lado del otro pasen uno abajo del otro por el tamaño.*/
        background-color: rgb(142, 165, 42);
    }





