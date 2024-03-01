function encontrarMayor(numeros) {
  
  let mayor = numeros[0]; 

  for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
          mayor = numeros[i];
      }
  }

  return mayor;
}

// Ejemplo de uso:
const numeros = [10, 5, 20, 15, 8]; // Ejemplo de un array de números
const mayor = encontrarMayor(numeros);
console.log(`El mayor número en el array es: ${mayor}`);