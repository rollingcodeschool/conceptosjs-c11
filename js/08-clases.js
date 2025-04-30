//persona: nombre, apellido, dni, mail, edad, estado
//alumno: legajo, curso [], asistencia
class Persona{
    //propiedades metodos
    constructor(nombreParam, apellido, dni, email, edad){
        //this.clave = valor
        this.nombre = nombreParam
        this.apellido = apellido
        this.dni = dni
        this.email = email
        this.edad = edad
        //propiedades por defecto
        this.estado = true
    }

    //get y set

    //metodos
}

// nombreObjeto.propiedad
//cuando utilizamos a la clase: crear un objeto o instanciar
const tobias = new Persona('Tobias','Conde', '23444555','tobias@mail.com',25)
const lourdes = new Persona('Lourdes','Ferraioli', '4544555','lourdes@mail.com',23)

console.log(tobias)
console.log(lourdes)