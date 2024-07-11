import { Numero } from "./Numero.js";
import { INumero } from "./INumero.js";

let INum = new INumero(),
    n1 = INum.leerNumero(),
    n2 = INum.leerNumero(),
    n3 = INum.leerNumero(),
    n4 = INum.leerNumero(),
    Num = new Numero(n1,n2,n3,n4)


salida = document.getElementById("salida")
salida.innerHTML = INum.reporte(Num.concatenarNumeros(),Num.sumarNumeros())