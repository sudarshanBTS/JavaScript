
function multiply() {
    
    var num1 = document.getElementById("numF").value;
    console.log(num1);
    var num2 = document.getElementById("numS").value;
    var res = num1 * num2
    document.getElementById("result").innerHTML = res;
    console.log(res);
}

function divide(num1,num2) {
    var num1 = document.getElementById("numF").value;
    var num2 = document.getElementById("numS").value;
    var res = num1 / num2;
    console.log(res);
    document.getElementById("result").innerHTML = res;
}
console.log(document.URL);