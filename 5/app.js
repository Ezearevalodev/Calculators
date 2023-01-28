let num1, num2, simbolo;

function calculadora(num1, num2) {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  simbolo = document.getElementById("simbolo").value;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  switch (simbolo) {
    case "+":
        document.write(`La suma es de: ${num1 + num2}`);
      break;

    case "-":
        document.write(`La resta es de: ${num1 - num2}`);
      break;

    case "*":
        document.write(`La multiplicación es de: ${num1 * num2}`);
      break;

    case "/":
        document.write(`La división es de: ${num1 / num2}`);
      break;
    default:
        document.write(`Error en el calculo`);
      break;
  }
}
