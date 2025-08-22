class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho
        this.alto = alto
    }

    calcularArea() {
        return this.ancho * this.alto
    }

    calcularPerimetro() {
        return this.ancho + this.alto
    }

    verificarCuadrado() {
        if (this.ancho === this.alto) {
            return "Es un cuadrado" 

        } else {
            return "No es un cuadrado"
        }

    }
}

const miRectangulo = new Rectangulo(40, 40)

console.log(miRectangulo.calcularArea())
console.log(miRectangulo.calcularPerimetro())
console.log(miRectangulo.verificarCuadrado())