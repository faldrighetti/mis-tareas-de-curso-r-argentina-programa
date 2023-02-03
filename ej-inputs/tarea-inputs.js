/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario 
anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, 
salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

// BONUS: dentro del for: if integrantes.value = '' {continue} O if integrantes.value !== '' ...{hacer código}

const $botonAgregar = document.querySelector('#boton-agregar');
const $botonQuitar = document.querySelector('#boton-quitar');
const $botonCalcular = document.querySelector('#boton-calcular');

function obtenerNumeroMayor(){

    let salariosIntegrantes = document.querySelectorAll('.salario-integrantes');
    let numeroMayor = Number(salariosIntegrantes[0].value);
    for(let i = 0; i < salariosIntegrantes.length; i++) {

        if(salariosIntegrantes[i].value === ''){
            continue;
        }

        if(Number(salariosIntegrantes[i].value) > numeroMayor){
            numeroMayor = Number(salariosIntegrantes[i].value);
        }
    }
    return numeroMayor;
}

function obtenerNumeroMenor(){

    let salariosIntegrantes = document.querySelectorAll('.salario-integrantes');
    let numeroMenor = Number(salariosIntegrantes[0].value);
    for(let i = 0; i < salariosIntegrantes.length; i++) {

        if(salariosIntegrantes[i].value === ''){
            continue;
        }

        if(Number(salariosIntegrantes[i].value) < numeroMenor){
            numeroMenor = Number(salariosIntegrantes[i].value);
        }
    }
    return numeroMenor
}

function obtenerPromedio(){

    let salariosIntegrantes = document.querySelectorAll('.salario-integrantes');
    let suma = 0;
    for(let i = 0; i < salariosIntegrantes.length; i++) {
        suma += Number(salariosIntegrantes[i].value);
    }

    return suma / salariosIntegrantes.length;
}

function agregar(){

    event.preventDefault();
    const integrantes = document.querySelectorAll('.integrante');

    const nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'integrante';
    const nuevoInput = document.createElement('input');
    nuevoInput.className = 'salario-integrantes';
    const nuevoLabel = document.createElement('label');
    nuevoLabel.textContent = `Ingrese salario anual del integrante #${integrantes.length + 1}`;

    nuevoDiv.appendChild(nuevoLabel);
    nuevoDiv.appendChild(nuevoInput);

    const salarios = document.querySelector('#formulario-salarios');
    salarios.appendChild(nuevoDiv);

    return false;
}

$botonAgregar.onclick = function(){
    agregar();
}

function quitar(){
    event.preventDefault();
    
    let salariosIntegrantes = document.querySelectorAll('.integrante');
    salariosIntegrantes[salariosIntegrantes.length - 1].remove();
}

function borrarErroresPrevios(){
    const erroresPrevios = document.querySelectorAll('li');
    erroresPrevios.forEach(function(errorPrevio){
        errorPrevio.remove();
    })
}

$botonQuitar.onclick = function(){
    quitar();
}

function resetear(){
    const anualMayor = document.querySelector('#anual-mayor');
    const anualMenor = document.querySelector('#anual-menor');
    const anualPromedio = document.querySelector('#anual-promedio');
    const mensualMayor = document.querySelector('#mensual-mayor');

    anualMayor.textContent = "";
    anualMenor.textContent = "";
    anualPromedio.textContent = "";
    mensualMayor.textContent = ""; 
}

$botonCalcular.onclick = function(){
    manejarErrores();

    if (manejarErrores() === 0){
        escribirResultados()
    };
}

function manejarErrores(){

    borrarErroresPrevios();
    let cantidadErrores = 0;
    let salariosIntegrantes = document.querySelectorAll('.salario-integrantes');
    let campoErrores = document.querySelector('#errores');

    salariosIntegrantes.forEach(function(elemento){
        if(validarSalario(Number(elemento.value)) !== ''){
            cantidadErrores++;
            let mensajeError = validarSalario(Number(elemento.value));
            let $error = document.createElement('li');
            $error.innerText = mensajeError;
            campoErrores.appendChild($error);
        }
    })

    return cantidadErrores;
}

function escribirResultados(){
    event.preventDefault();

    resetear();
    const anualMayor = document.querySelector('#anual-mayor');
    const anualMenor = document.querySelector('#anual-menor');
    const anualPromedio = document.querySelector('#anual-promedio');
    const mensualMayor = document.querySelector('#mensual-mayor');

    anualMayor.textContent = 'El salario anual más alto es: ' + obtenerNumeroMayor();
    anualMenor.textContent = 'El salario anual más bajo es: ' + obtenerNumeroMenor();
    anualPromedio.textContent = 'El salario anual promedio es: ' + obtenerPromedio().toFixed(2);
    mensualMayor.textContent = 'El salario mensual más alto es: ' + salarioMensual().toFixed(2);
}

function salarioMensual(){
    let salariosIntegrantes = document.querySelectorAll('.salario-integrantes');
    let salariosMensuales = [];
    for (let i = 0; i < salariosIntegrantes.length; i++){
        salariosMensuales.push(Number(salariosIntegrantes[i].value) / 12);
    }

    let numeroMayor = salariosMensuales[0];

    for (let i = 0; i < salariosMensuales.length; i++) {
        if(salariosMensuales[i] > numeroMayor){
            numeroMayor = salariosMensuales[i];
        }
    }
    return numeroMayor;
}

function validarSalario(salario){
    let textoError = '';

    if(salario <= 0){
        textoError = 'El salario ingresado debe ser mayor a cero';
    }
    if(/[A-z]/.test(salario)){
        textoError = 'Los campos admiten únicamente números enteros';
    }
    if(/\./.test(salario)){
        textoError = 'Los campos no admiten números decimales';
    }

    return textoError;
}
