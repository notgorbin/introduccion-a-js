/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

- Botones agregar o quitar Inputs y Labels
- Botones Si y No --> ¿Tiene trabajo?
- Recolectar los salarios de cada integrante
- Calcular: anual mayor, menor, promedio y promedio del mensual
- Si hay inputs vacíos, ignorar en el cálculo  
*/

document.querySelector("#tarea-salarios").onclick = function (event) {
  ocultarTarea1();
  mostrarTarea2();
};

document.querySelector("#paso-siguiente").onclick = function (event) {
  const $cantidadFamiliares = document.querySelector("#cantidad-familiares");
  const cantidadFamiliares = Number($cantidadFamiliares.value);

  eliminarFamiliaresAnteriores();

  crearFamiliares(cantidadFamiliares);

  mostrarBotonCalcular();
  ocultarPasoSiguiente();

  event.preventDefault();
};

document.querySelector("#calcular-salarios").onclick = function (event) {
  const $salarios = document.querySelectorAll(".familiar input");
  const arraySalarios = [];

  for (let i = 0; i < $salarios.length; i++) {
    if ($salarios[i].className === "") {
      const salario = Number($salarios[i].value);
      arraySalarios.push(salario);
    }
    mostrarCalculos(calcularAnualMayor(arraySalarios), "salario-anual-mayor");
    mostrarCalculos(calcularAnualMenor(arraySalarios), "salario-anual-menor");
    mostrarCalculos(
      calcularAnualPromedio(arraySalarios),
      "salario-anual-promedio"
    );
    mostrarCalculos(
      calcularMensualPromedio(arraySalarios),
      "salario-mensual-promedio"
    );
  }

  ocultarBotonCalcular();
  mostrarSalarios();
};

document.querySelector("#reinicio").onclick = reiniciar;

function reiniciar() {
  eliminarFamiliaresAnteriores();
  ocultarBotonCalcular();
  ocultarSalarios();
  mostrarPasoSiguiente();
}

function mostrarSalarios() {
  const $resultados = document.querySelector("#salarios");
  $resultados.className = "";
}

function ocultarSalarios() {
  const $resultados = document.querySelector("#salarios");
  $resultados.className = "oculto";
}

function mostrarCalculos(calculo, tipo) {
  const $resultado = document.querySelector(`#${tipo}`);
  $resultado.textContent = calculo;
}

function ocultarBotonCalcular() {
  const $botonSalarios = document.querySelector("#calcular-salarios");

  $botonSalarios.className = "oculto";
}

function mostrarBotonCalcular() {
  const $botonSalarios = document.querySelector("#calcular-salarios");

  $botonSalarios.className = "";
}

function ocultarPasoSiguiente() {
  const $botonSiguiente = document.querySelector("#paso-siguiente");
  $botonSiguiente.className = "oculto";
}

function mostrarPasoSiguiente() {
  const $botonSiguiente = document.querySelector("#paso-siguiente");
  $botonSiguiente.className = "";
}

function ocultarTarea1() {
  const $tarea1 = document.querySelector("#calculador-edades");
  $tarea1.className = "oculto";
}

function mostrarTarea2() {
  const $tarea2 = document.querySelector("#calculador-salarios");
  $tarea2.className = "";
}

function crearFamiliares(cantidad) {
  for (let i = 0; i < cantidad; i++) {
    crearFamiliar(i);
  }
}

function eliminarFamiliaresAnteriores() {
  const $familiares = document.querySelectorAll(".familiar");

  for (let i = 0; i < $familiares.length; i++) {
    $familiares[i].remove();
  }
}

function crearFamiliar(indice) {
  const $div = document.createElement("div");
  $div.className = "familiar";

  const $label = document.createElement("label");
  $label.textContent = `Familiar n° ${indice + 1}: `;

  const $input = document.createElement("input");
  $input.placeholder = "Escribir el sueldo anual";
  $input.type = "number";
  $input.id = `input${indice + 1}`;
  $input.className = "oculto";

  const $pregunta = document.createElement("p");
  $pregunta.id = `pregunta-${indice + 1}`;
  $pregunta.textContent = "¿Trabaja?";

  const $botonSi = document.createElement("button");
  $botonSi.id = `boton-si-${indice + 1}`;
  $botonSi.type = "button";
  $botonSi.textContent = "Si";
  $botonSi.onclick = function () {
    mostrarInput(indice);
  };

  const $botonNo = document.createElement("button");
  $botonNo.id = `boton-no-${indice + 1}`;
  $botonNo.type = "button";
  $botonNo.textContent = "No";
  $botonNo.onclick = function () {
    ocultarBotones(indice);
  };

  $div.appendChild($label);
  $div.appendChild($input);
  $div.appendChild($pregunta);
  $div.appendChild($botonSi);
  $div.appendChild($botonNo);

  const $familiares = document.querySelector("#familiares");
  $familiares.appendChild($div);
}

function mostrarInput(indice) {
  const $input = document.querySelector(`#input${indice + 1}`);
  $input.className = "";

  ocultarBotones(indice);
}

function ocultarBotones(indice) {
  const $botonSi = document.querySelector(`#boton-si-${indice + 1}`);
  const $botonNo = document.querySelector(`#boton-no-${indice + 1}`);
  const $pregunta = document.querySelector(`#pregunta-${indice + 1}`);

  $botonSi.className = "oculto";
  $botonNo.className = "oculto";
  $pregunta.className = "oculto";
}

// Calculos
function calcularAnualMayor(array) {
  let mayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (mayor < array[i]) {
      mayor = array[i];
    }
  }
  return mayor;
}

function calcularAnualMenor(array) {
  let menor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (menor > array[i]) {
      menor = array[i];
    }
  }
  return menor;
}

function calcularAnualPromedio(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  const promedio = suma / array.length;

  return promedio;
}

function calcularMensualPromedio(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  const promedio = suma / array.length;
  const mensual = promedio / 12;

  return mensual;
}
