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
    grupoFamiliar.appendChild($botonCalcular);
}

$botonProcesar.onclick = function(){
    resetear();
    crearInputs();

    return false;    
}

$botonCalcular.onclick = function(){
    console.log(manejarErroresEdades());

    const esExito = manejarErroresEdades() === 0;
    if(esExito){
        escribirResultados();
    }
}

function manejarErroresEdades(){

    const edades = document.querySelectorAll('.edades-integrantes');
    let cantidadErrores = 0;
    const $erroresEdades = document.querySelector('#errores-edades');

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
    //EL LI SE CREA DOS VECES, UNA ACÁ Y OTRA EN CREAR INPUTS. UNIFICAR.
    //LUEGO PROBAR EL RESTO DE VALIDACIONES. INTERPRETA QUE SE PONEN DECIMALES AUTOMÁTICAMENTE
    //REVISAR LAS PRUEBAS DE LAS VALIDACIONES
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
    edadPromedio.textContent = obtenerPromedio(edades);
    
    event.preventDefault();
}

//Función para validar la cantidad de integrantes
//Función para escribir el error si lo hay. Si es éxito, continuar como antes (manejarErroresIntegrantes)

//Función para procesar las edades recibidas
//Función para validar edades (manejarErroresEdades)
//Función para escribir text content

function validarIntegrantes(){
    const integrantes = Number(document.querySelector('#pregunta').value);
    let textoError = '';
    //TODO: vincular esta función al hacer clic en procesar
    if(integrantes < 1){
        textoError = 'La familia debe tener al menos un integrante';
    }
    else if(integrantes >= 10){
        textoError = 'Este campo no admite más de 10 integrantes';
    }

    return textoError;
}


function validarEdades(edadAValidar){
    let textoError = ''

        if (!edadAValidar){
            textoError = 'Este campo no puede estar vacío';
        }
        else if (edadAValidar <= 0){
            textoError = 'Debe ingresar una edad mayor a cero';
        }
        else if(edadAValidar > 110){
            textoError = 'El número que ingresaste es para la persona más vieja del mundo!';
        }
        else if(/[A-z]/.test(edadAValidar)){
            textoError = 'El campo edades solo puede contener números';
        }
        /*else if(/./.test(edadAValidar)){
            textoError = 'El campo edades no puede incluir decimales, solo números enteros';
        }*/
    
    return textoError;
}
