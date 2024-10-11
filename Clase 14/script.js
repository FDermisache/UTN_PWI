let resultado = prompt("Ingresa un numero")
if(!resultado){
    alert("No hay valor")
}
if (resultado === "10") {
    alert("Correcto")
}
else{
    alert("Incorrecto")
}




 // El valor no puede ser 0 o mensaje vacio:

let edad = prompt("Ingresa tu edad")
if(!edad){ // valor falsy (comillas vacias)
    alert("Error: dato no valido")
}
else{
if (Number(edad) <=0) { // como "edad" es string y 0 es number va a dar error, por lo cual tenemos que convertirlo.
    alert("Error: no puede ser 0")
    }
    else{
        alert("Edad correcta")
        alert(`Tu edad es : ${edad}`)
    }
}






// Else if:

if(!edad){
    alert("Error: dato no valido")
}
else if(Number(edad) <=0){
    alert("Error: no puede ser 0")}
    else if(Number(edad) === 88){
        alert("No puede ser 88")
    }
    else if(isNaN(edad)){
        alert('El dato debe ser numerico')

    }
    else {
        alert("Edad correcta")
        alert(`Tu edad es : ${edad}`)
    }


    let precio = prompt( 'Ingrese un precio')

    while(!precio || isNaN(precio)){
        alert('Error dato invalido')
        precio = prompt('Ingrese nuevamente')
    }
    alert('Precio ingresado correctamente')