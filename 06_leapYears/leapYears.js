const leapYears = function(date) {
let leapYear;
if (date % 100 === 0 && date % 400 === 0) {
    leapYear = true;
}
else if (date % 100 === 0){
    leapYear = false;
}
else if (date % 4 === 0){
    leapYear = true;
}
else {
    leapYear = false;
}
return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
