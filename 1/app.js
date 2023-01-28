let valor1 = parseInt(prompt("Ingresé un valor numerico"));
let valor2 = parseInt(prompt("Ingresé un valor numerico"));
let simbolo = parseInt(prompt("1)Suma 2)Resta 3)Multiplicación 4)División"));

switch (simbolo) {
  case 1:
    alert(valor1 + valor2);
    break;

  case 2:
    alert(valor1 - valor2);
    break;

  case 3:
    alert(valor1 * valor2);
    break;

  case 4:
    alert(valor1 / valor2);
    break;

  default:
    console.log('Error');
    break;
}
