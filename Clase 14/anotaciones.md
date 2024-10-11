Buscar que es Nan: 

---------------------------------------------------------------------------------------

# Var, let, const

Var:  Se puede reasignar y redeclarar. Var tiene hoisting, esto significa que lo puedo llamar antes de declarado. 


EJ:

console.log(nombre)

var nombre = "pepe"


nombre = "juan"  // reasignacion

var nombre = "fede" // redeclaracion


# Let: 
No tiene Hosting, no se puede llamar antes de ser declarado. Por defecto su valor es undefined. No se puede redeclarse un mismo valor en un mismo bloque, si se puede reasignar. Dentro del bloque que creamos, podemos usar nuevamente el mismo identificador "nombre".

Como se declara: variable global
let nombre = "pepe"

//Nuevo bloque: variable local, no redeclara el nombre pepe, solo crea una variable con el nombre fede pero se puede usar solo dentro de la llaves.

{
    let nombre = "Fede"
}



# Const: 
No tiene hosting, no se puede redeclarar en el mismo bloque, no se puede reasignar, no se puede dar una inicializacion por defecto.

Const nombre = "pepe"

---------------------------------------------------------------------------------------


# Bloques:

Javascrip tiene varios bloques,para hacer nuevos bloques podemos abrir {},y se crean sub bloques, esto se usa en las condiciones.

---------------------------------------------------------------------------------------

# Condiciones, If, else, else if.

Funciones nativas: vienen incorporadas en Javascrip, ejemplo console. LOG(funcion nativa).

alert(): Permite alertarle algo al usuario
Ej:
Alert("hola"), en la web hace un PopUp(cartel) con el mensaje.


promp(): hacen un PopUp, pero con un input para mandar datos. Cuando el usuario mande el dato, el dato se retornara y lo guardamos en la variable. Siempre devuelve string o null
Let resultado = prompt()
alert(resultado) (Muestra al usuario el resultado del prompt)

ELSE, IF: El else siempre va acompañado del if, el if =si, en este caso si el resultado es estrictamente igual a 10 da la alerta de correcto, else = caso contrario da la alerta de incorrecto.
IF espera recibir un valor folsy y else un truli

et resultado = prompt("Ingresa un numero")
if (resultado === "10") {
    alert("Correcto")
}
else{
    alert("incorrecto)
}

if(!resultado) // !=no, esto es si no escribe nada, osea no resultado
aler("ERROR: no escribiste nada")

else if : abreviacion para poder escribir menos if y else por separado. Ejemplo archivo js


isNan(): Nos ayuda a verificar si un valor es un not a number.
Lo que hace internamente:
String(Number("hola10")) === 'Nan'



---------------------------------------------------------------------------------------


# Template string: usar una variable sin concatenar, se usan con comillas invertidad.
Ej: 
alert(`tu edad es ${edad}`)

---------------------------------------------------------------------------------------
# Bucle while: (mientras) ( casi no se usa en la vida real)
Si el valor que recibe el while es verdadero, el bloque se ejecutara infinitamente, si le ponemos while(true) se va hacer un bucle infinito y esta mal.
while(){}

Usado correctamente: Esto al ser un bucle, si el usuario no cumple con las condiciones, se va a ejecutar hasta que lo haga. Ya que se lee constatemente de arriba abajo, si no se cumple, no se va a dejar de leer.


let precio = prompt( 'Ingrese un precio')

    while(!precio || isNaN(precio)){
        alert('Error dato invalido')
        precio = prompt('Ingrese nuevamente')
    }
    alert('Precio ingresado correctamente')


# Break: Con break se corta un bucle.