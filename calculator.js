let displayValue = '';
let ans = '0';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function popFromDisplay() {
  // Remove the last character from the display value.
  displayValue = displayValue.substring(0, displayValue.length - 1);

  // Set the display value to the updated string.
  document.getElementById('display').value = displayValue;
}


function calculateResult() {
    try {
      // Replace the `eval()` function with the `Math` object.
      displayValue = displayValue.replace('^', '**');
      displayValue = displayValue.replace('ln', 'Math.log');
      displayValue = displayValue.replace('√', 'Math.sqrt');
  
      // Evaluate the display value using the `eval()` function.
      displayValue = eval(displayValue);
      document.getElementById('display').value = displayValue;
      ans = displayValue;
    } catch (error) {
      displayValue = 'Error';
      document.getElementById('display').value = displayValue;
    }
  }
  

function previousValue() {
    displayValue += ans.toString();
    document.getElementById('display').value = displayValue;
}
