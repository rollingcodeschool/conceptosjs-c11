//Sintaxis: funcion tradicinal, expresion de funcion, arrow functions

//funciones sin parametros
function saludar(){
    //todas las lineas de codigo que quiero hacer para saludar
    document.writeln('<p>Hola mundo 🌎</p>')
}

//funciones con parametros
function sumar(numero1,numero2){
    const resultado = numero1 + numero2
    document.writeln(`<p>Resultado de la suma: ${resultado}</p>`)
}

//funciones que retornan un valor

//invocar o llamar a una funcion
saludar();

const num1 = parseInt(prompt('ingresa un numero'))
const num2 = parseInt(prompt('ingresa un segundo'))

sumar(num1,num2);
sumar(num1, 10)