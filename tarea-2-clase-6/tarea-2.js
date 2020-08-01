// TAREA: Crear una interfaz que permita agregar o quitar (botones agregar o quitar) inputs+labels para completar.
// Al hacer clic en Calcular, mostrar en un elemento pre-existente el mayor y menor salario anual.
// BONUS: Si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0). (Clave en video clase 7, 35:10).


// Botón principal: agregue empleados (agrega campo de texto type number en el que se ingresa su salario anual)
// hacer un form y declararle inputs con js. Los labels serían Empleado 1, Empleado 2, etc.
// Una función que cree un input y un label cada vez que haga clic en el button agregar
// BONUS: hacer un if (valor !== '')
//
//
//
//
//

function crearEmpleado(){

    const $div = document.createElement("div");
    $div.className = "empleado";
    
    const newLabel = document.createElement("label");
    newLabel.textContent = "Salario del empleado: ";

    const newInput = document.createElement("input");
    newInput.type = "number";

    $div.appendChild(newLabel);
    $div.appendChild(newInput);

    const $employees = document.querySelector("#empleados");
    $employees.appendChild($div);

}

const $agregaEmpleado = document.querySelector("#agregar-empleado");

const $quitaEmpleado = document.querySelector("#quitar-empleado");

$agregaEmpleado.onclick = function(){
    crearEmpleado();
}

const empleados =  Number(document.querySelector("input").value)

function calcularSalarios (){
    let cantidadEmpleados = 0
    for (let i = 0; i < empleados.length; i++) {

        if (Boolean(document.querySelector("input").value) === true) {
             cantidadEmpleados += empleados[i]

    } else {;}
}
}
    


$quitaEmpleado.onclick = function(){
    document.querySelector(".empleado").remove();
}