function probarValidarEdades(){
    console.assert(
        validarEdades(30) === '',
        'La función validarEdades falló al validar una edad correcta')

    console.assert( 
        validarEdades('') === 'Este campo no puede estar vacío',
        'La función no funcionó para invalidar un string vacío')

    console.assert(
        validarEdades(-1) === 'Debe ingresar una edad mayor a cero',
        'La función validarEdades no invalidó una edad negativa o cero')

    console.assert(
        validarEdades(111) === 'El número que ingresaste es para la persona más vieja del mundo!',
        'La función validarEdades falló al validar una edad correcta')

    console.assert(validarEdades('Hola1') === 'El campo edades solo puede contener números',
        'La función no invalidó que se ingresen letras')

    console.assert(validarEdades(28.1) === 'El campo edades no puede incluir decimales, solo números enteros',
        'La función falló al invalidar una edad con decimales')
}

//probarValidarEdades();