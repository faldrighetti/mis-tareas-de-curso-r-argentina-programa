/*Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. 
https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input
2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. 
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.
3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.*/

// TAREA: HACER LO MISMO CON UN INPUT PREGUNTANDO EL SALARIO MENSUAL Y CALCULAR EL SALARIO ANUAL
// HACERLO EN UN ARCHIVO APARTE

//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $botonCalculoAnualMensual = document.querySelector('#boton-calcular')
const $botonCalculoMensualAnual = document.querySelector('#boton-calcular-2')

const MESES_EN_ANIO = 12;

$botonCalculoAnualMensual.onclick = function(){
    let salarioAnual = Number(document.querySelector('#salario-anual').value);
    let salarioMensual = salarioAnual / MESES_EN_ANIO;
    
    document.querySelector('#salario-mensual').value = salarioMensual;
    return false;
}

$botonCalculoMensualAnual.onclick = function(){
    let salarioMensual = Number(document.querySelector('#salario-mensual-2').value);
    let salarioAnual = salarioMensual * MESES_EN_ANIO;

    document.querySelector('#salario-anual-2').value = salarioAnual;
    return false;
}