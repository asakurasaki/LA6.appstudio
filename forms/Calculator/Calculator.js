btnAdd.onclick = function(){
  name = inptName.value
  let numberOne = parseInt(inptFirstNum.value)
  let numberTwo = parseInt(inptSecondNum.value)
  let sum = numberOne + numberTwo
  lblCalc.value = name + ", the answer is " + sum
}

btnMultiply.onclick = function(){
  name = inptName.value
  let numberOne = parseInt(inptFirstNum.value)
  let numberTwo = parseInt(inptSecondNum.value)
  let multiply = (numberOne * numberTwo)
  lblCalc.value = name + ", the answer is " + multiply
}

btnClear.onclick = function(){
  let numberOne = ""
  let numberTwo = ""
  lblCalc.value = ""
}
