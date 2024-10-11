let edad = prompt("Ingresa tu edad")
if(!edad){
    alert("Error: dato no valido")
}else if(Number(edad) <=0){
    alert("Error: no puede ser 0")
}else if(isNaN(edad)){
    alert('El dato debe ser numerico')
}else if(Number(edad) >= 18){
    alert('Mayor de edad')
}else if(Number(edad)<=18){
    alert('Menor de edad')
}