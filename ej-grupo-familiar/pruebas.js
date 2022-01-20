function validarEdades(){
    let edades = document.querySelectorAll('.edades-integrantes')
    for(let i = 0; i < edades.length; i++){
        if (Number(edades[i].value) < 0){
            return 'No se puede ingresar un número negativo como edad'
        }
    return ''
}
}

const botonCalculo = document.querySelector('.boton-prueba')

botonCalculo.onclick = function(){
    probarValidarEdades()
}
// el problema acá es que quiero que se llame la función al hacer clic en Calcular, pero
// no puedo hacer otro onclick

function probarValidarEdades(){
    console.assert(
        validarEdades(-1) === 'No se puede ingresar un número negativo como edad',
        'La función validarEdades no invalidó una edad negativa')

    console.assert(
        validarEdades(30) === '', 'La función validarEdades falló al validar una edad correcta'
    )
}

