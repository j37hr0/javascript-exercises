const palindromes = function (string) {
    let badChars = /[^A-Za-z0-9]/g;
    var r = string.toLowerCase().replace(badChars,"");
    var reversedString = r.split("").reverse().join("");
    if (reversedString === r){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
