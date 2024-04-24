//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function cronometrar(numDisminuye, numAumenta) {
  if (numDisminuye >= 60) {
    const resto = numDisminuye % 60;
    const cociente = Math.trunc(numDisminuye / 60);

    numDisminuye = resto;
    numAumenta += cociente;
  }
  return [numDisminuye, numAumenta];
}

const $subTitulo = document.querySelector("#video-num");
const $horas = document.querySelector("#horas");
const $minutos = document.querySelector("#minutos");
const $segundos = document.querySelector("#segundos");
const $botonAgregar = document.querySelector("#boton-agregar");
const $tiempoTotal = document.querySelector("#tiempo-total");
const $botonCalcular = document.querySelector("#boton-calcular");
const $contenedorListaVideos = document.querySelector(
  "#contenedor-lista-videos"
);
const $listaVideos = document.querySelector("#lista-videos");
const $contenedorTotal = document.querySelector("#contenedor-total");

let contadorHoras = 0;
let contadorMinutos = 0;
let contadorSegundos = 0;
let contadorVideos = 1;

$botonAgregar.onclick = function () {
  let subTitulo = $subTitulo.textContent;
  let horas = Number($horas.value);
  let minutos = Number($minutos.value);
  let segundos = Number($segundos.value);

  if (horas === 0 && minutos === 0 && segundos === 0) {
    alert("No escribiste ningún dato");
    return false;
  }

  let item;
  let tiempo;

  [segundos, minutos] = cronometrar(segundos, minutos);
  [minutos, horas] = cronometrar(minutos, horas);

  contadorHoras += horas;
  contadorMinutos += minutos;
  contadorSegundos += segundos;
  contadorVideos++;

  item = document.createElement("li");
  tiempo = `${subTitulo} --- ${horas} hs ${minutos} min ${segundos} seg`;

  item.textContent = tiempo;
  $listaVideos.appendChild(item);

  $subTitulo.textContent = `Video ${contadorVideos}`;
  $horas.value = "";
  $minutos.value = "";
  $segundos.value = "";

  if ($contenedorTotal.className === "oculto" && contadorVideos > 2) {
    $contenedorTotal.className = "";
    return false;
  }
  $tiempoTotal.textContent = "";
  $botonCalcular.className = "";

  return false;
};

$botonCalcular.onclick = function () {
  [contadorSegundos, contadorMinutos] = cronometrar(
    contadorSegundos,
    contadorMinutos
  );
  [contadorMinutos, contadorHoras] = cronometrar(
    contadorMinutos,
    contadorHoras
  );

  $tiempoTotal.textContent = `El tiempo total de todos los videos es de: ${contadorHoras} horas, ${contadorMinutos} minutos y ${contadorSegundos} segundos`;

  $botonCalcular.className = "oculto";
};
