// Paso 1: Definir dos arreglos de números enteros
const arreglo1 = [9, 8, 7, 6, 5];
const arreglo2 = [4, 3, 2, 1, 10];

// Paso 2: Combinar los valores de los dos arreglos en un tercer arreglo
const arregloCombinado = arreglo1.concat(arreglo2);

// Paso 3: Ordenar el tercer arreglo de manera ascendente
arregloCombinado.sort(function(a, b) {
    return a - b;
});

// Paso 4: Mostrar el tercer arreglo ordenado en la consola
console.log("Arreglo 1: " + arreglo1);
console.log("Arreglo 2: " + arreglo2);
console.log("Arreglo Combinado Ordenado: " + arregloCombinado);
