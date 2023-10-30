// Paso 1: Definir dos arreglos de números enteros (del mismo tamaño)
const arreglo1 = [7, 2, 6, 4, 13];
const arreglo2 = [8, 9, 3, 1, 22];

// Paso 2: Crear un tercer arreglo con los valores menores de los dos primeros arreglos
const arregloCombinado = [];
for (let i = 0; i < arreglo1.length; i++) {
    arregloCombinado.push(Math.min(arreglo1[i], arreglo2[i]));
}

// Paso 3: Ordenar el tercer arreglo de manera descendente
arregloCombinado.sort(function(a, b) {
    return b - a;
});

// Paso 4: Mostrar los arreglos originales y el tercer arreglo en la consola
console.log("Arreglo 1: " + arreglo1);
console.log("Arreglo 2: " + arreglo2);
console.log("Arreglo Combinado Descendente: " + arregloCombinado);
