//Esto es un comentario de una linea -  ES6 - 2015

/* Esto es un comentario 
de multiples
lineas */
console.log("Hola mundo");

document.writeln('<p class="parrafoResaltado" >Hola nuevamente</p>');
document.writeln("<a href='http://127.0.0.1:5500/index.html'>Live server</a>");

//ventana emergente
// alert("Esto es un mensaje en un alert")

//Como declarar una variable (let - const - var)

let anioActual;
//inicializar una variable
anioActual = 2025;

let precio = 20.5;

document.writeln("<br>El año actual es: ", anioActual);
document.writeln("<br>El año actual es: " + anioActual);

anioActual = 2024;

document.writeln(
  "<br>El contenido de la variable anioActual es: " + anioActual
);

const url = "http://127.0.0.1:5500/index.html";

document.writeln("<br>La direccion de live server es: " + url);

// esto es un error no puedo asignar un nuevo valor a una constante.
// url = "hola mundo";

document.writeln("<br>La direccion de live server es : " + url);

//ejemplo de suma de dos numeros
// todo: realizar este codigo con const
// const numero1, numero2, resultado;
const numero1 = parseInt(prompt('Ingrese un numero')),
  numero2 = parse(prompt('ingrese un segundo numero'));

  console.log(numero1)
  console.log(numero2)

// const resultado = numero1 + numero2;

document.writeln("<br>El resultado de la suma es: " + (numero1 + numero2));
