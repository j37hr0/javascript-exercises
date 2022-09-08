const findTheOldest = function(r) {
const oldest = r.sort(function(a, b){
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    if (lastGuy > nextGuy) {
        return -1;
    }
    else if (nextGuy > lastGuy) {
        return 1;
    }
})
return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
