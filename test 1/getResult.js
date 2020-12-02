module.exports = getResult;

function getNumberFromUser(){
    let number;
    do {
      number = parseInt(prompt("Enter a number.."));
    } while(isNaN(number));
    return number;
  }
  
function getSignFromUser(){
    let sign;
    do {
      sign = prompt("Enter a sign..");
    } while (! (sign === "+" || sign === "-" || sign === "/" || sign === "*" || sign === "%" || sign === "^"));
    return sign;
}

function getResult(a, b, sign) {
    let sum;
    let dif;
    let prod;
    let quot;
    let mod;
    let pow;
    if (sign === "+") {
        return sum = a + b;
    } else if (sign === "-") {
        return dif = a - b;
    } else if (sign === "*") {
        return prod = a * b;
    } else if (sign === "/") {
        return quot = a / b;
    } else if (sign === "%") {
        return mod = a % b;
    } else if (sign === "**") {
        return pow = a ** b;
    } else {
        return false;
    }
}
let a = getNumberFromUser();
let sign = getSignFromUser();
let b = getNumberFromUser();
getResult(a, b, sign);
