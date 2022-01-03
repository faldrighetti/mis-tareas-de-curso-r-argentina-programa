//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonTiempo = document.querySelector('#calcular-tiempo-total')

$botonTiempo.onclick = function(){

    let arrayHoras = document.querySelectorAll('.horas')
    let arrayMinutos = document.querySelectorAll('.minutos')
    let arraySegundos = document.querySelectorAll('.segundos')

    let horasTotales = 0
    let minutosTotales = 0
    let segundosTotales = 0

    for(let i = 0; i < arrayHoras.length; i++){
        horasTotales += Number(arrayHoras[i].value)
    }
    for(let i = 0; i < arrayMinutos.length; i++){
        minutosTotales += Number(arrayMinutos[i].value)
    }
    for(let i = 0; i < arraySegundos.length; i++){
        segundosTotales += Number(arraySegundos[i].value)
    }

    while(segundosTotales >= 60){
        minutosTotales +=1
        segundosTotales -=60
    }

    while(minutosTotales >= 60){
        horasTotales += 1
        minutosTotales -= 60
    }

    console.log(horasTotales)
    console.log(minutosTotales)
    console.log(segundosTotales)
    
    document.querySelector('#horas-totales').value = horasTotales
    document.querySelector('#minutos-totales').value = minutosTotales
    document.querySelector('#segundos-totales').value = segundosTotales

    //Funcionan con .value porque están configurados como inputs.
    
    return false;
}