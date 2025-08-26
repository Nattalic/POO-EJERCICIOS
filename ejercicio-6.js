class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }

    verificarTipo() {
        //equilater: todos son iguales
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3 ) { 
            return "Es equilatero"
        //isoceles: un lado diferente, dos iguales
        //esta comparando dos iguales y cuando cumple eso es isoceles, el restante es diferente
        } else if (this.lado1 === this.lado2 || this.lado2 === this.lado3 || this.lado1 === this.lado3) { 
            return "Es isoceles"
        } else {
            return "Es escaleno" //todos sus lados son diferentes
        }

    }

    calcularPerimetro() {
        return this.lado1 + this.lado2 + this.lado3
    }
}

const miTriangulo1 = new Triangulo(10, 10, 10)
const miTriangulo2 = new Triangulo(10, 10, 20)
const miTriangulo3 = new Triangulo(10, 20, 30)

console.log(miTriangulo1.verificarTipo())
console.log(miTriangulo1.calcularPerimetro())

console.log(miTriangulo2.verificarTipo())
console.log(miTriangulo2.calcularPerimetro())

console.log(miTriangulo3.verificarTipo())
console.log(miTriangulo3.calcularPerimetro())