
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

listanum = []

const numeros = document.querySelectorAll('li')

console.log(numeros)

for(let i = 0; i < numeros.length; i++){
    listanum.push(Number(numeros[i].innerText))
}

console.log(listanum)

let total = 0

for(let i = 0; i < listanum.length; i++){
    total += listanum[i]
}
total / listanum.length

let promedio = total/listanum.length

console.log(promedio)


let masGrande = function(){
    let mayor = listanum[0]
    for(let i = 0; i < listanum.length; i++){
        if (listanum[i] > mayor){
            mayor = listanum[i]
        }
    }
    return mayor
}

let masChico = function(){
    let menor = listanum[0]
    for(let i = 0; i < listanum.length; i++){
        if (listanum[i] < menor){
            menor = listanum[i]
        }
    }
    return menor
}

console.log('El promedio es ' + promedio)
console.log('El más chico es '+ masChico())
console.log('El más grande es '+ masGrande())

document.querySelector('#texto-promedio').innerText += promedio
document.querySelector('#texto-menor').innerText += masChico()
document.querySelector('#texto-mayor').innerText += masGrande()


/*let contador = 0
let caracteresVeces = []

for (let i = 0; i < listanum.length; i++){
    for (let j = 0; j < caracteresVeces.length, j++){
        if (i === j){
            continue
        } else{caracteresVeces.push(listanum[i])
        }
    }
}
console.log(caracteresVeces)

let frecuente = function{
    for(let i = 0; i < listanum.length; i++){
        if (listanum[i] === i// MODIFICAR QUE TIENE QUE ESTAR EN CARACTERES VECES){
            contador ++
        }
    }

}*/

/*

A ver, cómo consigo el más frecuente? Se puede hacer con un par de bucles, supuestamente. Uno, seguro, es el contador
de veces

*/

/*let masFrecuente = 1
let veces = 0
let masRepetido;

for (let i = 0; i < lista.length; i++){
    
    for (j = i; j < lista.length; j++){
        if (lista[i] == lista[j]){
            veces += 1;
        if (masFrecuente < veces){
            masFrecuente = veces;
            masRepetido = lista[i];
        }
        }
    }
    veces = 0;
}

console.log(masRepetido); // devuelve el 10


Hay un for doble. El array se recorre dos veces. En el segundo recorrido, aparece la variable j que depende de i.
IF 1: Cuando el bucle encuentre un elemento en J que ya había encontrado en I, le suma 1 a la variable "veces".
IF 2: Si "masFrecuente" es menor a "veces" (es decir, "veces" aparece más de una vez, es decir, un número se repite),
    a masFrecuente se le asigna la cantidad de veces que un elemento aparece como máximo, y a masRepetido, que al
    principio estaba undefined, se le asigna ese valor repetido en lista[i].
El "veces = 0" al final del bucle previene que masRepetido devuelva simplemente el último elemento del array. Al 
estar así, resetea la variable "veces"
*/