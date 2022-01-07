/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonProcesar = document.querySelector('#procesar')

const grupo_familiar = document.querySelector('#grupo-familiar')
const $botonCalcular = document.createElement('button')
$botonCalcular.id = 'boton-calcular'
$botonCalcular.textContent = 'Calcular'

function mayor (){
    let edades = document.querySelectorAll('.edades-integrantes')
    let mayor_num = edades[0].value
    for(let i = 0; i < edades.length; i++) {
        if(edades[i].value > mayor_num){
            mayor_num = edades[i].value
        }
    }
    return Number(mayor_num)
}


function menor(){
    let edades = document.querySelectorAll('.edades-integrantes')
    let menor_num = edades[0].value
    for(let i = 0; i < edades.length; i++) {
        if(edades[i].value < menor_num){
            menor_num = edades[i].value
        }
    }

    return menor_num
    }

function promedio(){
    let edades = document.querySelectorAll('.edades-integrantes')
    let suma = 0
    for(let i = 0; i < edades.length; i++) {
        suma += Number(edades[i].value)
    }

    return suma / edades.length
}

let resetear = function(){
    const totalIntegrantes = document.querySelectorAll('.integrante') //crea un NodeList con los elementos de clase 'integrante',
    // o sea los divs con cada input del grupo familiar.
    for (let i = 0; i < totalIntegrantes.length; i++){
        totalIntegrantes[i].remove()
    }

    destruir_boton()
}

const $botonResetear = document.querySelector('#resetear')

function destruir_boton(){
    let botonesCalculo = document.querySelectorAll('#boton-calcular')
    for (i = 0; i < botonesCalculo.length; i++){
        if(botonesCalculo.length > 0){
            botonesCalculo[i].remove()
        }
    }
}

$botonResetear.onclick = function(){
    resetear()
}

function crea_inputs(){

    const integrantes = Number(document.querySelector('#pregunta').value)
    destruir_boton()

    for (i = 0; i < integrantes; i++){
        const nuevoDiv = document.createElement('div')
        nuevoDiv.className = 'integrante'
        const nuevoInput = document.createElement('input')
        nuevoInput.className = 'edades-integrantes'
        const nuevoLabel = document.createElement('label')
        nuevoLabel.textContent = 'Ingrese edad del integrante #' + (i + 1)

        nuevoDiv.appendChild(nuevoLabel)
        nuevoDiv.appendChild(nuevoInput)

        const grupo_familiar = document.querySelector('#grupo-familiar')
        grupo_familiar.appendChild(nuevoDiv)
    }
    crea_boton()
}

function crea_boton(){
    grupo_familiar.appendChild($botonCalcular)

}

$botonProcesar.onclick = function(){

    resetear()
    crea_inputs()

    return false;    
}

$botonCalcular.onclick = function(){
    let edades = document.querySelectorAll('.edades-integrantes')
    let edad_mayor = document.querySelector('#edad-mayor')
    let edad_menor = document.querySelector('#edad-menor')
    let edad_promedio = document.querySelector('#edad-promedio')
    
    console.log(mayor())
    console.log(menor())
    console.log(promedio())

    edad_mayor.textContent = mayor()
    edad_menor.textContent = menor()
    edad_promedio.textContent = promedio()

    return false;
}
