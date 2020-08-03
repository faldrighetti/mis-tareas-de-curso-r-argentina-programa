// TAREA: Crear una interfaz que permita agregar o quitar (botones agregar o quitar) inputs+labels para completar.
// Al hacer clic en Calcular, mostrar en un elemento pre-existente el mayor y menor salario anual.
// BONUS: Si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0). (Clave en video clase 7, 35:10).


// Botón principal: agregue empleados (agrega campo de texto type number en el que se ingresa su salario anual)
// hacer un form y declararle inputs con js
// Una función que cree un input y un label cada vez que haga clic en el button agregar
// BONUS: hacer un if (valor !== '')

const $agregaEmpleado = document.querySelector("#agregar-empleado");

$agregaEmpleado.onclick = function(){
    crearEmpleado();
}

function crearEmpleado(){

    const $div = document.createElement("div");
    $div.className = "empleado";
    
    const newLabel = document.createElement("label");
    newLabel.textContent = "Salario anual del empleado: ";

    const newInput = document.createElement("input");
    newInput.type = "number";

    $div.appendChild(newLabel);
    $div.appendChild(newInput);

    const $employees = document.querySelector("#empleados");
    $employees.appendChild($div);

}

// crea un input y label por cada clic

const $quitaEmpleado = document.querySelector("#quitar-empleado");

$quitaEmpleado.onclick = function(){
    document.querySelector(".empleado").remove();
}

// quita un input y label por cada clic (el primero)


function calcularSalarios ( ){

    const todosLosEmpleados = document.querySelectorAll(".empleado input")
    const todosLosSalarios = []

    for (let i = 0; i < todosLosEmpleados.length; i++){
        if (todosLosEmpleados[i].value !== ""){
            todosLosSalarios.push(Number(todosLosEmpleados[i].value))
        }
       
    }
    console.log(todosLosSalarios)

    document.querySelector("#salario-mayor").textContent += " " + Math.max(...todosLosSalarios)
    document.querySelector("#salario-menor").textContent += " " + Math.min(...todosLosSalarios)

// usé el spread operator ... que adapta a las funciones Math, que funcionan bien con series de números pero
// no con arrays precisamente.

}


const $calcular = document.querySelector("#calcular")

calcular.onclick = function (){
    calcularSalarios();
    return false;
}

