/*
opcion = 'sabado'
switch(opcion){
    case 'lunes':
        todas las lineas de codigo que quiero hacer si la opcion es lunes
        break;
    case 'martes':
        todas las lineas de codigo que quiero hacer si la opcion es martes
        break;
    case 'sabado':
        todas las lineas de codigo que quiero hacer si la opcion es sabado
        break;
    default:
         todas las lineas de codigo que quiero hacer si no ingreso a ninguna de las opciones anterior
}
*/

//Ejercicio cajero automatico
//pedir al usuario que ingrese una opcion: 1- consultar el saldo, 2- depositar dinero, 3- extraer dinero, 4- salir.

const opcion =  parseInt(prompt('Seleccione una opción: 1- consultar el saldo, 2- depositar dinero, 3- extraer dinero, 4- salir.'))
let saldo = 10000

switch(opcion){
    case 1:
        document.writeln('El saldo es $'+ saldo);
        break;
    case 2:
        // mostrar mensaje para que agregue la cantidad de dinero a depositar
        const deposito = Number(prompt('Ingresa el monto a depositar'))
        console.log(deposito)
        // actualizar el saldo y mostrarlo
        saldo = saldo + deposito; // saldo += deposito;
        // document.writeln('Depositaste $' + deposito + ', tu saldo actual es $'+saldo);
        document.writeln(`Depositaste $${deposito}, tu saldo actual es $${saldo}`);
        break;
    case 3:
        //mostrar un mensaje que diga cuanto quiero extraer
        const extraccion = Number(prompt('Ingresa el monto a extraer'))
        //preguntar si el monto a extraer no supera el saldo
        if( extraccion <= saldo){
            //hago la extraccion y mostrar un cartel al usuario
            saldo = saldo - extraccion // saldo -=extraccion
            document.writeln(`Monto a extraer -$${extraccion}, tu saldo actual es $${saldo}`)
        }else{
            document.writeln(`Saldo insuficiente`)
        }
        break;
    case 4:
        document.writeln('Cerrando el sistema...')
        break;
    default:
        document.writeln('❌ Ingresaste una opción invalida')
}