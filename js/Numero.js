export class Numero {
    constructor(numero1, numero2, numero3, numero4) {
        this.numero1 = numero1
        this.numero2 = numero2
        this.numero3 = numero3
        this.numero4 = numero4
    }

    get numero1() {
        return this._numero1
    }

    set numero1(n) {
        this._numero1 = +n
    }

    get numero2() {
        return this._numero2
    }

    set numero2(n) {
        this._numero2 = +n
    }

    get numero3() {
        return this._numero3
    }

    set numero3(n) {
        this._numero3 = +n
    }

    get numero4() {
        return this._numero4
    }

    set numero4(n) {
        this._numero4 = +n
    }

    sumarNumeros() {
        return this.numero1 + this.numero2 + this.numero3 + this.numero4

    }

    concatenarNumeros(){
        return  `${this.numero1}${this.numero2}${this.numero3}${this.numero4}`
    }

}