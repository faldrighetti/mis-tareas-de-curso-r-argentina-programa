function probarValidarEdades(){
    console.assert(
        validarEdades(-1) === 'No se puede ingresar un número negativo como edad',
        'La función validarEdades no invalidó una edad negativa')

    console.assert(
        validarEdades(30) === '', 'La función validarEdades falló al validar una edad correcta'
    )
}

probarValidarEdades();