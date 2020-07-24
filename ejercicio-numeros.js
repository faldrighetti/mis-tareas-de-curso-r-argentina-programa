
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
// <em> es poner en itálica


const contenidoLi = document.querySelectorAll("li")
let suma = 0

const array = []

for (let i=0; i < contenidoLi.length; i++){
   array.push(contenidoLi[i].innerText)
}

console.log(array)

//Se sacan los números de contenidoLi (la lista de números) y con eso se le hace un push al array vacío antes declarado

for (let i = 0; i < array.length; i++) {
    suma += Number(array[i])    
}

console.log(suma) // esto da 180, la suma realizada (vamos carajo)

const promedio = suma / array.length;
console.log(promedio); // da 18 (el promedio)

const agregadoPromedio = document.querySelector("#texto-promedio")
console.log(agregadoPromedio.innerText)
agregadoPromedio.innerText = agregadoPromedio.innerText + promedio;



for (let i = 0; i < array.length; i++) {
    let menor = 0
    if (menor < array [i]) {
        menor = array [i];
    }
 //   console.log(menor)
}

for (let i = 0; i < array.length; i++) {
    let frec = 0
    if (frec < array [i]) {
        frec = array [i];
    }
    console.log(frec)
}




function numeroFrecuente (array) {
    

    return console.log(numeroFrecuente(array));
}


// declarar lets de contadores iniciando en 0 y sumarlos. Hacer un bucle con elementos de una class recorre
// dicha class y extrae sus elementos, desde la posición 0 (de ahí el let = 0) hasta el final del length.

//C:/Users/Fede/Desktop/Programacion/introduccion-a-js-master/tareas/clase-5/ejercicio-numeros.html
