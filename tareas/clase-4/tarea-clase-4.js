// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

function tareaUno() {
  for (let i = 3; i < 22; i++) {
    if (i % 3 === 0 && i !== 3) {
      console.log(i);
    }
    if (i >= 21) {
      console.log("Acá termina la tarea 1.");
    }
  }
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

function tareaDos() {
  let numerosParaRegistrar = 10;

  while (numerosParaRegistrar >= 1) {
    console.log(numerosParaRegistrar);
    numerosParaRegistrar--;
  }

  if (numerosParaRegistrar <= 1) {
    console.log("Acá termina la tarea 2.");
  }
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function tareaFizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;
    const impresora =
      fizz && buzz ? "FizzBuzz" : fizz ? "Fizz" : buzz ? "Buzz" : i;

    console.log(impresora);
  }
}

function calcularPromedio(array) {
  let promedioArray;
  let sumaItems = 0;
  for (let i = 0; i < array.length; i++) {
    sumaItems += array[i];
  }

  promedioArray = sumaItems / array.length;
  return promedioArray;
}
