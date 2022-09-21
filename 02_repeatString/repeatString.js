const repeatString = function(string, num) {
    let nome = '';
    if (num >= 0){
        for (let i = 1; i <= num; i++){
            nome += string
        }
    } else {
        return "ERROR"
    }
    return nome
};

// Do not edit below this line
module.exports = repeatString;
