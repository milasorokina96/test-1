module.exports = charIndexOf;

function charIndexOf(str, sym) {    
    let arrOfStr = str.split('');
    for(let i = 0; i < arrOfStr.length; i++){
        if (arrOfStr[i] === sym) {
            return i;
        } else {
            return -1;
        }
    }
}
