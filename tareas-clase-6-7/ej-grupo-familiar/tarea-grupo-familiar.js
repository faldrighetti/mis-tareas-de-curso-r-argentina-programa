const $botonProcesar = document.querySelector('#procesar');
const grupoFamiliar = document.querySelector('#grupo-familiar');
const $botonCalcular = document.createElement('button');
const $botonResetear = document.querySelector('#resetear')

$botonCalcular.className = 'boton-prueba';
$botonCalcular.id = 'boton-calcular';
$botonCalcular.textContent = 'Calcular';
const $form = document.querySelector('form');

function limpiarCampos(){

    let edadMayor = document.querySelector('#edad-mayor');
    let edadMenor = document.querySelector('#edad-menor');
    let edadPromedio = document.querySelector('#edad-promedio');

    edadMayor.textContent = '';
    edadMenor.textContent = '';
    edadPromedio.textContent = '';

    return false;
}

let resetear = function(){
    const totalIntegrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < totalIntegrantes.length; i++){
        totalIntegrantes[i].remove();
    }

    let divEdades = document.querySelector("#resultado");
    divEdades.className = 'oculto';

    limpiarCampos();
    borrarErroresPrevios();
    destruirBoton();
}

$botonResetear.onclick = function(){
    resetear();
}

function destruirBoton(){
    let botonesCalculo = document.querySelectorAll('#boton-calcular');
    for (i = 0; i < botonesCalculo.length; i++){
        if(botonesCalculo.length > 0){
            botonesCalculo[i].remove();
        }
    }
}

function crearInputs(){
    const integrantes = Number(document.querySelector('#pregunta').value);

    const exitoIntegrantes = validarIntegrantes() === '';
    if (exitoIntegrantes){
        destruirBoton();
        borrarErroresPrevios();

        for (i = 0; i < integrantes; i++){
            const nuevoDiv = document.createElement('div');
            nuevoDiv.className = 'integrante';
            const nuevoInput = document.createElement('input');
            nuevoInput.className = 'edades-integrantes';
            const nuevoLabel = document.createElement('label');
            nuevoLabel.textContent = `Ingrese edad del integrante # ${i + 1}`;
    
            nuevoDiv.appendChild(nuevoLabel);
            nuevoDiv.appendChild(nuevoInput);
    
            const grupoFamiliar = document.querySelector('#grupo-familiar');
            grupoFamiliar.appendChild(nuevoDiv);
        }
        crearBoton();
    }
    else {
        borrarErroresPrevios();
        const $erroresIntegrantes = document.querySelector('#errores-integrantes');
        const errorIntegrantes = document.createElement('li');
        errorIntegrantes.innerText = validarIntegrantes();
        $erroresIntegrantes.appendChild(errorIntegrantes);
    }
    
}

function borrarErroresPrevios(){
    const erroresPrevios = document.querySelectorAll('li');
    erroresPrevios.forEach(function(errorPrevio){
        errorPrevio.remove();
    })
}

function crearBoton(){
    $botonCalcular.className = 'btn btn-success';
    grupoFamiliar.appendChild($botonCalcular);

}

$botonProcesar.onclick = function(){
    resetear();
    crearInputs();

    return false;    
}

$botonCalcular.onclick = function(){
    
    const esExito = manejarErroresEdades() === 0;
    if(esExito){
        escribirResultados();
    }
}

function manejarErroresEdades(){

    const edades = document.querySelectorAll('.edades-integrantes');
    let cantidadErrores = 0;
    const $erroresEdades = document.querySelector('#errores-edades');
    borrarErroresPrevios();

    edades.forEach(function(edadARevisar){
        edadARevisar = Number(edadARevisar.value);
        const error = validarEdades(edadARevisar);
        if(validarEdades(edadARevisar) !== ''){
            cantidadErrores++;

            const $error = document.createElement('li');
            $error.innerText = error;

            $erroresEdades.appendChild($error);
        }
    })

    return cantidadErrores;
}

function escribirResultados(){
    let divEdades = document.querySelector("#resultado");
    divEdades.className = '';

    const edades = document.querySelectorAll('.edades-integrantes');
    let edadMayor = document.querySelector('#edad-mayor');
    let edadMenor = document.querySelector('#edad-menor');
    let edadPromedio = document.querySelector('#edad-promedio');

    edadMayor.textContent = obtenerNumeroMayor(edades);
    edadMenor.textContent = obtenerNumeroMenor(edades);
    edadPromedio.textContent = obtenerPromedio(edades).toFixed(2);
    
    event.preventDefault();
}

function validarIntegrantes(){
    const integrantes = Number(document.querySelector('#pregunta').value);
    let textoError = '';
    
    if(integrantes < 1){
        textoError = 'La familia debe tener al menos un integrante';
    }
    else if(integrantes > 10){
        textoError = 'Este campo no admite más de 10 integrantes';
    }

    return textoError;
}

function validarEdades(edadAValidar){
    let textoError = ''

        if(/[A-z]/.test(edadAValidar)){
            textoError = 'El campo edades solo puede contener números';
        }
        else if (!edadAValidar){
            textoError = 'Ningún campo puede estar vacío';
        }
        else if (edadAValidar <= 0){
            textoError = 'Debe ingresar una edad mayor a cero';
        }
        else if(edadAValidar > 110){
            textoError = 'El número que ingresaste es para la persona más vieja del mundo!';
        }
        else if(/\./.test(edadAValidar)){
            textoError = 'El campo edades no puede incluir decimales, solo números enteros';
        }
    
    return textoError;
}
