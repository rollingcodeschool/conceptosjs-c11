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
