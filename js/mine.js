let num1= document.getElementById("firstNumber");
let num2= document.getElementById("secondNumber");
let result= document.getElementById("result");
function calculate(param){
    let firstNumber= Number(num1.value);
    let secondNumber= Number(num2.value);
    if(param=='plus'){
        result.innerHTML= `Result : ${firstNumber+ secondNumber}`;
    }else if(param=='sub'){
        result.innerHTML= `Result : ${firstNumber - secondNumber}`;
    }else if(param=='div'){
        result.innerHTML= `Result : ${firstNumber / secondNumber}`;
    }else if(param=='multi'){
        result.innerHTML= `Result : ${firstNumber * secondNumber}`;
    }else if(param=='mode'){
        result.innerHTML= `Result : ${firstNumber % secondNumber}`;
    }
   
}