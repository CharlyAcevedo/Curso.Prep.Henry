// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var sumaarreglo = [];
  for (var i = 0; i < array.length; i++) {
    sumaarreglo[i] = array[i] + 1;
  }
    return sumaarreglo;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var ultimo = array.length
  array[ultimo] = elemento
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ')
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var cuentatotal = array.length
  var devolver = true
    for ( contador = 0; contador < cuentatotal; contador++) {
      if (elemento === array[contador]) { 
        devolver = true
        return devolver
      }
      
    }
    devolver = false
    return devolver
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumados = 0
  for (var x = 0; x < numeros.length; x++) {
    sumados = sumados + numeros[x]
  }
  return sumados
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumados = 0
  var promedio = 0
  for (var x = 0; x < resultadosTest.length; x++) {
    sumados = sumados + resultadosTest[x]
  }
  promedio = sumados / resultadosTest.length
  return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masgrande = 0
  for (var x = 0; x < numeros.length; x++) {
    if (numeros[x] !== masgrande && numeros[x] > masgrande) {
      masgrande = numeros[x]
    }
  }
  return masgrande
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if ( arguments.length < 1) {return 0}
  var multiplicados = 1
  for (var x = 0; x < arguments.length; x++) {
    multiplicados = multiplicados * arguments[x]
  }
  return multiplicados
}



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cuentame = 0
  for (var x = 0; x < arreglo.length; x++) {
    if (arreglo[x] > 18) {
      cuentame = cuentame + 1
    }
  }  
  return cuentame
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
    if (numeroDeDia === 1 || numeroDeDia === 7) { return 'Es fin de semana' }
  return 'Es dia Laboral'
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var atexto = n.toString()
  if (atexto[0] === '9') { return true }
  return false  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var comparador = arreglo[0]
  for ( var x = 0; x < arreglo.length - 1; x++ ) {
    if ( comparador !== arreglo[x+1] ) {
      return false
    }
  }
  return true  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesesencontrados = [];
  for (var x = 0; x < array.length; x++) {
    if (array[x] === "Enero" || array[x] === "Marzo" || array[x] === "Noviembre") {
      mesesencontrados.push(array[x])
    }
  }
  if (mesesencontrados.length === 3) {
   return mesesencontrados
  }
  else return 'No se encontraron los meses pedidos'
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var sobrecien =[]
  for (var x = 0; x < array.length; x++) {
    if (array[x] > 100) {
      sobrecien.push(array[x])
    }
  }
  return sobrecien
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var contador = 0
  var guardasuma = []
  var sumaactual = numero
  while (contador < 10) {
    sumaactual = sumaactual + 2
    contador = contador + 1
    if (sumaactual === contador) break;
    else {
      guardasuma.push(sumaactual)
    }
  }
  if (contador < 10) {
    return 'Se interrumpió la ejecución'
  }
  else return guardasuma
    
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var contador = 0
  var guardasuma = []
  var sumaactual = numero
  while (contador < 10) {
    contador = contador + 1
    if (contador === 5) continue;
    else {
      sumaactual = sumaactual + 2
      guardasuma.push(sumaactual)
    }
  }
  return guardasuma
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
