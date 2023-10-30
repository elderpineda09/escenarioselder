// Paso 1: Definir un arreglo de números enteros
const numeros = [1, 2, 3, 3, 4, 4, 5, 3, 6, 7, 8, 9, 3];

// Paso 2: Crear una función para encontrar la moda
function encontrarModa(arr) {
    const conteo = {}; // Un objeto para contar la frecuencia de cada número
    let moda = [];
    let maxFrecuencia = 0;

    // Llenar el objeto de conteo
    for (let num of arr) {
        conteo[num] = (conteo[num] || 0) + 1;
        if (conteo[num] > maxFrecuencia) {
            maxFrecuencia = conteo[num];
        }
    }

    // Encontrar la moda
    for (let num in conteo) {
        if (conteo[num] === maxFrecuencia) {
            moda.push(Number(num));
        }
    }

    return moda;
}

// Llama a la función para obtener la moda
const moda = encontrarModa(numeros);

// Paso 3: Mostrar el arreglo original y el valor de la moda en la consola
console.log("Arreglo de números: " + numeros);
console.log("Moda: " + moda);
