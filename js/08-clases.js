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
        if(nuevoEmail.length >4){
            this.#email = nuevoEmail
        }
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


class Alumno extends Persona{
    #curso;
    #legajo;
    #asistencia
    constructor(nombreParam, apellido, dni, email, edad, legajo, curso){
       super(nombreParam,apellido, dni, email, edad)
       this.#curso = curso;
       this.#legajo = legajo;
       this.#asistencia = 0;
    }
    //get y set
    get getCurso(){
        return this.#curso
    }

    set setCurso(nuevoCurso){
        //aqui agregar las validaciones que sean necesarias
        if(nuevoCurso.length >0){
            this.#curso = nuevoCurso
        }
    }
    get getLegajo(){
        return this.#legajo
    }

    set setLegajo(nuevoLegajo){
        //aqui agregar las validaciones que sean necesarias
            this.#legajo = nuevoLegajo
    }
    get getAsistencia(){
        return this.#asistencia
    }

    set setAsistencia(nuevoAsistencia){
        //aqui agregar las validaciones que sean necesarias
        if(nuevoAsistencia >0){
            this.#asistencia = nuevoAsistencia
        }
    }
    //metodos
    //ejemplo de polimorfismo
    mostrarDatos(){
        document.writeln(`<ol>
            <li>DNI: ${this.dni} </li>
            <li>Email: ${this.getEmail} </li>
            <li>Edad: ${this.edad} </li>
            <li>Asistencia: ${this.getAsistencia}</li>
            <li>Curso: ${this.getCurso}</li>
            </ol>`)
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

const luchiano = new Alumno('Luchiano', 'Guiot', '345665444', 'luchiano@mail.com',24, 1000, 'FullStack')
console.log(luchiano)

luchiano.mostrarDatos()
luchiano.mostrarDatosAlumno()