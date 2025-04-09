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
  numero2 = parseInt(prompt('ingrese un segundo numero'));

  console.log(numero1)
  console.log(numero2)

// const resultado = numero1 + numero2;

document.writeln("<br>El resultado de la suma es: " + (numero1 + numero2));

//Tipos de datos primitivos
//string
const nombreUsuario = 'Emilse Arias'
const producto = "Celular"
const tarea = `Realizar el tp 1`
//number
const edad = 30;
const precioNuevo = 35.6;
const negativo = -40.6;
//booleanos
const encendido = true
const lavado = false

//null: es un valor vacio
let vacio = null;

//undefined
let datoNuevo;
//tipos de referenciales

//objeto con notacion literal
const funko = {
  nombre: 'Ironman',
  precio: 30,
  codigo: 'SJ768'
}

//arrays
const productos = ['celular', 'table', 'notebook']

console.log(nombreUsuario)
console.log(producto)
console.log(tarea)
console.log(edad)
console.log(precioNuevo)
console.log(negativo)
console.log(encendido)
console.log(lavado)
console.log(vacio)
console.log(datoNuevo)
console.log(funko)
console.log(productos)


