/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#siguiente-paso").onclick = function (event) {
  const $cantIntegrantes = document.querySelector("#cantidad-integrantes");
  const cantIntegrantes = Number($cantIntegrantes.value);

  borrarIntegrantes();
  crearIntegrantes(cantIntegrantes);

  event.preventDefault();
};

document.querySelector("#calcular").onclick = function (event) {
  const $integrantes = document.querySelectorAll(".integrante input");
  const edades = [];

  juntarEdades($integrantes, edades);

  mostrarEdades("mayor", calcularMayor(edades));
  mostrarEdades("menor", calcularMenor(edades));
  mostrarEdades("promedio", calcularPromedio(edades));
  mostrarResultados();
  mostrarBotonTarea2();
};

document.querySelector("#boton-reinicio").onclick = resetear;

function mostrarBotonTarea2() {
  document.querySelector("#tarea-salarios").className = "";
}

function ocultarBotonTarea2() {
  document.querySelector("#tarea-salarios").className = "oculto";
}

function mostrarResultados() {
  document.querySelector("#analisis").className = "";
}

function ocultarResultados() {
  document.querySelector("#analisis").className = "oculto";
}

function mostrarEdades(tipo, resultado) {
  document.querySelector(`#${tipo}-edad`).textContent = resultado;
}

function juntarEdades(integrantes, array) {
  for (let i = 0; i < integrantes.length; i++) {
    const integrante = Number(integrantes[i].value);
    array.push(integrante);
  }
}

function crearIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
}

function borrarIntegrantes() {
  const $integrantes = document.querySelectorAll(".integrante");

  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement("div");
  $div.className = "integrante";

  const $label = document.createElement("label");
  $label.textContent = "Edad del integrante n° " + (indice + 1) + ": ";

  const $input = document.createElement("input");
  $input.type = "number";

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector("#integrantes");
  $integrantes.appendChild($div);
}

function mostrarBotonCalculo() {
  document.querySelector("#calcular").className = "";
}

function ocultarBotonCalculo() {
  document.querySelector("#calcular").className = "oculto";
}

function resetear() {
  borrarIntegrantes();
  ocultarBotonCalculo();
  ocultarResultados();
}

function calcularMayor(array) {
  let mayor = array[0];

  for (let i = 1; i < array.length; i++) {
    if (mayor < array[i]) {
      mayor = array[i];
    }
  }

  return mayor;
}

function calcularMenor(array) {
  let menor = array[0];

  for (let i = 1; i < array.length; i++) {
    if (menor > array[i]) {
      menor = array[i];
    }
  }

  return menor;
}

function calcularPromedio(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  const promedio = suma / array.length;

  return promedio;
}
