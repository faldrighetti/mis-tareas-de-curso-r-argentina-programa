//TAREA: En otro archivo distinto,
// Empezar preguntando cuánta gente hay en el grupo familiar.
// Crear tantos inputs + labels como gente haya para completar la edad de cada integrante.
// Al hacer click en "Calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y
// el promedio del grupo familiar.
// BONUS: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs
// ya creados (investigar cómo en MDN).

function obtenerMayorNumero(numeros){
    let mayorNumero = numeros [0];
    for (let i = 1; i < numeros.length; i++){
        if (numeros [i] > mayorNumero) {
            mayorNumero = numeros[i];
        }
    }

    return mayorNumero;
}



function obtenerMenorNumero(numeros){
    let menorNumero = numeros [0];
    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i]
        }
    }

    return menorNumero;
}

function obtenerPromedio(numeros){
    let acumulador = 0
    for (let i = 0; i < numeros.length; i++){
        acumulador += numeros[i];
    }

    return (acumulador / numeros.length).toFixed(2);
}
