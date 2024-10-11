let numeroSecreto = prompt('Adivina el numero entre 1 y 10')

if(!numeroSecreto){
    alert('Ingresar dato Numerico.')
}else if(isNaN(numeroSecreto)){
    alert('ERROR: Solo datos numericos.')
    
}else if(Number(numeroSecreto)<=0){
    alert('Ingresar un valor mayor a 0')
}else if(Number(numeroSecreto)=== 8){
    alert('Correcto!!!!!')
}
else if(Number(numeroSecreto)<8){
    alert('Demasiado bajo')
}else if(Number(numeroSecreto)>8){
    alert('Demasiado alto')
}