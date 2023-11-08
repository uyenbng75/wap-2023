/*
Exercise 3: Write a function printNumbers(from, to) that outputs a number every second, 
starting from from and ending with to.
*/

function printNumbers(from, to) {
    let current = from;

    function countNum() {
        console.log(current);
        if (current < 10) {
            current++;
            setTimeout(countNum, 1000);
        }
    }
    if (from <= to) {
        countNum();
    }
}

printNumbers(1,10);