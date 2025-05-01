//persona: nombre, apellido, dni, mail, edad, estado
//alumno: legajo, curso [], asistencia
class Persona{
    //propiedades metodos
    //propiedades privadas
    #email
    #nombre
        constructor(nombreParam, apellido, dni, email, edad){
        //this.clave = valor
        this.#nombre = nombreParam
        this.apellido = apellido
        this.dni = dni
        this.#email = email
        this.edad = edad
        //propiedades por defecto
        this.estado = true
    }
    //propiedades computadas
    //get y set
    get getEmail(){
        return this.#email
    }

    set setEmail(nuevoEmail){
        this.#email = nuevoEmail
    }

    //metodos
    mostrarDatos(){
        document.writeln(`<ul>
            <li>Nombre: ${this.#nombre} </li>
            <li>Apellido: ${this.apellido} </li>
            <li>DNI: ${this.dni} </li>
            <li>Email: ${this.#email} </li>
            <li>Edad: ${this.edad} </li>
            </ul>`)
    }
}

// nombreObjeto.propiedad
//cuando utilizamos a la clase: crear un objeto o instanciar
const tobias = new Persona('Tobias','Conde', '23444555','tobias@mail.com',25)
const lourdes = new Persona('Lourdes','Ferraioli', '4544555','lourdes@mail.com',23)

console.log(tobias.getEmail)
console.log(lourdes)

tobias.mostrarDatos()
lourdes.mostrarDatos()

lourdes.setEmail = 'lourdes2@mail.com'
lourdes.mostrarDatos()