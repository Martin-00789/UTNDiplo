function determinarMedioTransporte(distancia) {
  let medioTransporte;

  if (distancia >= 0 && distancia <= 1000) {
      medioTransporte = "pie";
  } else if (distancia > 1000 && distancia <= 10000) {
      medioTransporte = "bicicleta";
  } else if (distancia > 10000 && distancia <= 30000) {
      medioTransporte = "colectivo";
  } else if (distancia > 30000 && distancia <= 100000) {
      medioTransporte = "auto";
  } else {
      medioTransporte = "avion";
  }

  return medioTransporte;
}

// Ejemplo de uso:
const distancia = 25000; // Ejemplo de distancia en metros
const medioDeTransporte = determinarMedioTransporte(distancia);
console.log(`Para una distancia de ${distancia} metros, el medio de transporte apropiado es: ${medioDeTransporte}`);