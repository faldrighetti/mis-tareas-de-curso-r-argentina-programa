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
const $totalHoras = document.querySelector("#horas-totales")
const $totalMinutos = document.querySelector("#minutos-totales")
const $totalSegundos = document.querySelector("#segundos-totales")


$calcularTiempoTotal.onclick = function (){

    const duracionHoras = document.querySelectorAll(".horas")
    const duracionMinutos = document.querySelectorAll(".minutos")
    const duracionSegundos = document.querySelectorAll(".segundos")

    let contadorHoras = 0
    let contadorMinutos = 0
    let contadorSegundos = 0
    
    for (i=0; i < duracionHoras.length; i++){
        contadorHoras += Number(duracionHoras[i].value)
    }

    for (i = 0; i < duracionSegundos.length; i++) {
        contadorSegundos += Number(duracionSegundos[i].value)
        if (contadorSegundos > 60) {
            contadorSegundos -= 60
            contadorMinutos = contadorMinutos + 1
        }
    }

    for (i = 0; i < duracionMinutos.length; i++) {
        contadorMinutos += Number(duracionMinutos[i].value)
        if (contadorMinutos > 60) {
            contadorMinutos -= 60
            contadorHoras = contadorHoras + 1
        }
    }

document.querySelector("#horas-totales").value = contadorHoras
document.querySelector("#minutos-totales").value = contadorMinutos
document.querySelector("#segundos-totales").value = contadorSegundos

     return false
    }

//EXPLICACIÓN: Básicamente todo consiste en hacer bucles con horas, minutos y segundos. Extraer la duración con el 
// querySelectorAll y las clases, para luego declarar lets de contadores iniciando en 0 y sumarlos. Hacer un bucle con
// elementos de una class recorre dicha class y extrae sus elementos, desde la posición 0 (de ahí el let = 0) hasta 
// el final del length.

//Restantes: ingresar números en el sistema, definir sumas, definir restos (que no quede en 7 horas, 187', 186");


//C:/Users/Fede/Desktop/Programacion/introduccion-a-js-master/tareas/Ejercicios/ejercicio-videos.html