function calculate(operator){
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let result =0;

  if(operator==="+") {
    result= a+b;
  }
  else if(operator==="-"){
    result = a-b;
  }
  else if(operator ==="*"){
    result = a*b;
  }
  else if (operator==="/"){
    result = a/b
  }
  document.getElementById("result").innerText = result;
}