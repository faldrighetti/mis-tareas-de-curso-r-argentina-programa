//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
// Video 1: 2:34:43
// Video 2: 1:48:24
// Video 3: 0:47:26
// Video 4: 2:18:45
// Video 5: 2:40:48
// Video 6: 1:14:18

const $calcularTiempoTotal = document.querySelector("#calcular-tiempo-total")

$calcularTiempoTotal.onclick = function (){

const totalHoras = Number(document.querySelectorAll(".horas").value);
const totalMinutos = Number(document.querySelectorAll(".minutos").value);
const totalSegundos = Number(document.querySelectorAll(".segundos").value);

    for (let i = 0; i < totalHoras.length; i++) {
        console.log(totalHoras[i])
    }

    for (let i = 0; i < totalMinutos.length; i++) {
        console.log(totalMinutos[i])
    }

    for (let i = 0; i < totalSegundos.length; i++) {
        console.log(totalSegundos[i])
        
    }

const horasFinal = totalHoras
const minutosFinal = totalMinutos
const segundosFinal = totalSegundos

document.querySelector("#horas-totales").value = horasFinal
document.querySelector("#minutos-totales").value = minutosFinal
document.querySelector("#segundos-totales").value = segundosFinal

console.log(horasFinal);
console.log(minutosFinal);
console.log(segundosFinal);

     return false
    }

//ver cómo Fabricio hizo el ejercicio de salario anual y mensual en un disabled.

//Restantes: ingresar números en el sistema, definir sumas, definir restos (que no quede en 7 horas, 187', 186");


//C:/Users/Fede/Desktop/Programacion/introduccion-a-js-master/tareas/Ejercicios/ejercicio-videos.html