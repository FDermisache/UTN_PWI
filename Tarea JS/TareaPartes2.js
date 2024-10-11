//Ejercicio 15: Hacer  un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares ingresan valores por teclado.
/* function NumerosParesImpares(){
    let numerosEnteros = 0;
    let numerosImpares = 0;

    for(let i=0; i < 5; i++){
        let numeroSolicitado = prompt('Ingrese un numero:')
        if(numeroSolicitado % 2 === 0){
            numerosEnteros++;
        }else{
        numerosImpares++;
        }
    }
    alert(`Hay ${numerosEnteros} ENTEROS Y ${numerosImpares} IMPARES`);
}

NumerosParesImpares() */





// Ejercicio 16: Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.

/* let alturas = [];
let suma = 0;

for( let i = 0; i < 5; i++){
    let altura = prompt(`Ingrese una altura:`)
    if (!isNaN(altura) && altura > 0) {
        alturas.push(altura);
        suma += altura;  // Sumar cada altura a la variable suma
    } else {
        alert("Por favor, ingrese una altura válida.");
        i--; 
    alturas.push(altura);
    altura += suma;
}
}
let promedio = suma/alturas.length;
alert(`El promedio de altura de las 5 personas es ${promedio}`) */


// Ejercicio 17: Se cuenta con la siguiente información:
	/* Las edades de 5 estudiantes del turno mañana.
	Las edades de 6 estudiantes del turno tarde.
	Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a)	Obtener el promedio de las edades de cada turno (tres promedios).
b)	Imprimir dichos promedios (promedio de cada turno).
c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.
*/



/* let edadesMa = []
for(let i = 0; i < 5; i++){
    let edad = prompt( 'Ingrese las edades de 5 alumnos a continuacion:')
    edadesMa.push(edad);
}

let edadesTar = []
for(let i = 0; i < 6; i++){
    let edad = prompt( 'Ingrese las edades de 6 alumnos a continuacion:')
    edadesTar.push(edad);
}

let edadesNoc = []
for(let i = 0; i < 11; i++){
    let edad = prompt( 'Ingrese las edades de 11 alumnos a continuacion:')
    edadesNoc.push(edad);
}



function calcularPromedio(edades){
    let suma = 0;
    for (let i = 0; i < edades.length; i++){
        suma += edades[i]
    }
    return suma / edades.length
}

let promedioMañana = calcularPromedio(edadesMa);
let promedioTarde = calcularPromedio(edadesTar);
let promedioNoche = calcularPromedio(edadesNoc);

console.log(`Promedio de edad turno mañana es ${promedioMañana}`)
console.log(`Promedio de edad turno Tarde es ${promedioTarde}`)
console.log(`Promedio de edad turno Noc es ${promedioNoche}`)

if(promedioMañana > promedioNoche && promedioMañana > promedioTarde){
    alert('El turno mañana tiene el promedio mas alto.')
}else if(promedioTarde > promedioMañana && promedioTarde > promedioNoche){
    alert('El turno mañana tiene el promedio mas alto')
}else if( promedioNoche > promedioMañana && promedioNoche > promedioTarde){
    alert('El turno noche tiene el promedio mas alto')
} */




// Ejercicio 18: Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
/* a)	La cantidad de valores negativos ingresados.
b)	La cantidad de valores positivos ingresados.
c)	La cantidad de múltiplos de 15.
d)	El valor acumulado de los números ingresados que son pares. */

valoresNumericos = []

for(let i = 0; i < 10; i++){
let valores = prompt('Ingrese 10 valores, pueden ser negativos')
valoresNumericos.push(valores)
}

let valoresNagativos = 0;
let valoresPsotivios = 0;
let Multiplos = 0;
let valoresPares = 0;


for(let num of valoresNumericos){

if( num < 0){
    valoresNagativos++
}else if( num > 0){
    valoresPsotivios++
}else if (num % 15 === 0){
    Multiplos++
}else if(num %2 === 0){
    valoresPares++
}
}

alert(`Hay ${valoresNagativos} valores negativos`)
alert(`Hay ${valoresPsotivios} valores positivos`)
alert(`Hay ${Multiplos} valores multiplo de 15`)
alert(`Hay ${valoresPares} valores Pares`)

// Ejercicio 19: hacer un programa que lea los lados de 4 triángulos, e informar:
/* a)	De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno 
b)	Cantidad de triángulos de cada tipo.
c)	Tipo de triángulo del que hay menor cantidad.  */
