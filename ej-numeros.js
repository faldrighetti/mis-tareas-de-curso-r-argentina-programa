//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const lista = [];

const allNumbers = document.querySelectorAll("li");

for (let i = 0; i < allNumbers.length; i++){
    lista.push(allNumbers[i].innerText)
}

// Agrego los elementos a la lista mediante el .push, pero eso lo hago dentro del for. Recorre los li y agrega sus
// elementos a lista

console.log(lista)

function calcularPromedioArray (suma){
    suma / (lista.length)
}

let suma = 0

for (let i = 0; i < lista.length; i++){
    suma = suma + Number(lista[i])
}

console.log(suma)

const textoPromedio = "El promedio es " + suma / (lista.length)
document.querySelector("#promedio").value = textoPromedio

const mayor = Math.max.apply(null, lista)
console.log(mayor)  

const menor = Math.min.apply(null, lista)
console.log(menor)


let masFrecuente = 1
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

/*
Hay un for doble. El array se recorre dos veces. En el segundo recorrido, aparece la variable j que depende de i.
IF 1: Cuando el bucle encuentre un elemento en J que ya había encontrado en I, le suma 1 a la variable "veces".
IF 2: Si "masFrecuente" es menor a "veces" (es decir, "veces" aparece más de una vez, es decir, un número se repite),
    a masFrecuente se le asigna la cantidad de veces que un elemento aparece como máximo, y a masRepetido, que al
    principio estaba undefined, se le asigna ese valor repetido en lista[i].
El "veces = 0" al final del bucle previene que masRepetido devuelva simplemente el último elemento del array. Al 
estar así, resetea la variable "veces"
*/

const textoMayor = "El mayor es " + mayor
document.querySelector("#mayor").value = textoMayor;

const textoMenor = "El menor es " + menor
document.querySelector("#menor").value = textoMenor

const textoFrecuente = "El más frecuente es " + masRepetido
document.querySelector("#frecuente").value = textoFrecuente
