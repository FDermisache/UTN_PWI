# Funcion Anonima: Son las funciones que no le definimos un nombre para reutilarla, por lo general se crean dentro de otra cosa.
EJEMPLO=
const result = users.filter(function(usuario){
    return usuario.remuneracion > 2500
    }
)
- En este caso declaramos function(usuario){}

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Callback: La funcion callback es una funcion que usamos dentro de otra funcion, Se llama por detras por eso su nombre
EJEMPLO=

- En este caso necesitamos de 2 funciones, una funcion general, La funcion Logica, Y la funcion De la condicion que necesitamos.

+ FUNCION LOGICA:

function filtrar(lista, callbackFnCondicion){ // Se le pasa 2 parametros generales, "lista", haciendo referencia al nombre del array que le paseremos depsues, y "callbackFnCondicion" la funcion Condicional
    const result =[]
    for(const elemento of lista){
        //Invoco a la funcion y le paso el elemento
        if(callbackFnCondicion(elemento)){
            result.push(elemento)
}
    }
    return result
}


+ FUNCION CONDICIONAL: Creamos la condicion que necesitamos, en este caso saber si la remuneracion es mas alta que 2500

function condicionRemuneracion(usuarios){
    return usuarios.remuneracion > 2500
}

let remuneracionALta = filtrar(users,condicionRemuneracion ) // Aca llamamos a la funcion logica y dentro nombramos a la "lista" = users  y "callbackFnCondicion" = condicionRemuneracion


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Funciones FLECHAS: Son iguales a las funciones anteriores, pero mas cortas de escribir

+ Function normal o ES5:

function saludar(nombre){
    alert ('Hola' + nombre)
}


+ Funcion Flecha:

const saludar = () => {
    alert ('Hola' + nombre)

}

EJEMPLOS =

+ Ejemplo 1:
const sumar = (a,b) => a + b


+ Ejemplo 2:
const condicionRemuneracionCara = (usuario) => usuario.remuneracion > 3500

+ Ejemplo 3:
const resuult = users.filter((usuario) => usuario.nombre.includes('C'))


+ Ejemplo 4: Podemos emitir los parentesis, SOlo es valido si la funcion en flecha recibe un parametro

const resuult2 = users.filter(usuario => usuario.nombre.includes('C'))


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# RETORNO IMPLICITO: Retornasin llamar al return , lo retorna sin nombrarlo. (Solo funciona si no hay llaves)


- Cuando conviene usar retorno implicitio : Conviene ver cuantas acciones hay que hacer, En el caso 1 no conviene ya que son muchas acciones y no pide retornar nada. En el caso 2, si conviene porque pide una sola cosa, y pide devolver algo.

- CASO 1:
+ Quiero mostrar por alerta un hola
+ solicitar un nombre
+  Despedirse por consola

const hacerAccion = () =>{
    alert('Hola')
    let nombr = prompt('Ibgresa tu nombre')
    console.log('chau')
} // En este caso no retornara nada. 

- CASO 2:
+ Quiero una funcion que reciba un valor y me diga si el typeoff es string.

const validarDato = (value) => typeof(value) === 'string' // En este caso devolvera true o false 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Metodos de los arrays:
- Filter: Filtra a los elementos por x condicion. 
+ Devuelve siempre un array
+ Recibe una funcion Callback lo va a ejecutar por cada elemento del array, al encontrar un valor verdadero, sera agregado al array
EJEMPLO=
const result = users.filter(function(usuario){
    return usuario.remuneracion > 2500
    }
)

- Find: Nos permite buscar 1 elemento dentro del array( Se asocia a la busqueda por ID)
+ Recibe una Callback y lo va a ejecutar por cada elemento del array, al encontrar un valor verdadero, cortara y retornara dicho elemento, Si no encuentra DEVOLVERA undefind
EJEMPLO=
const usuarioBuscado = users.find(user => user.id === 1)

- Findinex: Nos permite buscar 1 indice de x elemento dentro del array
+ Recibe una Callback y lo va a ejecutar por cada elemento del array, al encontrar un valor verdadero, cortara y retornara la posicion del elemento, Si no encuentra DEVOLVERA -1
EJEMPLO=
const usuarioIndice = users.findIndex(user => user.id === 1)

- Some: Nos permite si almenos UN algun usuario cumple con X condicion, ejemplo quiero ver si alguno es diseñador. Nos devolvera un booleano,
EJEMPLO=
const hayDiseñador = users.some(user => user.puesto === 'Diseñador')

- Every: Nos permite verificar si todos los elementos cumplen una condicion, Si el valor es verdero retornara false, si todos cumplen la condicion retorna true, EJEMPLO SI TODOS TIENEN UN VALOR.
EJEMPLO=
let todosTienenPuesto = users.every(user => user.puesto.length > 0 )

- Foreach: Ejecuta una Callback por cada elemento del array(Basicamente un For of). Devuelve Undefind Siempre.
EJEMPLO=
users.forEach(() =>{
    console.log('Hola mundo')
} ) // por cada usuario va a mostar un hola mundo

// Map: El mas dificl de todos.
