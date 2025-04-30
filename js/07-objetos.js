//notacion literal - esto uso cuando voy a crear un objeto
const usuario = {
    //propiedades o atributos -> clave: valor
    //nombreUsuario, nombre, Apellido, email, dni, id, github, telefono, fotoPerfil, estado
    nombreUsuario: 'ignacio01',
    nombre: 'Ignacio',
    apellido: 'Barrojo',
    email: 'ignacionbarrojo@mail.com',
    dni: '42333444',
    id: 23,
    estado: true,
    //metodos
    nombreCompleto: function (){
        document.writeln('Hola soy...')
    },
    cambiarEstado: ()=>{
        document.writeln('Aqui tengo que cambiar el estado')
    }
}
// mostrar un objeto
console.log(usuario)
document.writeln(usuario+'<br>')

//mostrar propiedades de un objeto
document.writeln(usuario.nombreUsuario)
document.writeln(`<p>El dni del usuario es: ${usuario.dni}</p>`)
document.writeln(`<p>El dni del usuario es: ${usuario.dnis}</p>`)
document.writeln(`<p>El email del usuario es: ${ usuario['email'] }</p>`)
document.writeln(`<p>El email del usuario es: ${ usuario['emails'] }</p>`)

//modificar una propiedad de un objeto
usuario.nombreUsuario = 'ignacio02'
document.writeln(`<p>El usuario es: ${usuario.nombreUsuario}</p>`)

//agregar una propiedad al objeto
usuario.github = 'http://127.0.0.1:5500/index.html'
document.writeln(`<p>El link de github del usuario es: ${usuario.github}</p>`)

// usuario.nombreCompleto()
// usuario.cambiarEstado()
//clases