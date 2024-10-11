parseInt = Convertir un numero decimal a un entero
parseFloat= 




--------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Bucles for: Repetir un bucle una X cantidad de veces.

Ej: 
Quiero que por cada usuario de la aplicacion envies un mail de terminos y condiciones actualizado.


1. Por cada usuario de mi app voy a decir en consola 'usuario suscrpito'


let cantidad_de_usuaruos = 3

for(let iterador = 1; 
 iterador <= cantidad_de_usuaruis; // Condicion
  iteradpr = iterador + 1) // Actualizacion

Console.lg('Usuarui inscripto) // Accion


Iterador: contador de cantidad de veces que se esta ejecutando la accion.
Condicion o limite : Mientras la condicion sea verdadera el bucle se repetira.
Actualizacion: Como se va a ir actualizando nuestro contador.

- Que sucede por detras, Que hace javaScript? :

1. El iterador comienza en 1, como es menor que la variable = 3 , sigue a la linea de abajo
2. Luego se verifica la condicion, si es verdadero, pasa a la accion
3. Luego pasa a la actualizacion
4. Vuelve al iterador, Asi hasta que llegue a 3.


Ejemplo 2:

1. Quiero que me diga por alert 'Hola 3 veces'

for(let iterador=1;
iterador <=3;
iterador = iterador + 1){
    alert('hola')
}



Ejemplo 3:

1. Solictar al usuario 3 numerosy calcularemos la sumatoria de los 3 numeros.

let sumatoria = 0

for(let iterador = 1;
iterador <= 3;
iterador = iterador + 1){
    let numero = prompt('Ingresa un numero')
    while(!numero || isNaN(numero)){
        numero = promp('Error, dato noo valido')
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero
}

alert('la sumatoria de tus numeros es ' + sumatoria)



Continue: palabra reservada. Es para saltarse  la accion y pasa a la siguiente iterracion . Se usa por ejemplo  para nombrar todos los numeros del 1 al 10 menos el 5.



Numeros pares:

if(i % 2 === 1):

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Funciones: Sirven para hacer nuestras propias acciones en el programa. Guardamos un bloque de codigo, para reutilizarlo en otro momento.

- A la funciones se le puede pasar varios parametros, se usa la coma:
function(a , b)




- Declarar la funcion:

fuction saludar (){
    alert('Hola')
}

- Se puede llamar a la funcion asi :
saludar()



// Crear la funcion preguntarNombre que solicite el nombre del usuario y por alerta, 'tu noombre es {nombre-ingresado'}

function preguntarNombre(){
    let nombre = prompt('Indicar nombre de usuario: ');
    alert(`Tu nombre es ${nombre}`)
}

// Funcion mejorada para llamar no solo a un nombre si no a varios:

fuction saludar(nombre){
    aler('que tal `${nombre}`)    esto sirve para saludar a cualquier nombre que se ponga, y no siempre al mismo
}

saludar('Maria') y saluda a Maria
saludar('Pepe') y saluda a pepe



- Devolver valores: Return

fuction sumar (a, b){
    return Number(a) + Number(b)
}

sumar(70. 40)

let resultado = sumar(70,30)

- Si queremos que que aparezca en nustro html usamos:( Mala practica)
document.write(resultado)

- Escribir en Html (Buena practica):
getDocumentByid('id')