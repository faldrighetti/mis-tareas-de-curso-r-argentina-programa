
//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*document.querySelector('#mostrar-en-pantalla').onclick = function () {
    let titulo = document.querySelector("h1");
    let nombreTitulo = (document.querySelector('#primer-nombre').value);
    titulo.textContent = "Bienvenido, " + nombreTitulo;
    let nodeparrafo = document.createElement("p");
    nodeparrafo.textContent = Juntar();
    document.querySelector('form').appendChild(nodeparrafo);
    return false;
}
function Juntar () {
    let Nombre = (document.querySelector("#primer-nombre").value);
    let SegNombre = (document.querySelector("#segundo-nombre").value);
    let Apellido = (document.querySelector("#apellido").value);
    let Edad = (document.querySelector("#edad").value);
    return Nombre + ' ' +  SegNombre + ' ' + Apellido + ', ' + Edad;
}
*/


const titulo = document.querySelector("h1");

const primerNombre = document.querySelector("#primer-nombre")
const segundoNombre = document.querySelector("#segundo-nombre")
const apellido = document.querySelector("#apellido")
const edad = document.querySelector("#edad")

const $mostrarEnPantalla = document.querySelector("#mostrar-en-pantalla")


$mostrarEnPantalla.onclick = function(){

    const titulo = document.querySelector("h1");
    console.log(titulo);
    console.log(titulo.innerText);
    titulo.innerText = "Hola, " + primerNombre.value

    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode(primerNombre.value + " " + segundoNombre.value + " " + apellido.value + ", " + edad.value + " años." );
    nuevoParrafo.appendChild(textoParrafo);
    nodoPagina.appendChild(nuevoParrafo);

    return false;
} 

// ↑ SEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

/*Ejemplo:

const nodoPagina = document.querySelector('body');
const nuevoParrafo = document.createElement('p');
const textoParrafo = document.createTextNode('Yeeee!');
nuevoParrafo.appendChild(textoParrafo);
nodoPagina.appendChild(nuevoParrafo);
*/

// file:///C:/Users/Fede/Desktop/Programacion/introduccion-a-js-master/tareas/clase-5/mi-formulario-f.html?
