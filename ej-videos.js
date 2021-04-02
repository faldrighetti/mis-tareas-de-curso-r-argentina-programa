    //TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con cada dato.
// Al apretar el botón "Calcular tiempo total", debe mostrar en un <strong> pre-creado el tiempo total de los videos.
// Video 1: 2:34:43
// Video 2: 1:48:24
// Video 3: 0:47:26
// Video 4: 2:18:45
// Video 5: 2:40:48
// Video 6: 1:14:18

const $botonTiempo = document.querySelector("#boton-tiempo")

console.log(document.querySelectorAll(".horas"))

$botonTiempo.onclick = function(){
    const horasTotales = document.querySelectorAll(".horas");
    const minutosTotales = document.querySelectorAll(".minutos");
    const segundosTotales = document.querySelectorAll(".segundos");

    let horas = 0
    let minutos = 0
    let segundos = 0
 
    for (let i = 0; i < horasTotales.length; i++){
        horas = horas + Number(horasTotales[i].value)
    };

    for (let i = 0; i < minutosTotales.length; i++){
        minutos = minutos + Number(minutosTotales[i].value)
        if (minutos >= 60){
         minutos -= 60;
         horas += 1;   
        }
    };

    for (let i = 0; i < segundosTotales.length; i++){
        segundos = segundos + Number(segundosTotales[i].value)
        if (segundos >= 60){
            segundos -= 60;
            minutos += 1;
        }
    };

    const textoFinal = (`${horas} horas, ${minutos} minutos y ${segundos} segundos`)

    document.querySelector("#tiempo-total").value = textoFinal

    return false
}

// -Le asigno AL VALUE del campo de texto disabled, la oración que quiero que aparezca allí.
// -Hago el Number solamente del value de Horas/Min/SegTotales y no de eso y la variable horas/min/seg
//  porque sino intenta hacer el number de dos parámetros distintos y se descajeta todo
// -El código del 60 significa: "Si el número de segundos es mayor o igual a 60, restamos 60 del let segundos
//  y al let minutos le sumamos 1"