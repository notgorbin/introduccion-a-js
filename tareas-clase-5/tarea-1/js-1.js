//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

function calcularSalarioMensual(salarioAnual) {
  return salarioAnual / 12;
}

function cambiarColorInput(input) {
  if (input.style.backgroundColor === "") {
    input.style.backgroundColor = "rgb(220, 252, 231)";
  } else {
    input.style.backgroundColor = "";
  }
}

const $salarioAnual = document.querySelector("#salario-anual");
const $salarioMensual = document.querySelector("#salario-mensual");

document.querySelector("#boton-calcular").onclick = function () {
  const salarioAnual = Number($salarioAnual.value);

  $salarioMensual.value = calcularSalarioMensual(salarioAnual);
  cambiarColorInput($salarioMensual);

  return false;
};

document.querySelector("#boton-limpiar").onclick = function () {
  cambiarColorInput($salarioMensual);
};
