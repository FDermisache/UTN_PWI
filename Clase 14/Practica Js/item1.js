
let suma = prompt('Ingrese el primer valor: ')
let suma1 = prompt('Ingrese el segundo valor: ')
if(!suma){
    alert('No ingresaste los datos correctamente.')
}else if(Number(suma)===0 || Number(suma1)===0){
    alert('No puede ser 0')
}
else if(isNaN(suma, suma1)){
    alert('El valor debe ser numerico')
}
else{
    alert( Number(suma) + Number(suma1))
}