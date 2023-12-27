//Global variables
let firstNumber = '';
let currentInput = '0'; //avoid parsing issues
let operator = '';
let resultValue = 0;

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const reset = document.querySelector('.reset');
const result = document.querySelector('.result');

//Function to handle number clicks
//the function ensures that the currentInput is always a number
function handleNumberClick(number){

    //add . to the number
    const hasDecimal = currentInput.toString().includes('.');

    if(!hasDecimal || operator !== ''){
        currentInput = parseFloat(currentInput.toString() + number);
        console.log(typeof(currentInput));
    } else {
        const decimalPart = parseFloat(number.toString().replace(/^0+/, ''));
        currentInput += decimalPart;
        currentInput = parseFloat(currentInput);
        console.log(typeof(currentInput));
    }
    updateDisplay();
}

//Event listeners for numbers
//forEach is used for readability
numbers.forEach((numbers) => {
    numbers.addEventListener('click', () => {
        handleNumberClick(numbers.textContent);
    });
});

//Event listener for the decimal button
decimal.addEventListener('click', function() {
    if(!currentInput.toString().includes('.')){
        currentInput += '.';
        updateDisplay();
    }
});

//Event listeners for operations
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        handleOperationClick(operation.textContent);
        console.log('operation clicked');
    });
});

// Function to handle operation clicks
function handleOperationClick(clickedOperator) {
    if (operator !== '') {
        performOperation();
    }
    operator = clickedOperator;
    firstNumber = currentInput;
    currentInput = '0';
    updateDisplay();
}

// Function to perform operations
function performOperation() {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            currentInput = num1 + num2;
            break;
        case '-':
            currentInput = num1 - num2;
            break;
        case 'x':
            currentInput = num1 * num2;
            break;
        case '/':
            currentInput = num1 / num2;
            break;
        default:
            break;
    }

    operator = '';
}

// Event listener for the equal button
equal.addEventListener('click', function () {
    if (operator !== '') {
        performOperation();
        operator = '';
    }
    updateDisplay();
});

//Function to handle reset button click
reset.addEventListener('click', function() {
    firstNumber = '';
    currentInput = '0';
    operator = '';
    result.textContent = currentInput;
    updateDisplay();
});

//Function to update display
function updateDisplay() {
    result.textContent = currentInput;
}

