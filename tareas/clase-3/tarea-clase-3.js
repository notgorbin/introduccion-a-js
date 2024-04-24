// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const NOMBRE_MIO = "lucas";
const NOMBRE_HERMANA = "deborah";

const nombreUsuario = prompt("¿Cómo te llamás facha?").toLowerCase();

if (NOMBRE_MIO === nombreUsuario) {
  console.log("Hola, Tocayo! Yo también me llamo " + nombreUsuario);
} else if (NOMBRE_HERMANA === nombreUsuario) {
  console.log(`Hola ${nombreUsuario}, te llamás igual que mi hermana!`);
} else {
  console.log(`Hola ${nombreUsuario} !`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const EDAD_MIA = 23;

const edadUsuario = Number(prompt("¿Cuantos años tenés capo?"));

if (EDAD_MIA > edadUsuario) {
  console.log("Sos un pibe todavía, te falta cancha.");
} else if (EDAD_MIA === edadUsuario) {
  console.log("Tenemos la misma edad, pero te sigue faltando cancha pibe.");
} else if (EDAD_MIA < edadUsuario) {
  console.log("Fua amigo re viejo sos que onda.");
} else {
  console.log("Pone un numerito hermano, que te cuesta?");
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const EDAD_NECESARIA = 18;
const RESPUESTA_SI = "si";
const RESPUESTA_NO = "no";

function preguntarDocumento() {
  const tieneDocumento = prompt(
    "¿Trajiste el documento? (Si/No)"
  ).toLowerCase();

  if (RESPUESTA_SI === tieneDocumento) {
    preguntarEdad();
  } else if (RESPUESTA_NO === tieneDocumento) {
    console.log("¿Cómo vas a venir sin documento a un bar amigo? Tomatela.");
  } else {
    console.log("... No te entendí un joraca amigo");
    preguntarDocumento();
  }
}

function preguntarEdad() {
  const edadUsuario2 = Number(
    prompt("¿Cuantos años pasaron desde tu nacimiento hasta la actualidad?")
  );

  if (EDAD_NECESARIA <= edadUsuario2) {
    console.log("Bueno dale, pasa nomás ñeri...");
  } else if (EDAD_NECESARIA > edadUsuario2) {
    console.log(
      "¿Pero que me viste cara de niñera a mi? Volve pa las casa noma"
    );
  } else {
    console.log("EHH?? Habla bien hermano, no se te entiende nada");
    preguntarEdad();
  }
}

preguntarDocumento();
