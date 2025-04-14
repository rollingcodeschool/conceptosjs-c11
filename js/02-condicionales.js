//Estructura de decision

/*
condicional simple
if(condicion logica){
    todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}

condicional doble
if(condicion logica){
    todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}else{
    todas las lineas de codigo que quiero ejecutar si no se cumple la condicion
}

if(condicion logica){
    todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}else if(condicion logica 2){
    todas las líneas de código que quiero ejecutar si no se cumple la condición
}
*/

// let edad = parseInt(prompt("Ingresa tu edad"));

// if (edad >= 18) {
//   document.writeln("Sos mayor de edad");
// } else {
//   document.writeln("No sos mayor de edad");
// }

// Cree un programa que solicite al usuario su edad e indique si puede votar o no.

// desde 18 años hasta 75 años es obligatorio ✅
// si la persona tiene 16 o 17 años es opcional, desde 76 años en adelante tambien es opcional✅
// menores de 16 no pueden votar

const edad = parseInt(prompt("Ingrese su edad:"));
console.log(edad);
// && AND, || OR, ! Not
//NaN
//isNaN('hola') = true
//isNaN(5) = false
console.log(isNaN(edad));

//si no es un numero la edad del usuario
// la edad del usuario es numero?
if (!isNaN(edad)) {
  if (edad >= 18 && edad <= 75) {
    document.writeln("Estas obligado a votar");
  } else if (edad === 16 || edad === 17 || edad >= 76) {
    document.writeln("Es opcional que votes");
  } else {
    document.writeln("No pueden votar");
  }
} else {
  document.writeln("Ingresaste un valor invalido");
}
