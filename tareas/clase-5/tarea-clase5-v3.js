//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $horas = document.querySelector("#horas");
const $minutos = document.querySelector("#minutos");
const $segundos = document.querySelector("#segundos");
const $botonEnviar = document.querySelector("#boton-enviar");
const $cantidadTiempo = document.querySelector("#cantidad-tiempo");
const $cantidadVideos = document.querySelector("#cantidad-videos");
const arrayHoras = [];
const arrayMinutos = [];
const arraySegundos = [];

function sumaArray(array) {
  let totalSumaArray = 0;

  for (let i = 0; i < array.length; i++) {
    totalSumaArray += array[i];
  }

  return totalSumaArray;
}

$botonEnviar.onclick = function () {
  arrayHoras.push(Number($horas.value));
  arrayMinutos.push(Number($minutos.value));
  arraySegundos.push(Number($segundos.value));

  let totalHoras = sumaArray(arrayHoras);
  let totalMinutos = sumaArray(arrayMinutos);
  let totalSegundos = sumaArray(arraySegundos);

  while (totalSegundos >= 60) {
    totalSegundos -= 60;
    totalMinutos++;
  }
  while (totalMinutos >= 60) {
    totalMinutos -= 60;
    totalHoras++;
  }

  $cantidadVideos.textContent = arrayHoras.length;
  $cantidadTiempo.textContent = `${totalHoras} hs ${totalMinutos} min ${totalSegundos} seg`;

  return false;
};
