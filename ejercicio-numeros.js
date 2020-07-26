
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
// <em> es poner en itálica

const contenidoLi = document.querySelectorAll("li");
let suma = 0
const arrayNumeros = []

for (let i = 0; i < contenidoLi.length; i++){
    arrayNumeros.push(contenidoLi[i].innerText)
}

console.log(arrayNumeros)

//Se sacan los números de contenidoLi (la lista de números) y con eso se le hace un push al array vacío antes declarado


for (let i = 0; i < arrayNumeros.length; i++){
    suma +=  Number(arrayNumeros[i])
}


console.log(suma) // esto da 180, la suma realizada (vamos carajo)

const promedio = suma / arrayNumeros.length;
console.log(promedio); // da 18 (el promedio)

const agregadoPromedio = document.querySelector("#texto-promedio")
agregadoPromedio.innerText = agregadoPromedio.innerText + promedio;

console.log(agregadoPromedio.innerText)

const numeroAlto = Math.max.apply(null, arrayNumeros);
console.log(numeroAlto);

const numeroBajo = Math.min.apply(null, arrayNumeros);
console.log(numeroBajo);

let agregadoMayor = document.querySelector ("#texto-mayor")
agregadoMayor.textContent = agregadoMayor.textContent +  numeroAlto;

let agregadoMenor = document.querySelector ("#texto-menor")
agregadoMenor.textContent = agregadoMenor.textContent + numeroBajo;

var map = {};
var mostFrequentElement = arrayNumeros[0];
function findMostFrequent(){
    for(var i = 0; i<arrayNumeros.length; i++){
        if(!map[arrayNumeros[i]]){
            map[arrayNumeros[i]]=1;
        }else{
            ++map[arrayNumeros[i]];
            if(map[arrayNumeros[i]]>map[mostFrequentElement]){
                mostFrequentElement = arrayNumeros[i];
            }
        }
    }
    console.log(mostFrequentElement);
}

findMostFrequent();

//Esto de alguna forma devuelve el número más frecuente del array. La variable map es una estructura de datos.

let agregadoFrecuente = document.querySelector ("#texto-frecuente")
agregadoFrecuente.textContent = agregadoFrecuente.textContent + mostFrequentElement;





// declarar lets de contadores iniciando en 0 y sumarlos. Hacer un bucle con elementos de una class recorre
// dicha class y extrae sus elementos, desde la posición 0 (de ahí el let = 0) hasta el final del length.

//C:/Users/Fede/Desktop/Programacion/introduccion-a-js-master/tareas/clase-5/ejercicio-numeros.html
