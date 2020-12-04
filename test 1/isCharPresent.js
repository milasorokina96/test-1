module.exports = isCharPresent;

function isCharPresent(str, sym) {    
    let arrOfStr = str.split('');
    for(let i = 0; i < arrOfStr.length; i++){
        if (arrOfStr[i] === sym) {
            return true;
        } else {
            return false;
        }
    }
}