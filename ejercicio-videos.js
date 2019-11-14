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

/*const horasVideo1 = documen
const minutosVideo1
const segundosVideo1

const horasVideo2
const minutosVideo2
const segundosVideo2

const horasVideo3
const minutosVideo3
const segundosVideo3

const horasVideo4
const minutosVideo4
const segundosVideo4

const horasVideo5
const minutosVideo5
const segundosVideo5

const horasVideo6
const minutosVideo6
const segundosVideo6
*/

const totalHoras = document.querySelectorAll(".horas");
const totalMinutos = document.querySelectorAll(".minutos");
const totalSegundos = document.querySelectorAll(".segundos");

const $calcularTiempoTotal = document.querySelector("#calcular-tiempo-total")
const horasFinal = document.querySelector("#horas-totales")
const minutosFinal = document.querySelector("#minutos-totales")
const segundosFinal = document.querySelector("#segundos-totales");

console.log(totalHoras);    

let horasFuncion = 0


for (let i = 0; i < totalHoras.length; i++) {
        console.log(totalHoras[i])
        horasFuncion = horasFuncion + totalHoras[i]
    }

console.log(horasFuncion.value)

console.log(totalHoras.length.value);


$calcularTiempoTotal.onclick = function (){

    const calcularHorasTotales = horasFinal.value + minutosFinal.value + segundosFinal.value
    console.log(calcularHorasTotales);

     return false
    }

//acá sale resultado del clic en botón. Debo hacer entrar los números acá
//porque aún sale undefined. Debo hacer que #horas sea igual a números ingresados.     
// y después, mandar el resultado de esos números al cuadro de texto.

//ver cómo Fabricio hizo el ejercicio de salario anual y mensual en un disabled.


// La idea es crear una función dentro de la función de calcular total, que sume las horas. Podría hacer una de estas
// para horas, minutos y segundos. Es decir, 3 funciones parent y child. Ya con eso, las node lists y el bucle de suma
// podría empezar a hacer las cuentas. Me falta crear los espacios en el html de "X horas, X minutos y X segundos" 

//C:/Users/Fede/Desktop/Programacion/introduccion-a-js-master/tareas/Ejercicios/ejercicio-videos.html