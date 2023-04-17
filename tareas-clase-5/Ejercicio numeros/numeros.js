//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function listarNumeros(){
    let array = [];
    const numeros = document.querySelectorAll('li');
    
    for(let i = 0; i < numeros.length; i++){
        array.push(Number(numeros[i].innerText));
    }
    return array;
}

let arrayNumeros = listarNumeros();

function hallarPromedio(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i];
    }

    let promedio = total/array.length;
    return promedio;
}

let masGrande = function(array){
    let mayor = array[0];

    for(let i = 0; i < array.length; i++){
        if (array[i] > mayor){
            mayor = array[i];
        }
    }
    return mayor;
}

let masChico = function(array){
    let menor = array[0];

    for(let i = 0; i < array.length; i++){
        if (array[i] < menor){
            menor = array[i];
        }
    }
    return menor;
}

let masFrecuente = function(array){
    let masRepetido;
    let apariciones = 0;

    for(let i = 0; i < array.length; i++){
        let contador = 0;
        for (let j = 0; j < array.length; j++){
            if(array[j] === array[i]){
                contador++;
            }
        }
        if(contador > apariciones){
            masRepetido = array[i];
            apariciones = contador;
        }
    }
    return masRepetido;
}

document.querySelector('#texto-promedio').innerText += hallarPromedio(arrayNumeros);
document.querySelector('#texto-menor').innerText += masChico(arrayNumeros);
document.querySelector('#texto-mayor').innerText += masGrande(arrayNumeros);
document.querySelector('#texto-frecuente').innerText += masFrecuente(arrayNumeros);
