const palindromes = function (string) {
    string = string.toLowerCase().replace(new RegExp('[!-]', 'gi'), '')
    let palindromo = string.split("").reverse().join('')
    if (string === palindromo){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
