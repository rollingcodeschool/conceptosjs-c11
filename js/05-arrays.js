//Declar un array vacio

const paises = []
//array con datos
const comidas = ['🍔',2,true,'pizza',2]

//mostrar el array
console.log(paises)
console.log(comidas)

//mostrar array en el html
document.writeln(paises+'<br>')
document.writeln(comidas)
document.writeln('<br>Cantidad de elementos en el array: '+ comidas.length)

document.writeln(`<ul>`)
for(let i=0; i < comidas.length; i++){
    document.writeln(`<li>${ comidas[i] }</li>`)
}
document.writeln(`</ul>`)

