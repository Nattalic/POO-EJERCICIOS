class Persona {
    constructor (nombre,edad,profesion) {
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }

    mostrarInfo() {
        return `Hola! mi nombre es ${this.nombre} tengo ${this.edad} y soy ${this.profesion}`
    }

    verificarEdad () {
        if (this.edad >= 18) {
        return `${this.nombre} es mayor de edad`

        } else {
            return `${this.nombre} no es mayor de edad`
        }
    } 

}

const nuevaPersona = new Persona ("Juan Pablo" , "18", "Diseñador e Ingeniero")

console.log(nuevaPersona.mostrarInfo())
console.log(nuevaPersona.verificarEdad())