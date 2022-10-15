function operator(oper) {

  const operator = document.querySelector(".lab_operator");

  console.log(oper);

  switch (oper) {
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
