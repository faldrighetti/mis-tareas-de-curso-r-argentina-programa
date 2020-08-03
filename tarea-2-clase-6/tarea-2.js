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

const $quitaEmpleado = document.querySelector("#quitar-empleado");

$quitaEmpleado.onclick = function(){
    document.querySelector(".empleado").remove();
}


function calcularSalarios ( ){

    const todosLosEmpleados = document.querySelectorAll(".empleado input")
    let todosLosSalarios = []

    for (let i = 0; i < todosLosEmpleados.length; i++){
        if (todosLosEmpleados[i].value !== ""){
            todosLosSalarios.push = (Number(todosLosEmpleados[i].value))
        }
       
    }
    console.log(todosLosSalarios)

    document.querySelector("#salario-mayor").textContent = document.querySelector("#salario-mayor").textContent + " " + Math.max(Number(todosLosSalarios))
    document.querySelector("#salario-menor").textContent = document.querySelector("#salario-menor").textContent + " " + Math.min(Number(todosLosSalarios))

    //salarioMasAlto = salarioMayor();
    //salarioMasBajo = salarioMenor();

    return false;

}

/*    for (let i = 0; i < empleados.length; i++) {

    if (Boolean(document.querySelector(".empleado input").value) !== 0) {
        cantidadEmpleados += empleados[i]

} else {continue}
}
*/


const $calcular = document.querySelector("#calcular")

calcular.onclick = function (){
    calcularSalarios();

    return false;
}

