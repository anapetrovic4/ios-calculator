//Global variables
let firstNumber = '';
let currentInput = '0'; //Avoid parsing issues
let operator = '';
let resultValue = 0;

//Selectors 
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const reset = document.querySelector('.reset');
const result = document.querySelector('.result');

//Event listener for numbers
numbers.forEach((numbers) => {
    numbers.addEventListener('click', () => {
        handleNumberClick(numbers.textContent);
    });
});

//Event listener for the decimal button
decimal.addEventListener('click', function() {
    handleDecimalClick();
});

//Event listener for operations
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        handleOperationClick(operation.textContent);
    });
});

//Event listener for the equal button
equal.addEventListener('click', function () {
    handleEqualClick();
});

//Event listener to handle reset button click
reset.addEventListener('click', function() {
    handleResetClick();
});

//Function to handle number clicks
//The function ensures that the currentInput is always a number
function handleNumberClick(number){

    //Add . to the number
    const hasDecimal = currentInput.toString().includes('.');

    if(!hasDecimal || operator !== ''){
        currentInput = parseFloat(currentInput.toString() + number);
    } else {
        const decimalPart = parseFloat(number.toString().replace(/^0+/, ''));
        currentInput += decimalPart;
        currentInput = parseFloat(currentInput);
    }
    updateDisplay();
}

//Function to handle operation clicks
function handleOperationClick(clickedOperator) {
    if (operator !== '') {
        performOperation();
    }
    operator = clickedOperator;
    firstNumber = currentInput;
    currentInput = '0';
    updateDisplay();
}

//Function to handle decimal clicks
function handleDecimalClick(){
    if(!currentInput.toString().includes('.')){
        currentInput += '.';
        updateDisplay();
    }
}

//Function to handle equal clicks
function handleEqualClick(){
    if (operator !== '') {
        performOperation();
        operator = '';
    }
    updateDisplay();
}

function handleResetClick(){
    firstNumber = '';
    currentInput = '0';
    operator = '';
    updateDisplay();
}

//Function to perform operations
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
}

//Function to update display
function updateDisplay() {
    result.textContent = currentInput;
}

