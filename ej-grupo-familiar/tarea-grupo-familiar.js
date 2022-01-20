/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo 
familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados 
(investigar cómo en MDN).
*/

const $botonProcesar = document.querySelector('#procesar')

const grupoFamiliar = document.querySelector('#grupo-familiar')
const $botonCalcular = document.createElement('button')
$botonCalcular.className = 'boton-prueba'
$botonCalcular.id = 'boton-calcular'
$botonCalcular.textContent = 'Calcular'

function obtenerNumeroMayor(){
    let edades = document.querySelectorAll('.edades-integrantes')
    let edadMayor = edades[0].value
    for(let i = 0; i < edades.length; i++) {
        if(edades[i].value > edadMayor){
            edadMayor = edades[i].value
        }
    }
    return Number(edadMayor)
}


function obtenerNumeroMenor(){
    let edades = document.querySelectorAll('.edades-integrantes')
    let edadMenor = edades[0].value
    for(let i = 0; i < edades.length; i++) {
        if(edades[i].value < edadMenor){
            edadMenor = edades[i].value
        }
    }

    return edadMenor
}

function obtenerPromedio(){
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

    destruirBoton()
}

const $botonResetear = document.querySelector('#resetear')

function destruirBoton(){
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

function crearInputs(){
    const integrantes = Number(document.querySelector('#pregunta').value)
    destruirBoton()

    for (i = 0; i < integrantes; i++){
        const nuevoDiv = document.createElement('div')
        nuevoDiv.className = 'integrante'
        const nuevoInput = document.createElement('input')
        nuevoInput.className = 'edades-integrantes'
        const nuevoLabel = document.createElement('label')
        nuevoLabel.textContent = 'Ingrese edad del integrante #' + (i + 1)

        nuevoDiv.appendChild(nuevoLabel)
        nuevoDiv.appendChild(nuevoInput)

        const grupoFamiliar = document.querySelector('#grupo-familiar')
        grupoFamiliar.appendChild(nuevoDiv)
    }
    crearBoton()
}

function crearBoton(){
    grupoFamiliar.appendChild($botonCalcular)

}

$botonProcesar.onclick = function(){
    resetear()
    crearInputs()

    return false;    
}

$botonCalcular.onclick = function(){
    let edadMayor = document.querySelector('#edad-mayor')
    let edadMenor = document.querySelector('#edad-menor')
    let edadPromedio = document.querySelector('#edad-promedio')

    edadMayor.textContent = obtenerNumeroMayor()
    edadMenor.textContent = obtenerNumeroMenor()
    edadPromedio.textContent = obtenerPromedio()

    return false;
}
