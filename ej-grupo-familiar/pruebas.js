const botonCalculo = document.querySelector('.boton-prueba')

function probarValidarEdades(){
    console.assert(
        validarEdades(-1) === 'Debe ingresar una edad mayor a cero',
        'La función validarEdades no invalidó una edad negativa o cero'
    )

    console.assert(
        validarEdades(30) === '',
        'La función validarEdades falló al validar una edad correcta'
    )

    console.assert(
        validarEdades(111) === 'El número que ingresaste es para la persona más vieja del mundo!',
        'La función validarEdades falló al validar una edad correcta'
    )

    console.assert( 
        validarEdades('') === 'Este campo no puede estar vacío',
        'La función no funcionó para invalidar un string vacío'
    )
}

probarValidarEdades();