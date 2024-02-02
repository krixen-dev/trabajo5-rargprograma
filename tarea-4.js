//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const tomarNumerosDeLaLista = function () {
  let $numeros = document.querySelectorAll("ol li");
  let nuevaLista = [];
  for (let i = 0; i < $numeros.length; i++) {
    nuevaLista.push(Number($numeros[i].textContent))
  }
  return nuevaLista;
}
const numeros = tomarNumerosDeLaLista();

const promedio = document.querySelector('#promedio');
const numeroMasChico = document.querySelector('#numero-menor');
const numeroMasGrande = document.querySelector('#numero-mayor');
const numeroMasFrecuente = document.querySelector('#numero-frecuente');

promedio.textContent = calcularPromedio(numeros);
numeroMasChico.textContent = encontrarNumeroMasChico(numeros);
numeroMasGrande.textContent = encontrarNumeroMasGrande(numeros);
numeroMasFrecuente.textContent = encontrarNumeroMasFrecuente(numeros);

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
      mayorCantidadEncontradaActual = contador;
    }
    if (mayorCantidadEncontrada <= mayorCantidadEncontradaActual) {
      numeroMasRepetido = numeros[i];
    }
  }
  return numeroMasRepetido;
}

function encontrarNumeroMasGrande(numeros) {
  let numeroMasGrandeEncontrado = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    let numeroMayorActual = numeros[i];
    if (numeroMayorActual > numeroMasGrandeEncontrado) {
      numeroMasGrandeEncontrado = numeroMayorActual;
    }
  }
  return numeroMasGrandeEncontrado;
}

function encontrarNumeroMasChico(numeros) {
  let numeroMasChicoEncontrado = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    let numeroMenorActual = numeros[i];
    if (numeroMenorActual < numeroMasChicoEncontrado) {
      numeroMasChicoEncontrado = numeroMenorActual;
    }
  }
  return numeroMasChicoEncontrado;
}

function calcularPromedio(numeros) {
  let sumaNumeros = 0;
  const cantidadNumeros = numeros.length;
  for (let i = 0; i < cantidadNumeros; i++) {
    sumaNumeros += Number(numeros[i]);
  }
  return sumaNumeros / cantidadNumeros;
}










