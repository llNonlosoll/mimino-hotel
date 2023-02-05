function multiply() {
  var num1, num2, result;
  num1 = document.getElementById('nights-quantity').value;

  num2 = 1000;

  result = num1 * num2;

  //out
  document.getElementById('outprice').innerHTML = result;
}
