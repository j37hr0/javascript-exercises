const sumAll = function(num1, num2) {
    let temp;
    if (num1 > num2) {
        temp = num2;
        num2 = num1;
        num1 = num2;
    }
    else if (num1 < 0 || num2 < 0){
        return "ERROR"
    }
    else if (isNaN(num1) || isNaN(num2)){
        return "ERROR"
    }
    total = ((num2-num1+1)*(num1+num2)) / 2
    return total;
};

// Do not edit below this line
module.exports = sumAll;
