/*
1.Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.
*/

function sum (a) {
    const filteredArr = a.filter(function (e) {
        return e > 20;
    });

    return filteredArr.reduce(function (total,num) {
        return total + num;
    });
}

//80
console.log(sum([10,15,20,50,30]));





/*
2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.
*/

let strArr = ['hello', 'banana', 'apple', 'wapisthebest', 'papa'];

const getNewArray = function (a) {
    return a.filter(function (e) {
        return e.length >= 5 && e.includes('a');
    });
}

//[ 'banana', 'apple', 'wapisthebest' ]
console.log(getNewArray(strArr));


/*
3. Implement an arrow function with feature below:

concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']
*/

const concat = (...more) => {
    return more.flatMap((e) => [...e]);
}

console.log(concat('hi', [1,2,3], ['Hello','world']));