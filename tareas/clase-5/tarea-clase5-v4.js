//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."

// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

// const puntoUno = document.querySelector("punto-1");
// const puntoDos = document.querySelector("punto-2");
// const puntoTres = document.querySelector("punto-3");
// const puntoCuatro = document.querySelector("punto-4");
// const puntoCinco = document.querySelector("punto-5");

const textoPromedio = document.querySelector("#texto-promedio");
const textoMasPequeño = document.querySelector("#texto-más-pequeño");
const textoMasGrande = document.querySelector("#texto-más-grande");
const textoMasRepite = document.querySelector("#texto-más-repite");
const puntosListas = document.querySelectorAll(".puntos-lista");
const arrayLista = [];

for (let i = 0; i < puntosListas.length; i++) {
  arrayLista.push(Number(puntosListas[i].innerText));
}

function promedioArray(array) {
  let promedio = 0;
  for (let i = 0; i < array.length; i++) {
    promedio += array[i];
  }
  return promedio;
}

textoPromedio.innerText += " " + promedioArray(arrayLista);

function masPequeño(array) {
  let pequeño = array[0];
  for (let i = 0; i < array.length; i++) {
    if (pequeño > array[i]) {
      pequeño = array[i];
    }
  }
  return pequeño;
}

textoMasPequeño.innerText += " " + masPequeño(arrayLista);

function masGrande(array) {
  let grande = array[0];
  for (let i = 0; i < array.length; i++) {
    if (grande < array[i]) {
      grande = array[i];
    }
  }
  return grande;
}

textoMasGrande.innerText += " " + masGrande(arrayLista);

// function masRepite(array) {}
