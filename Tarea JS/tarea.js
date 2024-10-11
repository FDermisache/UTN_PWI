/* // Ejercicio 7: Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
function  decirNombre (nombre){
    alert ("Hola" + nombre)
}
decirNombre('Federico')

// Ejercico 8: Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta

function saludar(nombre){
    return 'Hola' + nombre // El return va con parentesis?? porque funciona de las 2 formas.
}
alert (saludar('Fede')) */

//Ejercicio 9: Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
function sumar( a , b ){
    return a + b
}

//Ejercico 10:Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
function restar ( a , b ){
    return a - b
} 

// Ejercicio 11: Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null 
function calcular( operacion , a , b){
    if(operacion === '+'){
        return sumar ( a , b);
    }else if(operacion === '-'){
        return restar ( a , b);
    }else{
        return null; 
    }
    }

// Ejercicio 12:Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola
/* function contarHasta(numero){
    for(let i= 0;
        i < numero;
        i++){
            console.log(i)
        }
}
contarHasta(6) */


//Ejercicio 13:Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.

function iniciarCalculadora (){
    let calcu = prompt('Deseas usar la calcuradora?')


while(calcu === 'si'){
    let respuesta1 = prompt('Ingrese el primer valor:')
    let respuesta2 = prompt('Ingrese el segundo valor:')
    let operacion = prompt ('Ingrese que operacion desea + o -')


let result = calcular(operacion,respuesta1,respuesta2);
alert(`El resultado es ${result}`)


let continuar = prompt('Deseas continuar?')
if(continuar === 'no'){
    alert('El programa ha finalizado');  
}
break;
}}

iniciarCalculadora()

//Ejercicio 14:Hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…

function serie(c) { 

for(let i = 1; i <= c ; i++)
    {const termino =  11 * i;  // la i al sumarse por 1 lo que hace el programa es 11*1, 11*2, 11*3 asi sucesivamente, y luego al llamar a la serie le pasamos el paramatro de la cantidad de veces que se tiene q multiplicar
        console.log(termino)
}
}
serie(25) 


//Ejercicio 15: Hacer  un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares ingresan valores por teclado.

function numerosEnteros(){ 
    let numerosPares = 0;
    let numerosImpares = 0; // Aca guardo la cantidad de numeros pares e impares

    for(let i = 0; i < 5; i++){ // Aca le digo que repita 5 veces
        let numero = parseInt(prompt('Ingrese un numero')); // Aca pido el numero
        if(numero % 2 === 0){ //(Si el resto de la divison es 0 entonces es par, si el resto es 1 entonces es impar) Aca le digo que si el numero es par entonces lo sume a los pares y si es impar lo sume a los impares.
            numerosPares++;
        }else{
            numerosImpares++;
        }
    }
    alert(`Hay ${numerosPares} numeros pares y ${numerosImpares} numeros impares`); // Aca muestro cuantos pares e impares hay.
}