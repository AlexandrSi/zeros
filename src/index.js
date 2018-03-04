module.exports = function getZerosCount(number) {
    var n = 0;
    while(number >= 5){
        number = Math.floor(number / 5);
        n+= number;
    }
    return n;
};

