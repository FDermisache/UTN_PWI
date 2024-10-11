# Operadores aritmeticos:

Suma(+ Concatenar o suma)/restas(-)/multiplicacion(*)/division(/)/Modulo o resto(%)

-Concatenacion: Se hace como el operador suma y permite unir los datos, solo ocurre cuando hay un string en la operacion. Ej: "Pepe" + "Hola". Se puede concatenar un string y un numero, el resultado va a ser un string

////////////////////////
Reglas:
°Los siguientes operadores devuelven NUMEROS,
°Transforma el dato que no es numero en numero. Si es un string se convierte en Nan ya que no tiene transformacion numerica. Ej: 9* "Nan" = Nan
°Si algun dato es Nan la operacion da Nan.
°Los string que solo tienen numeros, pueden transformarse en numero. Se cumple con todos menos con la suma. Ej: 9 - "1".
°Las operaciones con varios operadores, separa en terminos Ej: 1+7 * 10 = 71

-Suma: Cuando no hay string, Transforma el dato que no es numero en numero. Ej: true+ true = 2 / Nan + 1 = Nan, si algun dato es Nan la operacion devolvera Nan.

-Resta: 


- Resto: % Es el resto de la divison Ej: 11 % 2

- Ejemplo:

Nan + "" + Number("Null")
//Proceso interno
String(Nan) + "" + Nan
"Nan" + Nan
"Nan" + String(Nan)
"Nan" + "Nan"
"NaNNan"



# Comparadores: Nos permiten comparar valores. Siempre devuelven Booleanos. Nan es el unico valor que no se puede comparar con nada, siempre va a dar False, Nan == Nan = False. Null no puede ser igual a nadie excepto a si mismo y a undefiend.

== Igual a ( Nos permite comparar si dos valores son iguales ) Ej: 10 == 9 + 1 = true.

=== Estrictatemente igual a (No solo compara igualdad de valores, si no tambien igualdad de datos) Ej: 1 === true = False.

!= Distinto de (Comparacion de diferencia entre valores.) Ej: 1 != 1 = False

!== Estrictamente distinto de (Compara valores y datos) Ej: 1 !== "1! = true (uno es numero y el otro string)

< Menor a 
> Mayor a
<= Menor o igual
>= Mayor o igual


-----------------------------------------------------------------------------------------------------------------------------------------------------



# Truthy y Falsy : Todos los datos se pueden transformar a boolean Ej: Boolean(0) = 
- Truthy: Los valores thurty son los que al transformarse a booleano devuelve True.    EJ: Boolean("HOLA")
- Falsy: Los valores Falsy son los que al transformar a booleano devuelve False.       EJ: Boolean(0) = False


*Lista de Valores Falsy:*
 - 0 y -0
 - " "
 - Nan
 - Undefined
 - Null
 - False
 - Document.all

 *Lista Valores truthy: Son todos los que no sean Falsy.*


# Operadores Logicos:

- ! Not :Devuelve el valor booleano opuesto al dato negado. Si el dato es Truthy devuelve false, Si el dato es Falsy devuelve true.

------------------------------------------------------------------------------------------------------

- && And : Selecciona entre dos valores: 
- Si el primer valor es truthy devuelve el segundo
- Si el primer valor es Falsy devuelve el primero

-------------------------------------------------------------------------------------

Ejemplos:
- 7 && "pepe" = "Pepe" Ya que es Truthy
- 10 && False = False Ya que es Truthy
- "" && 0 = Devuelve "" Ya que es Falsy

----------------------------------------------------------

- || Or : Selecciona entre 2 valores:
- Si el primer valor es Truthy devuelve el PRIMERO
- Si el segundo valor es Falsy devuelve el SEGUNDO.


EJEMPLOS:
- 5 || false = Devuelve 5 Ya que Truthy


# Prioridad de solucion;
1. Not
2. AND
3. OR


Ejemplo:

true || false && 




# Tablas de la verdad: SE USA UN MONTON

- AND:
TRUE && TRUE = TRUE
True && FALSE = FALSE
FALSE && TRUE = FALSE
FALSE && FALSE = FALSE

- OR:
TRUE || TRUE = TRUE
True || FALSE = TRUE
FALSE || TRUE = TRUE
FALSE || FALSE = FALSE



EJEMPLO:
DEJAR PASAR SI EL USUARIO TIENE MAS DE 400 NIVELES Y MENOS DE 900

NIVEL= 1

CONDICION = NIVEL > 400 && NIVEL < 900
              FALSE &&  TRUE
                   FALSE 


----------------------------------------------------------------------------

# VARIABLES:  es un dato que podemos guardarc datos y usarlo en cualquier moemnto. 
Para declarar el nombre de una variable no se pueden usar espacios, usamos guion bajo o donde iria el espacio ponemos una Mayuscula Ej: nivelActual o nivel_actual
- VAR:
- LET:
- CONST:


