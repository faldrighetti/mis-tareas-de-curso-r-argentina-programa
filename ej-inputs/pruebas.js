function probarValidarSalario(){

    console.assert(validarSalario(2000) === '', 'La función no validó un salario válido')

    console.assert(validarSalario(-10) === 'El salario ingresado debe ser mayor a cero',
    'La función de validar salario falló al invalidar un número negativo');

}
