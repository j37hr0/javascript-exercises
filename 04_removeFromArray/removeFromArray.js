const removeFromArray = function(array, num) {
    for (item of array){
        if (item === num){
            newArray = array.splice(item)
        }
    }
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
