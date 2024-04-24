//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $subTitulo = document.querySelector("#sub-titulo");
const $items = document.querySelector("#cant-items");
const $listaNumeros = document.querySelector("#ol-padre");
const $listaDeLI = document.querySelectorAll("#ol-padre li");
// Botones
const $botonIngresar = document.querySelector("#boton-ingresar");
const $botonPromedio = document.querySelector("#calcular-promedio");
const $botonMenor = document.querySelector("#calcular-mas-chico");
const $botonMayor = document.querySelector("#calcular-mas-grande");
const $botonRepetido = document.querySelector("#calcular-mas-repetido");
const $botonReiniciar = document.querySelector("#reiniciar");
// Textos
const $textoPromedio = document.querySelector("#promedio-li");
const $textoMenor = document.querySelector("#li-menor");
const $textoMayor = document.querySelector("#li-mayor");
const $textoRepetido = document.querySelector("#li-repetido");

const cantidadLI = $listaDeLI.length;
const arrayDeLI = [];

$botonIngresar.onclick = function () {
  if ($items.value === "") {
    alert("No ingresaste nada");
    return false;
  }

  const items = Number($items.value);

  for (let i = 0; i < items; i++) {
    let itemHijo = document.createElement("li");
    $listaNumeros.appendChild(itemHijo);
    itemHijo.id = "item-" + i;
    let numRandom = Math.floor(Math.random() * 10);
    itemHijo.textContent = numRandom;
    arrayDeLI.push(numRandom);
  }

  $subTitulo.textContent = `Se crearon ${items} items con números random del 1 al 10`;

  $botonIngresar.className = "oculto";
  $botonPromedio.className = "";
  $botonMenor.className = "";
  $botonMayor.className = "";
  $botonRepetido.className = "";

  return false;
};

$botonPromedio.onclick = function () {
  let suma = 0;
  for (let i = 0; i < arrayDeLI.length; i++) {
    suma += arrayDeLI[i];
  }

  let promedio = Math.floor(suma / arrayDeLI.length);

  $textoPromedio.textContent += promedio;
  $textoPromedio.className = "";
  $botonPromedio.className = "oculto";
};

$botonMenor.onclick = function () {
  let menor = arrayDeLI[0];
  for (let i = 1; i < arrayDeLI.length; i++) {
    if (arrayDeLI[i] < menor) {
      menor = arrayDeLI[i];
    }
  }

  $textoMenor.textContent += menor;
  $textoMenor.className = "";
  $botonMenor.className = "oculto";

  return false;
};

$botonMayor.onclick = function () {
  let mayor = arrayDeLI[0];
  for (let i = 1; i < arrayDeLI.length; i++) {
    if (arrayDeLI[i] > mayor) {
      mayor = arrayDeLI[i];
    }
  }

  $textoMayor.textContent += mayor;
  $textoMayor.className = "";
  $botonMayor.className = "oculto";

  return false;
};

$botonRepetido.onclick = function () {
  const arrayDeRepetidos = [];
  let seRepite;

  for (let i = 0; i < arrayDeLI.length; i++) {
    let itemComparado = arrayDeLI[i];
    seRepite = -1;

    for (let x = 0; x < arrayDeLI.length; x++) {
      if (itemComparado === arrayDeLI[x]) {
        seRepite++;
      }
    }

    arrayDeRepetidos.push(seRepite);
  }

  let mayor = arrayDeRepetidos[0];
  let contador = 0;
  for (let z = 0; z < arrayDeRepetidos.length; z++) {
    if (mayor < arrayDeRepetidos[z]) {
      mayor = arrayDeRepetidos[z];
    }

    if (arrayDeRepetidos[z] === 0) {
      contador++;
    }
  }

  let indexMayor = arrayDeRepetidos.indexOf(mayor);

  if (contador === arrayDeRepetidos.length) {
    $textoRepetido.textContent = "Ninguno se repite";
    $textoRepetido.className = "";
    $botonRepetido.className = "oculto";
  } else {
    $textoRepetido.textContent += arrayDeLI[indexMayor];
    $textoRepetido.className = "";
    $botonRepetido.className = "oculto";
  }
};
