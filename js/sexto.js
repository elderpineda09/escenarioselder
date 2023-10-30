// Paso 1: Definir una matriz cuadrada (arreglo de dos dimensiones)
const matrizCuadrada = [
    [10, 9, 8],
    [7, 6, 5],
    [4, 3, 2]
];

// Paso 2: Crear un arreglo para almacenar los valores de la diagonal principal
const diagonalPrincipal = [];

// Iterar sobre la matriz para obtener los valores de la diagonal principal
for (let i = 0; i < matrizCuadrada.length; i++) {
    diagonalPrincipal.push(matrizCuadrada[i][i]);
}

// Paso 3: Mostrar la matriz original y los valores de la diagonal principal en la consola
console.log("Matriz Cuadrada:");
for (let fila of matrizCuadrada) {
    console.log(fila.join("\t")); // Usar join para formatear la salida de cada fila
}

console.log("Valores de la Diagonal Principal: " + diagonalPrincipal);
