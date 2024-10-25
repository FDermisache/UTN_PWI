const users = [
    {
        nombre:'Luis',
        Email: 'Gdgd@example.com',
        remuneracion:2000,
        puesto:'Programador',
        tipo_contrato:'Indefinido',
        id: 1
    },
    {
        nombre:'Pedro',
        Email: 'Gdgd@example.com',
        remuneracion:3500,
        puesto:'Diseñador',
        tipo_contrato:'Part-time',
        id: 2
    },
    {
        nombre:'Emilia',
        Email: 'Gdgd@example.com',
        remuneracion:5000,
        puesto:'Limpieza',
        tipo_contrato:'Permanente',
        id: 3
    },
    {
        nombre:'Fede',
        Email: 'Gdgd@example.com',
        remuneracion:7000,
        puesto:'Programador',
        tipo_contrato:'Puesto Fijo',
        id: 4
    }
]

// Dame una lista con todos aquellos usuarios que sean Programadores.

const programdores =[]

for(let usuarios of users){
    if(usuarios.puesto === 'Programador'){
        programdores.push(usuarios)
    }
}

// Otra forma es usando funciones, para poder reutilizarla.(Programacion funcional)

function filtrarProgramadores(usuarios){
    const programdores =[]
    for(let usuarios of users){
        if(usuarios.puesto === 'Programador'){
            programdores.push(usuarios)
}
    }
    return programdores
}

filtrarProgramadores(users)

// Ahora Mostra quien cobra mas de 2500

function filtrarSueldo(){
    const Sueldo =[]
    for(let remunera of users){
        if(remunera.remuneracion >2500){
            Sueldo.push(usuarios)
}
    }
    return Sueldo
}

// La forma de filtrar es la misma, si tendriamos que filtrar cada dato de los usuarios tendriamos que crear mil funciones diferentes, Tendriamos que crear una funcion y que sea compatible para cualquier filtro que queramos

// Separamos la logica de la condicion


// LOGICA:
// Lista: array a recibir
//callbackFN: es una funcion recibida por parametro que devolvera la condicion.
// Le pasamos parametros generales, como elemento o lista ya que despues lo que le pasa los valores reales es la funcion de la condicion
function filtrar(lista, callbackFnCondicion){
    const result =[]
    for(const elemento of lista){
        //Invoco a la funcion y le paso el elemento
        if(callbackFnCondicion(elemento)){
            result.push(elemento)
}
    }
    return result
}

// CONDICION:

function condicionRemuneracion(usuarios){
    return usuarios.remuneracion > 2500
}

let remuneracionALta = filtrar(users,condicionRemuneracion ) // me pide como primer parametro una lista, le paso la lista de USERS, Le pasamos la function callback, le pasamos la condicion. 



function condicionDiseñador(usuarios){
    return usuarios.puesto === 'Diseñador'
}


let Diseñadores = filtrar(users, condicionDiseñador)







// Javascript ya lo tiene incorporado, asi se usa:

// En vez de hacer toda la logica, solo hacemos la funcion condicion

// Los arrays tienen metodos:
// Metodo filter (una funcion)
users.filter(condicionRemuneracion) 

// ASi se usa, le pasamos una funcion anonima = se va a usar una vez o pocas veces. Es la misma funcion que antes pero la declaramos dentro del metodo.
const result = users.filter(function(usuario){
    return usuario.remuneracion > 2500
    }
)

// Quiero ver si un usuario tiene la ' c ' incluida en su nombre

const result2 = users.filter(
    function(usuario){
        return usuario.nombre.includes('C')
    }
)


// Tarea clase:

// Filtrar por los productos que su stocl sea mayor o igual a 5
// Filtrar por los productos que su precio sea entre 4500 y 8500
// filtrar por los productos que su descripcion tenga 'moni'

const productos = [
    {
        precio: 5000,
        nombr:'Teclado',
        stock: 2,
        id:1,
        descripcion: ' Teclado gamer'
    },
    {
        precio: 3000,
        nombr:'Tele',
        stock: 10,
        id:2,
        descripcion:'Tele de 30 pulgadas'
    },
    {
        precio: 7000,
        nombr:'Monitor',
        stock: 5,
        id:3,
        descripcion:'Monitor gamer curvo'

    }
]


