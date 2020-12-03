module.exports = getResult;

function getResult(a, b, sign) {    
    let result;
    switch(sign) {
        case '+':
            result = a + b;
            break;
        case '-': 
            result = a - b;
            break;
        case '*': 
            result = a * b;
            break;
        case '/': 
            result = a / b;
            break;
        case '%': 
            result = a % b;
            break;
        case '**': 
            result = a ** b;
            break;
        default:
            result = false;
    }
    return result;
}