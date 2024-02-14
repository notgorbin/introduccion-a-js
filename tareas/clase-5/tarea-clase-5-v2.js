//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!

// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonEnviar = document.querySelector("#boton-enviar");

const primerNombre = document.querySelector("#primer-nombre");
const segundoNombre = document.querySelector("#segundo-nombre");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const infoCompleta = document.querySelector("#info-completa");
const tituloH1 = document.querySelector("h1");

$botonEnviar.onclick = function () {
  infoCompleta.value = `${primerNombre.value} ${segundoNombre.value} ${apellido.value}  ${edad.value} años`;
  tituloH1.innerText = `Bienvenido ${primerNombre.value} !`;

  return false;
};
