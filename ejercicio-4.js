class Animal {
    constructor (nombre) {
        this.nombre = nombre
    }


    hacerSonido() {
        console.log(`Soy ${this.nombre} y hago un sonido`)
    }

}

class Gato extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} dice: miauuuu`)
    }
}

class Perro extends Animal {
     hacerSonido () {
        console.log(`${this.nombre} dice: guau guau`)
    }
}


const miPerro = new Perro ("polo")
miPerro.hacerSonido()


const miGato = new Gato ("Kronos")
miGato.hacerSonido()


