//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


//let titulo = document.querySelector("h1");

// MAL. El H1 se busca al hacer clic. Por lo tanto, esta constante se declara dentro de la función

// -------------------------------------------------------------------------

const primerNombre = document.querySelector("#primer-nombre");
const segundoNombre = document.querySelector("#segundo-nombre");
const apellidoUsuario = document.querySelector("#apellido");
const edadUsuario = document.querySelector("#edad");

const $botonCalcular = document.querySelector("#boton");

// Después MODIFICO el título con el valor de #primer-nombre

$botonCalcular.onclick= function(){
    const titulo = document.querySelector("h1");
    titulo.innerText = "Hola, " + primerNombre.value

    const nodoPagina = document.querySelector("body")
    const nuevoParrafo = document.createElement("p")
    const texto = document.createTextNode (primerNombre.value + " " + segundoNombre.value + " " + apellidoUsuario.value + ", " + edadUsuario.value + " años");
    nuevoParrafo.appendChild(texto);
    nodoPagina.appendChild(nuevoParrafo);

    return false;
};

/*
const nodoPagina = document.querySelector('body');
const nuevoParrafo = document.createElement('p');
const textoParrafo = document.createTextNode('Yeeee!');
nuevoParrafo.appendChild(textoParrafo);
nodoPagina.appendChild(nuevoParrafo);
*/