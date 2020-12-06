module.exports = charIndexOf;

function charIndexOf(str, sym) {    
    for(let i = 0; i < str.length; i++){
        if (str[i] === sym) {
            return i;
        }
    }
    return -1;
}
