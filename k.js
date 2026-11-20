//Convert the string "123" to a number and add 7

let str = "123";
let num = Number(str);
console.log(num + 7);

//Check if the given variable is falsy and return "Invalid" if it is

if (!variable) {
    return "Invalid";
}

//Use for loop to print all numbers between 1 and 10, skipping even numbers using continue 

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

//Create an array of numbers and return only the even numbers using filter method

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);

//Use the spread operator to merge two arrays, then return the merged array.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

return mergedArray;


//Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).

function getDay(day) {
    switch (day) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

//Create an array of strings and return their lengths using map method 

let words = ["Apple", "Banana", "Orange", "Mango"];

let lengths = words.map(function(word) {
    return word.length;
});

console.log(lengths);

//Write a function that checks if a number is divisible by 3 and 5

function checkNumber(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

//Write a function using arrow syntax to return the square of a number

const square = (num) => num * num;

console.log(square(5));

//. Write a function that destructures an object to extract values and returns a formatted string.

function getInfo(person) {
    const { name, age } = person;

    return `My name is ${name} and I am ${age} years old.`;
}

console.log(getInfo({ name: "Ahmed", age: 20 }));



// Write a function that accepts multiple parameters (two or more) and returns their sum

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30));


//Write a function that returns a promise which resolves after 3 seconds with a 'Success' message

function getPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

getPromise().then((result) => {
    console.log(result);
});


//Write a function to find the largest number in an array

function findLargest(numbers) {
    return Math.max(...numbers);
}

console.log(findLargest([10, 25, 7, 90, 45]));



//Write a function that takes an object and returns an array containing only its keys.


function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys({ name: "Ahmed", age: 20, city: "Cairo" }));



//Write a function that splits a string into an array of words based on spaces

function splitWords(str) {
    return str.split(" ");
}

console.log(splitWords("I love JavaScript"));






//What is the difference between forEach and for...of? When would you use each?
//The main difference is that `forEach` executes a function for each element in an array, while `for...of` is used to loop through iterable objects.

`forEach` does not support `break` or `continue`, but `for...of` supports both.

We use `forEach` for simple operations on arrays, and `for...of` when we need more control over the loop.




