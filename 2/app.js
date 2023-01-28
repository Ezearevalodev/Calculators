let num1 = parseInt(prompt("Ingresé un valor numerico"));
let num2 = parseInt(prompt("Ingresé un valor numerico"));
let simbolo = prompt("Ingresé el simbolo a usar (+ - * /)");
let resultado;

if (simbolo === "+") {
    resultado = num1 + num2;
    console.log("Sumando ando");
} else if (simbolo === "-") {
    resultado = num1 - num2;
    console.log("Restando ando");
} else if (simbolo === "*") {
    resultado = num1 * num2;
    console.log("Multiplicando ando");
} else if (simbolo === "/") {
    resultado = num1 / num2;
    console.log("Dividiendo ando");
} else {
    console.log("Error simbolo no existente");
}

console.log(resultado);