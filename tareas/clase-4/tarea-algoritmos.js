// Desafio #1
function desafio1() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
// Desafio #2
function desafio2() {
  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
// Desafio #3
function desafio3() {
  let resultado;
  for (let i = 0; i <= 9; i++) {
    resultado = 7 * i;
    console.log(`7x${i} = ${resultado}`);
  }
}
// Desafio #4
function desafio4() {
  for (let i = 1; i <= 9; i++) {
    imprimirTablas(i);
  }
}

function imprimirTablas(numero) {
  let resultado;
  for (let i = 0; i <= 9; i++) {
    resultado = numero * i;
    console.log(`${numero}x${i} = ${resultado}`);
  }
}
// Desafio #5
const ARRAY_1_AL_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function desafio5(array) {
  let resultado = 0;
  for (let i = 0; i < array.length; i++) {
    resultado += array[i];
  }
  console.log(resultado);
}
// desafio5(ARRAY_1_AL_10); --> 55

// Desafio #6
function desafio6(array) {
  let resultado = 1;
  for (let i = 0; i < array.length; i++) {
    resultado *= array[i];
  }
  console.log(resultado);
}
// desafio6(ARRAY_1_AL_10); --> 3628800

// Desafio #7
function desafio7() {
  let resultado = 0;
  for (let i = 10; i < 30; i++) {
    if (i % 2 === 1) {
      resultado += i;
    }
  }
  console.log(resultado);
}
// desafio7(); --> 200

// Desafio #8
function desafio8(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(fahrenheit);
}
// desafio8(10); --> 50

// Desafio #9
function desafio9(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  console.log(celsius);
}
// desafio9(50); --> 10

// Desafio #10
function desafio10(array) {
  let resultado = 0;
  for (let i = 0; i < array.length; i++) {
    resultado += array[i];
  }
  console.log(resultado);
}
// desafio10([1,1,1,1,1,10]); --> 15

// Desafio #11
function desafio11(array) {
  let promedio;
  let resultado = 0;
  for (let i = 0; i < array.length; i++) {
    resultado += array[i];
  }
  promedio = resultado / array.length;
  console.log(promedio);
}
// desafio11([5,5,5,5,10]); --> 6

// Desafio #12
function desafio12(array) {
  const arrayPositivo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      arrayPositivo.push(array[i]);
    }
  }
  console.log(arrayPositivo);
}
// desafio12([-5, -20, 5, 0, 10]) --> [5, 0, 10]

// Desafio #13
function desafio13(array) {
  let mayor = array[0];
  for (let i = 0; i < array.length; i++) {
    if (mayor < array[i]) {
      mayor = array[i];
    }
  }
  console.log(mayor);
}
// desafio13([2,-3,12,8,23]) --> 23

// Desafio #14
function desafio14() {
  const fib = [];
  for (let i = 0; i < 11; i++) {
    if (fib.length >= 2) {
      fib.push(fib[i - 2] + fib[i - 1]);
    } else {
      fib.push(i);
    }
  }
  console.log(fib);
}
// desafio14() --> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//                  0  1  2  3  4  5  6   7   8   9  10

// Desafio #15
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

function fibonacci2(n) {
  if (n < 2) {
    return n === 1 ? 1 : 0;
  } else {
    return fibonacci2(n - 2) + fibonacci2(n - 1);
  }
}

// Desafio #16
function desafio16(num) {
  return num % 2 === 0 ? "True" : "False";
}

// Desafio #17
function desafio17(num) {
  const digitos = [];

  agregarDigito(num, digitos);
  const sumatoriaTotal = sumarDigitos(digitos);

  let sumaImpresa = digitos[0];
  for (let i = 1; i < digitos.length; i++) {
    sumaImpresa += " + " + digitos[i];
  }
  console.log(sumaImpresa);
  console.log(sumatoriaTotal);
}

function agregarDigito(num, array) {
  let digito;
  let num2;

  if (num >= 10) {
    digito = num % 10;
    num2 = Math.trunc(num / 10);
    array.unshift(digito);
    agregarDigito(num2, array);
  } else {
    digito = num;
    array.unshift(digito);
  }
  return array;
}

function sumarDigitos(array) {
  let sumatoria = 0;
  for (let i = 0; i < array.length; i++) {
    sumatoria += array[i];
  }
  return sumatoria;
}

