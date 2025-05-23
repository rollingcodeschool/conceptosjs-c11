//estructuras de repetición
// while - do-while - for

/*
mientras se cumple una condicion logica

while(condicion logica){   
    todas las lineas de codigo que quiero repetir
    agregar una linea que haga que la condicion logica se deje de cumplir
}
*/
let renglon = 1;

while( renglon<=50){
    document.writeln(`<p>Renglon numero ${renglon}</p>`)
    renglon++ //renglon = renglon + 1;
}


/*
hacer - mientras se cumple la condicion logica
do-while

do{
 todas las lineas de codigo que quiero repetir
 agregar una linea que haga que la condicion logica se deje de cumplir
}while(condicion logica)
*/
let linea = 1;

do{
    document.writeln(`<p>Linea numero: ${linea}</p>`)
    linea++;
}while(linea<=10)

/*
bucle For

for(let contador=0; condicion logica ; contador=contador+2 ){
    todas las lineas de codigo que quiero repetir
}
*/

//cuenta regresiva
for(let contador=10; contador > 0; contador-- ){
    document.writeln(`<p>Cuenta regresiva ${contador}</p>`)
}