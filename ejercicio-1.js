class Auto {
    constructor(marca, modelo, año) {
        this.marca = marca
        this.modelo = modelo
        this.año = año
    }

    mostrarInfo() {
        console.log(`Este auto es ${this.marca} , ${this.modelo} del ${this.año}`)
    }


    determinarAntiguo() {
        if (this.año < 2000) {
            console.log(`El ${this.marca} de modelo ${this.modelo} es antiguo`)
        }
    }

    verificarLujo() {
        const marcasLujo = ["Mercedes", "BMW", "Audi"]
        if (this.marca === marcasLujo) {
            console.log(`El auto ${this.marca} es de lujo`)
        } else {
            console.log("no es de lujo F")
        }
    }
}


const miAuto = new Auto("porsche", "GTR", 1999)

miAuto.mostrarInfo()
miAuto.determinarAntiguo()
miAuto.verificarLujo()
