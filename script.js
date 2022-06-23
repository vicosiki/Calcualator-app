 

function calculate(a, b, operation) {
    if (operation == "+") {
        add(a, b);
    } else if (operation == "-") {
        subtract(a, b);
    } else if (operation == "/") {
        divide(a, b);
    } else if (operation == "*") {
        multiply(a, b);
    } else {
        alert("You entered an invalid operation.");
    }
}


function add(a, b) {
    alert( (a) + " + " + (b) + " = " + (a + b));
}
function subtract(a, b) {
    alert( (a) + " - " + (b) + " = " + (a - b));
}
function divide(a, b) {
    alert( (a) + " / " + (b) + " = " + (a / b));
}
function multiply(a, b) {
    alert( (a) + " * " + (b) + " = " + (a * b));
}



alert("Calculator For simple operations between 2 numbers");



let a, operation , b

a = parseFloat(prompt("Please enter the first number: "));

if (!isNaN(a))  {

    operation = prompt("Please enter the operation ( +,  -,  /,  *) you would like to perform on the second number");
    let b = parseFloat(prompt("Please enter the second number: "));

    
if (!isNaN(b))  {

    calculate(a, b, operation);

} else {

    alert("Please enter a valid second number");
   
}

} else  {

    alert("Please enter a valid first number");
   
}
   




