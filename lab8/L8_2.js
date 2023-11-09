/*
 * 2. Create a Student Constructor function:

Properties: firstName:String, lastName:String, grades:Array

methods:

inputNewGrade(newGrade): push newGrade to grades

computeAverage(): return average of the grades

After you finish, create some students using the constructor function.

Then draw prototypal inheritance diagram.
 */

function Student (firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades || [];    
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverage = function () {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
    }
    return sum / this.grades.length;
}

const s1 = new Student('John', 'Smith', [95, 88, 76]);
const s2 = new Student('Joe', 'Joseph', [92, 90, 89]);

console.log(s1.firstName + ' ' + s1.lastName + ': ' + s1.computeAverage());
console.log(s2.firstName + ' ' + s2.lastName + ': ' + s2.computeAverage());