
// =====================================================
// EJERCICIO 1: CALCULADORA DE PROPINA  (ALGORITMO SECUENCIAL)
// Solo hay instrucciones que se ejecutan una tras otra, sin if/else.
// =====================================================
function calculadoraPropina() {
  // 1. ENTRADA: prompt() devuelve texto, Number() lo convierte a número
  let montoCuenta = Number(prompt("Ingresa el monto de la cuenta:"));
  let porcentajePropina = Number(prompt("Ingresa el porcentaje de propina (ejemplo: 10):"));
 
  // 2. PROCESO: aplicamos las fórmulas
  let propina = montoCuenta * porcentajePropina / 100;
  let total = montoCuenta + propina;
 
  // (Opcional) comprobar en la consola del navegador (F12)
  console.log("Propina:", propina, "Total:", total);
 
  // 3. SALIDA: toFixed(2) deja exactamente 2 decimales
  document.getElementById("resultado1").innerHTML =
    "Propina: " + propina.toFixed(2) + "<br>" +
    "Total a pagar: " + total.toFixed(2);
}
 
// =====================================================
// EJERCICIO 2: CLASIFICADOR DE IMC  (CONDICIONALES if / else if / else)
// =====================================================
function clasificadorIMC() {
  // 1. ENTRADA
  let peso = Number(prompt("Ingresa tu peso en kilogramos:"));
  let altura = Number(prompt("Ingresa tu altura en metros (ejemplo: 1.70):"));
 
  // Evitamos dividir entre cero o usar datos no válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    document.getElementById("resultado2").innerHTML =
      "Datos no válidos. Escribe números mayores que cero.";
    return; // termina la función aquí
  }
 
  // 2. PROCESO: IMC = peso / (altura al cuadrado)
  let imc = peso / (altura * altura);
  let categoria;
 
  // ---- AQUÍ ESTÁN LOS if / else if / else ----
  if (imc < 18.5) {
    categoria = "Bajo peso";
  } else if (imc < 25) {      // de 18.5 hasta menos de 25 (24.9)
    categoria = "Normal";
  } else if (imc < 30) {      // de 25 hasta menos de 30 (29.9)
    categoria = "Sobrepeso";
  } else {                    // 30 o más
    categoria = "Obesidad";
  }
 
  // 3. SALIDA
  document.getElementById("resultado2").innerHTML =
    "IMC: " + imc.toFixed(2) + "<br>" +
    "Categoría: " + categoria;
}
 
// =====================================================
// EJERCICIO 3: MENÚ CON SWITCH
// =====================================================
function menuSwitch() {
  // Mostramos el menú y guardamos la opción elegida
  let opcion = prompt(
    "Elige una opción:\n" +
    "1. Celsius a Fahrenheit\n" +
    "2. Precio con IVA\n" +
    "3. Nota (0-100) a letra"
  );
 
  let resultado = document.getElementById("resultado3");
 
  // ---- AQUÍ ESTÁ EL switch ----
  switch (opcion) {
 
    case "1": // Celsius -> Fahrenheit
      let celsius = Number(prompt("Ingresa la temperatura en grados Celsius:"));
      let fahrenheit = celsius * 9 / 5 + 32;
      resultado.innerHTML = celsius + " °C = " + fahrenheit.toFixed(2) + " °F";
      break; // break evita que se ejecuten los otros casos
 
    case "2": // Precio con IVA
      let precio = Number(prompt("Ingresa el precio del producto:"));
      let iva = Number(prompt("Ingresa el porcentaje de IVA (ejemplo: 19):"));
      let precioFinal = precio + (precio * iva / 100);
      resultado.innerHTML = "Precio final con IVA: " + precioFinal.toFixed(2);
      break;
 
    case "3": // Nota -> Letra
      let nota = Number(prompt("Ingresa una nota entre 0 y 100:"));
      let letra;
 
      // if / else dentro del case 3
      if (isNaN(nota) || nota < 0 || nota > 100) {
        resultado.innerHTML = "Nota no válida. Debe estar entre 0 y 100.";
        break; // salimos del switch
      } else if (nota >= 90) {
        letra = "A";
      } else if (nota >= 80) {
        letra = "B";
      } else if (nota >= 70) {
        letra = "C";
      } else if (nota >= 60) {
        letra = "D";
      } else {
        letra = "F";
      }
 
      resultado.innerHTML = "Nota: " + nota + " → Letra: " + letra;
      break;
 
    default: // Si no escribió 1, 2 o 3 (o canceló)
      resultado.innerHTML = "Opción no válida. Debes elegir 1, 2 o 3.";
  }
}
 
// =====================================================
// EXTRA: BOTÓN "LIMPIAR"
// Borra el resultado de un ejercicio y vuelve a poner el texto inicial.
// =====================================================
function limpiarResultado(idDelDiv) {
  document.getElementById(idDelDiv).innerHTML = "Aún no hay resultado.";
}