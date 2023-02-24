function probarValidarSalario(){
    console.assert(validarSalario(2000) === '', 'La función no validó un salario válido');

    console.assert(validarSalario(-10) === 'El salario ingresado debe ser mayor a cero',
    'La función de validar salario falló al invalidar un número negativo');

    console.assert(validarSalario(600.3) === 'Los campos no admiten números decimales',
    'La función no invalidó un salario ingresado con números decimales');

    console.assert(validarSalario('7o0') === 'Los campos admiten únicamente números enteros',
    'La función falló al invalidar un input con letras');
}

probarValidarSalario();
