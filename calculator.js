let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = displayValue;
    }
}
function calculateLog() {
    try {
        const inputValue = parseFloat(displayValue);
        if (!isNaN(inputValue) && inputValue > 0) {
            displayValue = 'log(' + inputValue + ')';
            document.getElementById('display').value = displayValue;
            displayValue = Math.log(inputValue);
        } else {
            displayValue = 'Error: Invalid Input';
            document.getElementById('display').value = displayValue;
        }
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = displayValue;
    }
}

function calculateSquareRoot() {
    try {
        const inputValue = parseFloat(displayValue);
        if (!isNaN(inputValue) && inputValue >= 0) {
            displayValue = '√(' + inputValue + ')';
            document.getElementById('display').value = displayValue;
            displayValue = Math.sqrt(inputValue);
        } else {
            displayValue = 'Error: Invalid Input';
            document.getElementById('display').value = displayValue;
        }
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = displayValue;
    }
}