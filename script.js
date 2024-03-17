document.addEventListener('DOMContentLoaded', function () {
    let displayResult = false; // Variable to track if result is being displayed

    // Function to calculate the expression
    function calculate(expression) {
        //Splits a string into array of substrings, the parameter is the seperator
        //Note that the seperator will also be in the array if the regex is wrapped in ()
        //Example: /( [+\-/*] )/ will be 12+44+-667/99 = [12,+,44,+,0,-,667,/,99] 
    const tokens = expression.split(/([+\-/*])/);
        //Same as String To Float 
    let result = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = parseFloat(tokens[i + 1]);


        //How case statements are used in JS
        // Switch param will be the variable/value we are checking
        // Break means the execution of the switch should stop
        // defaullt value is what will be given if no cases match/execute/break
        switch (operator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                result /= operand;
                break;
            default:
                throw new Error('Invalid operator: ' + operator);
        }
    }
    return result;
    }

    // Map keyboard keys to values of buttons
    const keyMap = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        '.': '.',
        'Enter': '=',
        '=': '=',
        'Escape': 'AC'
    };

    // Get all buttons from the DOM
    const buttons = document.querySelectorAll('.button');

    // Add event listener to each button
    buttons.forEach(button => {
    
        button.addEventListener('click', () => {
        // What happens when button is clicked
            //Get the value of the buttons like 2   
            const value = button.textContent;
            
            //Get the display element
            const display = document.getElementById('display');

            // Check if a result is currently being displayed and the clicked button is an operator
            if (displayResult && ['*', '/', '+', '-'].includes(value)) {
                // If an operator is clicked after the result, append it to the current result
                display.value += value;
                displayResult = false;
                return; // Exit the function to avoid further execution
            }

            // Check if a result is currently being displayed
            if (displayResult) {
                // If the result is being displayed, clear the display and reset the display
                display.value = '';
                displayResult = false;
            }

            // Eqaul, All Clear and other buttons click events
            if (value === '=') {
                // Get the current expression/display value
                const expression = document.getElementById('display').value;
                //Try will execute the code in the try block
                //If an error is encountered, JS will jump directly to the catch block
                    //and execute the code in the catch block
                try {
                    const result = calculate(expression);
                    display.value = result;
                    displayResult = true; // Set state indicate result is being displayed
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (value === 'AC') {
                // Clear display when All Clear button is clicked
                display.value = '';
            } else {
                // Append clicked button value to display
                display.value += value;
            }
        });
    });

    //Add the keypress listeners
    document.addEventListener('keydown', event => {
        //Get the key
        const key = event.key;
        // Get the value from the keyMap that matches the key variable
        const buttonValue = keyMap[key];

        if (buttonValue){
             //Get the button element that matches the key
             const button = document.querySelector(`.button[data-value="${buttonValue}"]`)
                     //If the button exists then execute the click event
            if (button) {
                button.click();
            }
        }
    });
});
