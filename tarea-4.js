//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $numeros = document.querySelectorAll("ol li");
const listaNumeros = convertirNumerosArray($numeros);

console.log(`El promedio de ${listaNumeros} es de: ${calcularPromedio(listaNumeros)}`);
//console.log(encontrarNumeroMasChico(listaNumeros));
console.log(encontrarNumeroMasGrande(listaNumeros));
console.log(encontrarNumeroMasFrecuente(listaNumeros));

function encontrarNumeroMasFrecuente(numeros) {
  let numeroMasRepetido = 0;
  let mayorCantidadEncontrada = 0;
  for (let i = 0; i < numeros.length; i++) {
    let contador = 0;
    let mayorCantidadEncontradaActual = 0;
    for (let j = 0; j < numeros.length; j++) {
      if (numeros[i] === numeros[j]) {
        contador++;
      }
      mayorCantidadEncontradaActual = contador
    }
    if (mayorCantidadEncontrada < mayorCantidadEncontradaActual) {
      numeroMasRepetido = numeros[i];
    }
    if (mayorCantidadEncontrada === mayorCantidadEncontradaActual) {
      numeroMasRepetido = numeros[i];
    }
  }
  return numeroMasRepetido;
}


function encontrarNumeroMasGrande(numeros) {
  let numeroMasGrandeEncontrado = 0;
  for (let i = 0; i < numeros.length; i++) {
    let numeroMayorActual = numeros[i];
    if (numeros[i + 1] > numeroMayorActual) {
      numeroMasGrandeEncontrado = numeros[i + 1];
    }
  }
  return numeroMasGrandeEncontrado;
}



/* 
function encontrarNumeroMasChico(numeros) {
  let numeroMenorEncontrado = 0; //[2, 1, 50, 10, 30,]
  for (let i = 0; i < numeros.length; i++) {
    let numeroMenorActual = 0;
    let numero = numeros[i]; //1
    if (numeros[i + 1] > numeroMenorActual) { //50 > 1
      numeroMenorActual = numero; //1
    }
    if (numeroMenorActual < numeroMenorEncontrado) {
      numeroMenorEncontrado = numeroMenorActual;
    }
  }
  return numeroMenorEncontrado;
} */

function calcularPromedio(numeros) {
  let sumaNumeros = 0;
  const cantidadNumeros = numeros.length;
  for (let i = 0; i < cantidadNumeros; i++) {
    sumaNumeros += Number(numeros[i]);
  }
  return sumaNumeros / cantidadNumeros;
}



function convertirNumerosArray(numeros) {
  let nuevaLista = []
  for (let i = 0; i < numeros.length; i++) {
    nuevaLista.push(numeros[i].textContent)
  }
  return nuevaLista;
}









