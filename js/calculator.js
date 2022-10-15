function sum(params) {
  var number_one = document.querySelector(".number_one");
  var number_two = document.querySelector(".number_two");
  var result = document.querySelector(".lab_result");

  var n1 = parseFloat(number_one.value);
  var n2 = parseFloat(number_two.value);
  var r = n1 + n2;

  alert(`A soma ta certa ${r} só falta atualizar o DOM`);
  
  result.innerHTML = `${r}`;
}
