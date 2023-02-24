function obtenerNumeroMayor(array){
    let edadMayor = Number(array[0].value);
    for(let i = 0; i < array.length; i++) {
        if(Number(array[i].value) > edadMayor){
            edadMayor = Number(array[i].value);
        }
    }
    return edadMayor;
}

function obtenerNumeroMenor(array){
    let edadMenor = Number(array[0].value);
    for(let i = 0; i < array.length; i++) {
        if(Number(array[i].value) < edadMenor){
            edadMenor = Number(array[i].value);
        }
    }
    return edadMenor;
}

function obtenerPromedio(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++) {
        suma += Number(array[i].value);
    }
    return suma / array.length;
}