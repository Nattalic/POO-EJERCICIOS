class CuentaBancaria {
    constructor(titular,saldo) {
        this.titular = titular
        this.saldo = saldo
    }


    mostrarSaldo() {
        return `Mi saldo es: ${this.saldo}` //siempre hay que retornar algo ya que por defecto saldra undefind
    }


    depositarDinero(dinero) {
        if(dinero > 0) {
            this.saldo += dinero  //+= para guardar el nuevo saldo despues de sumarlo con dinero
            console.log(`Usted ha depositado ${dinero}`)
            console.log(this.mostrarSaldo())
        }else {
            console.log("dinero depositado incorrectamente")
        }
    }


    retirarDinero(dineroARetirar) {
        if (dineroARetirar < this.saldo) {
             this.saldo -= dineroARetirar //toma el saldo anterior y le resta el dinero que quiere retirar
            console.log(this.mostrarSaldo())
            return dineroARetirar
        } else {
            console.log("saldos insuficientes")
            return this.saldo
        }

    }
}

const miCuenta = new CuentaBancaria("Juan Pablo" , 1000) //instancia

console.log(miCuenta.mostrarSaldo())
miCuenta.depositarDinero(1000)
miCuenta.retirarDinero(1000)