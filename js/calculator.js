//keyboard calculator
function keyboard(params) {
  const input_one = document.querySelector(".number_one");
  const input_tow = document.querySelector(".number_two");

  
    switch (params) {
      case "0":
        input_one.value += 0;
        break;
      case "1":
        input_one.value += 1;
        break;
      case "2":
        input_one.value += 2;
        break;
      case "3":
        input_one.value += 3;
        break;
      case "4":
        input_one.value += 4;
        break;
      case "5":
        input_one.value += 5;
        break;
      case "6":
        input_one.value += 6;
        break;
      case "7":
        input_one.value += 7;
        break;
      case "8":
        input_one.value += 8;
        break;
      case "9":
        input_one.value += 9;
        break;

      case "+":
        operator("+");
        break;
      case "-":
        operator("-");

        break;
      case "*":
        operator("*");

        break;
      case "/":
        operator("/");

        break;
      case ",":
        break;
      case "=":
        result();
        break;

      default:
        break;
    }
}

//Change de operator.
function operator(params) {
  const operator = document.querySelector(".lab_operator");

  switch (params) {
    case "+":
      operator.innerHTML = "+";
      break;

    case "-":
      operator.innerHTML = "-";
      break;

    case "*":
      operator.innerHTML = "*";
      break;

    case "/":
      operator.innerHTML = "/";
      break;

    default:
      operator.innerHTML = ":x";
      break;
  }
}

function result() {
  const operator = document.querySelector(".lab_operator");
  var params = operator.innerText;

  switch (params) {
    case "+":
      sum();
      break;
    case "-":
      subtraction();
      break;
    case "*":
      multiplication();
      break;
    case "/":
      division();

      break;

    default:
      alert(":@");
      operator.innerHTML = ":x";

      break;
  }
}

function sum() {
  const number_one = document.querySelector(".number_one");
  const number_two = document.querySelector(".number_two");
  const result = document.querySelector(".lab_result");

  var n1 = parseFloat(number_one.value);
  var n2 = parseFloat(number_two.value);

  result.innerHTML = n1 + n2;
}

function subtraction() {
  const number_one = document.querySelector(".number_one");
  const number_two = document.querySelector(".number_two");
  const result = document.querySelector(".lab_result");

  var n1 = parseFloat(number_one.value);
  var n2 = parseFloat(number_two.value);

  result.innerHTML = n1 - n2;
}

function division() {
  const number_one = document.querySelector(".number_one");
  const number_two = document.querySelector(".number_two");
  const result = document.querySelector(".lab_result");

  var n1 = parseFloat(number_one.value);
  var n2 = parseFloat(number_two.value);

  result.innerHTML = n1 / n2;
}

function multiplication() {
  const number_one = document.querySelector(".number_one");
  const number_two = document.querySelector(".number_two");
  const result = document.querySelector(".lab_result");

  var n1 = parseFloat(number_one.value);
  var n2 = parseFloat(number_two.value);

  result.innerHTML = n1 * n2;
}
