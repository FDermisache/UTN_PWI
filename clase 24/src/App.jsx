import React from 'react'
import './global.css'


function App() {
  function saludarPersona({nombre,edad}){

    console.log(  `Hola me llamo ${nombre} y tengo ${edad} años`)
    }

    let persona_x = {
    nombre: 'Federico',
    edad: 25
    }
    
    saludarPersona({nombre:'Gabriel',edad:37})



  return (
    <div>
      <div>
        <NavBar 
        title={'Hola mundo'}
        backgroundColor={'red'}/> 
        <h1>Hola</h1>
      </div>
      <div>
        <CashCard 
        title={'Your Cards'}
        img={'url'}
        spanSaldo={'$40.00'}
        spanTarjeta={'0000-****-****-0000'}
        spanNombre={'Federico Dermisache'}
        />
      </div>
    <div>
      <CashCard2
      titulo={'Your Cards'}
      saldo={'$1200'}
      tarjeta={'VISA'}
      nombre={'Pepe sanchez'}
      numero_tarjeta={'4320-0000-0000-0391'}
      />
    </div>



    </div>
    

  )
}


const NavBar = (props) => {

  return (

    <header style={
      {backgroundColor:'red'} /*  En JSX los estilos en linea se pasan como objetos, con {}, Otra opcion si queremos usar el backgroundColor que asignamos arriba, seria: {backgroundColor: props.backgroundColor} */}
      className='navbar'>
      <h2>{props.title}</h2> {/* Usamos logica de JS, llamamos al props y le asignamos el valor que le asignamos arriba */}
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  )
}


const CashCard = (props) => {

  return (
<div className='card'>

  <div className='card-title'>
    <h2>{props.title}</h2>
    <img src="" alt=""/>
  </div>

    <div className='card-card'>
    <div className='card-saldo'>
        <span>{props.spanSaldo}</span>
        <img src="" alt="" />
    </div>

    <div className='card-tarjeta'>
        <span>{props.spanTarjeta}</span>
    </div>
    <br />
    <div className='card-nombre'>
      <span>{props.spanNombre}</span>
    </div>

      <div className='card-button'>
        <button>X</button>
      </div>
  </div>
</div> 

  )
}

/* const CashCardPRueba = (LE Pasamos todos los componentes que necesitamos para destructurar) => {} */
/* Despies vamos a cashCard arriba y directamente nos sugiere que necesitamos pasarle  */

/* EJEMPLO: */

const CashCard2 = ({titulo,saldo,tarjeta,nombre,numero_tarjeta}) => {

  return (
<div className='card'>

  <div className='card-title'>
    <h2>{titulo}</h2>
    <img src="" alt=""/>
  </div>

    <div className='card-card'>
    <div className='card-saldo'>
        <span>{saldo}</span>
        <span>{tarjeta}</span>
    </div>

    <div className='card-tarjeta'>
        <span>{numero_tarjeta}</span>
    </div>
    
    <div className='card-nombre'>
      <span>{nombre}</span>
      <button><i class="bi bi-three-dots-vertical"></i></button>
    </div>
  </div>
</div> 

  )
}




export default App


/* Las props son un objeto que recibe el componente, todos los componentes reciben a props, los que pasamos en el NavBar son props */

/* Los componentes tienen propiedades, Las propiedades son las que caracterizan a ese elemento. */

/* Desestructuracion del objeto :
const persona = {
nombre: 'Federico',
edad: 25
}

Destucturación de objetos:
let {nombre,edad}= persona
console.log('Hola me llamo ${nombre} y tengo ${edad} años')

- Destructuración en funciones: 


function saludarPersona(person){
let {nombre,edad}=person
console.log('Hola me llamo ${nombre} y tengo ${edad} años')
}


saludarPersona({nombre:'Gabriel',edad:37})


Destructuración en funciones: Cuando se que la funcion recibira un objeto, que tendra como minimo las propiedades nombre y edad, podemos destructurarlas desde el parametro.

function saludarPersona({nombre,edad}){

console.log('Hola me llamo ${nombre} y tengo ${edad} años')
}


saludarPersona({nombre:'Gabriel',edad:37})


-Listas en React:

*/