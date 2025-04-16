const frase = prompt("Ingresa una frase (máx 10 caracteres):").toLowerCase()
//hola mundo
let vocales = "";
console.log(frase.length)
if (frase.length < 10) {
  if (frase.charAt(0) === "a" || frase.charAt(0) === "e" || frase.charAt(0) === "i" || frase.charAt(0) === "o" || frase.charAt(0) === "u") {
    vocales += frase.charAt(0);
  }
  if (frase.charAt(1) === "a" || frase.charAt(1) === "e" || frase.charAt(1) === "i" || frase.charAt(1) === "o" || frase.charAt(1) === "u") {
    vocales += frase.charAt(1);
  }
  if (frase.charAt(2) === "a" || frase.charAt(2) === "e" || frase.charAt(2) === "i" || frase.charAt(2) === "o" || frase.charAt(2) === "u") {
    vocales += frase.charAt(2);
  }
  if (frase.charAt(3) === "a" || frase.charAt(3) === "e" || frase.charAt(3) === "i" || frase.charAt(3) === "o" || frase.charAt(3) === "u") {
    vocales += frase.charAt(3);
  }
  if (frase.charAt(4) === "a" || frase.charAt(4) === "e" || frase.charAt(4) === "i" || frase.charAt(4) === "o" || frase.charAt(4) === "u") {
    vocales += frase.charAt(4);
  }
}
document.writeln("Vocales encontradas: en la frase"+frase+ " - las vocales son: " + vocales);