const Resultfiltro1 = productos.filter(function(usuario){
    return usuario.stock >= 5
})

const Resultfiltro2 = productos.filter(function(usuario){
    return usuario.precio <= 4500 && usuario.precio <=8500
})

const Resultfiltro3 = productos.filter(function(usuario){
    return usuario.descripcion.includes('Moni')
})


console.log(Resultfiltro1)
console.log(Resultfiltro2)
console.log(Resultfiltro3)


// Las funcions flecha son una forma distinta y mejor de hacer las funciones en JS, cuenbtan con las siguientes ventajas:

// Function normal o ES5
function saludar(nombre){
    alert ('Hola' + nombre)
}

// Arrow function o funcion flecha ES6: Le agregamos la flecha entre el parentesis y los corchetes



const saludar = () => {
    alert ('Hola' + nombre)

}


// Para que sirve a diferencia de las funciones normales:

// Retorno implicito:  Retorna el a + b sin llamar al return , lo retorna sin mostrarlo. (Solo funciona si no hay llaves). 
// 

//Ejemplo 1:
const sumar = (a,b) => a + b


//Ejemplo 2
const condicionRemuneracionCara = (usuario) => usuario.remuneracion > 3500

// Ejemplo 3:
const resuult = users.filter((usuario) => usuario.nombre.includes('C'))


// Ejemplo 4: Podemos emitir los parentesis, SOlo es valido si la funcion en flecha recibe un parametro

const resuult2 = users.filter(usuario => usuario.nombre.includes('C'))


// Cuando conviene usar retorno implicitio : Conviene ver cuantas acciones hay que hacer, En el caso 1 no conviene ya que son muchas acciones y no pide retornar nada.
// En el caso 2, si conviene porque pide una sola cosa, y pide devolver algo.

// CASO 1:
// Quiero mostrar por alerta un hola
// solicitar un nombre
// Despedirse por consola
const hacerAccion = () =>{
    alert('Hola')
    let nombr = prompt('Ibgresa tu nombre')
    console.log('chau')
} // En este caso no retornara nada. 

// CASO 2:
// Quiero una funcion que reciba un valor y me diga si el typeoff es string
const validarDato = (value) => typeof(value) === 'string' // En este caso devolvera true o false 

// Metodos de arrays: Son parecidos entre si pero cada uno tiene su funcionalidad.


//Filter: Filtra a los elementos por x condicion. 
//Devuelve siempre un array
// Recibe una funcion Callback lo va a ejecutar por cada elemento del array, al encontrar un valor verdadero, sera agregado al array


// Find: Nos permite buscar 1 elemento dentro del array( Se asocia a la busqueda por ID)
// Recibe una Callback y lo va a ejecutar por cada elemento del array, al encontrar un valor verdadero, cortara y retornara dicho elemento, Si no encuentra DEVOLVERA undefind
const usuarioBuscado = users.find(user => user.id === 1)

// Findinex: Nos permite buscar 1 indice de x elemento dentro del array
// Recibe una Callback y lo va a ejecutar por cada elemento del array, al encontrar un valor verdadero, cortara y retornara la posicion del elemento, Si no encuentra DEVOLVERA -1
const usuarioIndice = users.findIndex(user => user.id === 1)

//Some: Nos permite si almenos UN algun usuario cumple con X condicion, ejemplo quiero ver si alguno es diseñador. Nos devolvera un booleano,
const hayDiseñador = users.some(user => user.puesto === 'Diseñador')

// Every: Nos permite verificar si todos los elementos cumplen una condicion, Si el valor es verdero retornara false, si todos cumplen la condicion retorna true, EJEMPLO SI TODOS TIENEN UN VALOR.
let todosTienenPuesto = users.every(user => user.puesto.length > 0 )

// Foreach: Ejecuta una Callback por cada elemento del array(Basicamente un For of). Devuelve Undefind Siempre
users.forEach(() =>{
    console.log('Hola mundo')
} ) // por cada usuario va a mostar un hola mundo

// Map: El mas dificl de todos.
