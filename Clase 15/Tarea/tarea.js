// 1. Imprime los numeros del 1 al 10

for(let i = 1;
    i<=10;
    i++){}


// 2. Imprime los numeros pares del 2 al 20:

for(let i = 2;
    i >=20;
    i++
){}

// 3.Imprime los numeros impares del 1 al 19:( No entendi)

for(let i = 1;
    i<=19;
    i++
){
    if(i % 2 ===1){}
}

// 4.Imprime los numeros del 10 al 1 en orden inverso

for(let i = 10;
    i>=1;
    i--
){}


// 5. Imprime los numeros del 1 al 10, pero se detine al llegar al 5 BREAK:

for(let i = 1;
    i <= 10;
    i++
){
    if(i === 5){
        break;
    }
}

// 6. Imprime los numeros del 1 al 10, pero salta el 5 con CONTINUE:

for(let i = 1;
    i <= 10;
    i++
){
    if(i === 5){
        continue
    }
}




//////////////////////////////////////////////////////////////////////////////////////////


// Funciones:

// 1. Crear la funcion preguntarNombre que solicitara el nombre al usuario y dira por alerta, ' Tu nombre es {nombre_ingresado}

function preguntarNombre(){
let nombre =prompt('Ingrese su nombre')
} alert(`Tu nombre es:  ${nombre}`)
