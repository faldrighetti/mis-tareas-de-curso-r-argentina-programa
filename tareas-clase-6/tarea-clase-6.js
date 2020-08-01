//TAREA: En otro archivo distinto,
// Empezar preguntando cuánta gente hay en el grupo familiar.
// Crear tantos inputs + labels como gente haya para completar la edad de cada integrante.
// Al hacer click en "Calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y
// el promedio del grupo familiar.
// BONUS: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs
// ya creados (investigar cómo en MDN).


document.querySelector("#siguiente-paso").onclick = function (event) {
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
    event.preventDefault();
}

// Qué hace esta función? Primero, al apretar el botón "Siguiente" se declara un const que saca el input de cantidad
// de integrantes en el grupo familiar. Y también se declara otra constante con el número del valor de ese selector.
// La función borrarIntegrantesAnteriores() impide que, al cambiar el número del input, cree nuevos integrantes que se
// acumulen con los integrantes anteriores. Si cambio de 2 a 4, me va a poner 4 integrantes en vez de 6 (2+4). Es una
// técnica que se usa bastante y que se va a ver muy seguido en la carrera.
// El event.preventDefault() evita que se envíe el formulario.

document.querySelector("#calcular").onclick = function(event){
    const numeros = obtenerEdadesIntegrantes(); // ahora numeros es un array de números (ver su function).
    mostrarEdad("mayor", obtenerMayorNumero(numeros));
    mostrarEdad("menor", obtenerMenorNumero(numeros));
    mostrarEdad("promedio", obtenerPromedio(numeros));
    mostrarResultados();

    event.preventDefault();
}

// El botón Calcular tiene que obtener las edades de los integrantes, obtener la mayor, la menor y el promedio,
// y mostrarlos. Y al final de todo, tiene que mostrar todos esos resultados. 

document.querySelector("#resetear").onclick = resetear;

function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll(".integrante")
    for (let i = 0; i < $integrantes.length; i++){
        $integrantes[i].remove();
    }
}

// Esta función toma los integrantes del ALL de la class .integrante (declarada en la function crearIntegrante),
// con el bucle encuentra los elementos de esa NodeList y con el remove() los elimina.


function crearIntegrantes(cantidadIntegrantes){
    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
    } else {
        resetear();
    }

    for (let i = 0; i < cantidadIntegrantes; i++){
        crearIntegrante(i);
    }
}

// La función toma cuántos integrantes hay. Si la cantidad es mayor que 0, muestra el botón de cálculo. Y sino,
// resetea el formulario. Recordar que cantidadIntegrantes es el Number del .value del input "#cantidad-integrantes".

function crearIntegrante(indice){
    const $div = document.createElement("div");
    $div.className = "integrante"

    // El resultado de esto es <div class="integrante">
    // <label></label><input type="number"></div>

    const $label = document.createElement("label");
    $label.textContent = "Edad del integrante #: " + (indice + 1);
    
    const $input = document.createElement("input");
    $input.type = "number";

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector("#integrantes");
    $integrantes.appendChild($div);
}

// Declara constantes div, label e input para un integrante (en el bucle for de crearIntegrantes() define cuántas veces)
// se hace esto). El índice que se toma es el de la NodeList. En el appendChild se agregan ambas cosas al div.
// En las últimas dos líneas, agarra el placeholder del div vacío con id="integrantes" y le agrega el div.

function resetear(){
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
}

function ocultarBotonCalculo (){
    document.querySelector("#calcular").className = "oculto"
}

function mostrarBotonCalculo (){
    document.querySelector("#calcular").className = " "
}

// Al cambiar su class a un string vacío, pierde el display: none antes declarado en el CSS.

function ocultarResultados (){
    document.querySelector("#analisis").className = "oculto"
}

function mostrarResultados (){
    document.querySelector("#analisis").className = ""
}

function mostrarEdad(tipo, valor){
document.querySelector(`#${tipo}-edad`).textContent = valor;
}

// Con esa interpolación hace un document de elementos con ID "mayor-edad" y "menor-edad" (ver función calcular.onclick)

function obtenerEdadesIntegrantes(){
    const $integrantes = document.querySelectorAll (".integrante input");
    const edades = [];
    for (let i= 0; i < $integrantes.length; i++){
        edades.push(Number($integrantes[i].value))
    }
    return edades;
}

// El paréntesis significa "Dame los inputs que estèn dentro de una clase integrante".
// Declaro un array vacío y un bucle for al que le agrego las edades. La función me devuelve las edades.

// TAREA: Crear una interfaz que permita agregar o quitar (botones agregar o quitar) inputs+labels para completar.
// Al hacer clic en Calcular, mostrar en un elemento pre-existente el mayor y menor salario anual.
// BONUS: Si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0). (Clave en video clase 7, 35:10).