// Versión 2
function desafio17v2(num) {
  if (num >= 0) {
    const numString = num.toString();
    let sumatoria = Number(numString[0]);
    let sumatoriaEnConsola = sumatoria;

    for (let i = 1; i < numString.length; i++) {
      sumatoria += Number(numString[i]);
      sumatoriaEnConsola += " + " + Number(numString[i]);
    }

    console.log(sumatoriaEnConsola);
    console.log(sumatoria);
  }
}

// Desafio #18
function desafio18() {
  for (let i = 0; i < 100; i++) {
    if (desafio16(i) === "True") {
      console.log(i);
    }
  }
}

// Desafio #19
function desafio19(nPrimos, alComienzo) {
  const arrayPrimos = [];
  let contador = alComienzo;

  while (arrayPrimos.length < nPrimos) {
    contador++;

    if (desafio16(contador) === "True") {
      arrayPrimos.push(contador);
    }
  }
  return arrayPrimos;
}

// Desafio #20
function desafio20(array) {
  const newArray = [];
  const largoAr = array.length;

  for (let i = 1; i < largoAr; i++) {
    newArray.push(array[i]);
  }
  newArray.push(array[0]);

  return newArray;
}

// Desafio #21
function desafio21(array) {
  const newArray = [];
  const largoAr = array.length;

  for (let i = 0; i < largoAr - 1; i++) {
    newArray.push(array[i]);
  }
  newArray.unshift(array[largoAr - 1]);

  return newArray;
}

// Desafio #22
function desafio22(array) {
  const newArray = [];
  const largoAr = array.length;

  for (let i = 0; i < largoAr; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

// Desafio #23
function desafio23(string) {
  const largoStr = string.length;
  let newString = "";

  for (let i = largoStr; i > 0; i--) {
    newString += `${string[i - 1]}`;
  }
  return newString;
}

// Desafio #24
function desafio24(array1, array2) {
  const nuevoArray = [];
  const largoArr1y2 = array1.length + array2.length;

  for (let i = 0; i < largoArr1y2; i++) {
    nuevoArray.length < array1.length
      ? nuevoArray.push(array1[i])
      : nuevoArray.push(array2[i - array1.length]);
  }

  return nuevoArray;
}

// Desafio #25
function desafio25(array1, array2) {
  const diferenciaSimetrica = [];
  let seRepite;

  for (let i = 0; i < array1.length; i++) {
    seRepite = false;
    let itemsArr1 = array1[i];

    for (let x = 0; x < array2.length; x++) {
      let itemsArr2 = array2[x];

      if (itemsArr1 === itemsArr2) {
        seRepite = true;
      }
    }
    if (seRepite === false) {
      diferenciaSimetrica.push(itemsArr1);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    seRepite = false;
    let itemsArr2 = array2[i];

    for (let x = 0; x < array1.length; x++) {
      let itemsArr1 = array1[x];

      if (itemsArr2 === itemsArr1) {
        seRepite = true;
      }
    }
    if (seRepite === false) {
      diferenciaSimetrica.push(itemsArr2);
    }
  }

  return diferenciaSimetrica;
}

// Desafio #26
function desafio26(array1, array2) {
  const resultadoResta = [];
  let esIgual;

  for (let i = 0; i < array1.length; i++) {
    esIgual = false;
    let itemsArr1 = array1[i];

    for (let x = 0; x < array2.length; x++) {
      let itemsArr2 = array2[x];

      if (itemsArr1 === itemsArr2) {
        esIgual = true;
      }
    }

    if (esIgual === false) {
      resultadoResta.push(itemsArr1);
    }
  }

  return resultadoResta;
}

// Desafio #27
function desafio27(array) {
  const nuevoArray = [];
  let seRepite;

  for (let i = 0; i < array.length; i++) {
    let itemArr1 = array[i];
    seRepite = 0;

    for (let x = 0; x < array.length; x++) {
      let itemArr2 = array[x];
      if (itemArr1 === itemArr2) {
        seRepite++;
      }
    }

    if (seRepite < 2) {
      let repetido = false;

      for (let z = 0; z < nuevoArray.length; z++) {
        let itemArr3 = nuevoArray[z];
        if (itemArr1 === itemArr3) {
          repetido = true;
          break;
        }
      }

      if (!repetido) {
        nuevoArray.push(itemArr1);
      }
    }
  }

  return nuevoArray;
}
