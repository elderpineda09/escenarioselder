// El arreglo de números enteros
const numeros = [13, 22, 19, 89, 27, 20, 40];

// Se inicializan las variables para el número mayor y menor
let numeroMayor = numeros[0];
let numeroMenor = numeros[0];

// la variable para la suma de los valores
let suma = 0;

//Se recorre el arreglo para encontrar el número mayor, el número menor y calcular la suma
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
    }
    
    if (numeros[i] < numeroMenor) {
        numeroMenor = numeros[i];
    }
    
    suma += numeros[i];
}

// aqui se calcula el promedio
const promedio = suma / numeros.length;

//  Se muestran los resultados en la consola
console.log("Arreglo de números: " + numeros);
console.log("Número Mayor: " + numeroMayor);
console.log("Número Menor: " + numeroMenor);
console.log("Promedio: " + promedio);
