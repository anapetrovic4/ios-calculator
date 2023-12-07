//Global variables
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const reset = document.querySelector('.reset');
const result = document.querySelector('.result');

//This is used to loop through all numbers with class 'number' and add an event listener to each one
numbers.forEach(function (number) {
    number.addEventListener('click', function() {
        console.log('number clicked');
        result.textContent = number.textContent;
    }); 
});

operations.forEach(function (operation) {
    operation.addEventListener('click', function() {
        console.log('operation clicked');
    }); 
});

equal.addEventListener('click', function() {
    console.log('equal clicked');
});

decimal.addEventListener('click', function() {
    console.log('decimal clicked');
});

//Reset button
reset.addEventListener('click', function() {    
    console.log('reset clicked');
    result.textContent = 0;
});