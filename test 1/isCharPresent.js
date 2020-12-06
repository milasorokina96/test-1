module.exports = isCharPresent;

function isCharPresent(str, sym) {    
    for(let i = 0; i < str.length; i++){
        if (str[i] === sym) {
            return true;
        }
    }
    return false;
}
