Math.roundTo = function (number, precision) {
    let myNum = number.toFixed(precision);// reduce to fixed point
    if(myNum % 1 === 0){ // check if whole number
        return Math.floor(myNum);
    } else {
        return parseFloat(myNum);
    }
}

console.log(Math.roundTo(3.1415926535, 4)); // 3.1416
console.log(Math.roundTo(4, 5)); // 4
console.log(Math.roundTo(4.1235343424, 6)); // 4.123534
console.log(Math.roundTo(5.3035802, 3)); // 5.304
console.log(Math.roundTo(0.9384930193848595, 15)); // 0.938493019384860
console.log(Math.roundTo(9.9999, 3)); // 10
