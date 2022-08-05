const gridCalculator = document.getElementById('grid-calculator');
const calculatorInput = document.querySelector('.calculator-input input');
const keypad = document.querySelectorAll(' button');
const deleted = document.querySelector('.del');
const reset = document.querySelector('.reset');
const input = document.querySelector('.text-bot');
const titleLogo = document.querySelector('.title-logo');
const equal = document.querySelector('.equal');

const button = document.getElementsByClassName('button');

var arr = [...button];

// console.log(button, arr);
// toogle functionality
// keypad.forEach((value, index) => {
//     keypad[index].style.backgroundColor = 'red'
// })


arr.forEach((value, index) => {
    console.log(value, index);
    value.addEventListener('click', () => {


        value.style.opacity = '1';

        if (index == 1) {
            document.getElementsByTagName('body')[0].style.backgroundColor = "hsl(0, 0% , 90% )";
            calculatorInput.style.backgroundColor = 'hsl(0, 0%, 93%)';
            calculatorInput.style.borderRadius = '5px';
            calculatorInput.style.color = 'hsl(60, 10%, 19%)';
            gridCalculator.style.backgroundColor = 'hsl(0, 5%, 81%)';
            titleLogo.style.color = 'hsl(60, 10%, 19%)';
            keypad.forEach((value, index) => {
                keypad[index].style.backgroundColor = 'hsl(0, 5%, 81%)';
                keypad[index].style.boxShadow = '0px 1px 0px 0px hsl(45, 7%, 89%) ';
                keypad[index].style.borderBottom = '1px solid hsl(45, 7%, 89%)';
                keypad[index].style.color = 'hsl(60, 10%, 19%)';
                deleted.style.backgroundColor = 'hsl(185, 42%, 37%)';
                deleted.style.borderBottom = '2px solid hsl(185, 58%, 25%)';
                deleted.style.boxShadow = '0px 1px 0px 0px hsl(185, 58%, 25%) '
                deleted.style.color = 'white';
                equal.style.backgroundColor = 'hsl(25, 98%, 40%)';
                equal.style.borderBottom = '2px solid hsl(25, 99%, 27%)'
                reset.style.backgroundColor = 'hsl(185, 42%, 37%)'
                reset.style.color = 'white';
                reset.style.borderBottom = '2px solid hsl(185, 58%, 25%)'
                reset.style.boxShadow = '1px 3px 2px 0px hsl(185, 58%, 25%)'
            })

        } else if (index == 2) {
            document.getElementsByTagName('body')[0].style.backgroundColor = "hsl(268, 75%, 9%)";
            calculatorInput.style.backgroundColor = 'hsl(268, 71%, 12%)';
            calculatorInput.style.borderRadius = '5px';
            calculatorInput.style.color = 'hsl(52, 100%, 62%)';
            gridCalculator.style.backgroundColor = 'hsl(268, 71%, 12%)';
            titleLogo.style.color = 'hsl(60, 10%, 19%)';

            keypad.forEach((value, index) => {
                keypad[index].style.backgroundColor = 'hsl(268, 71%, 12%) ';
                keypad[index].style.boxShadow = '0px 1px 0px 0px  hsl(285, 91%, 52%)';
                keypad[index].style.borderBottom = '1px solid hsl(268, 47%, 21%)';
                keypad[index].style.color = 'hsl(52, 100%, 62%)'
                deleted.style.backgroundColor = 'hsl(281, 89%, 26%)';
                deleted.style.color = 'white';
                equal.style.backgroundColor = 'hsl(176, 100%, 44%)';
                reset.style.backgroundColor = 'hsl(281, 89%, 26%)'
                reset.style.color = 'white';
            })


        } else {
            document.getElementsByTagName('body')[0].style.backgroundColor = 'hsl(222, 26%, 31%)';
            calculatorInput.style.backgroundColor = 'hsl(224, 36%, 15%)';
            calculatorInput.style.borderRadius = '5px';
            calculatorInput.style.color = 'white';
            gridCalculator.style.backgroundColor = 'hsl(223, 31%, 20%)';
            keypad.forEach((value, index) => {
                keypad[index].style.backgroundColor = 'hsl(0, 5%, 81%)';
                keypad[index].style.color = 'hsl(60, 10%, 19%)';
                keypad[index].style.borderBottom = '1px solid hsl(30, 25%, 89%)';
                keypad[index].style.boxShadow = '1px 2px 0px 0px hsl(28, 16%, 65%)';
                equal.style.backgroundColor = 'hsl(6, 63%, 50%';
                equal.style.borderBottom = '2px solid hsl(25, 98%, 40%)'
                deleted.style.borderBottom = '2px solid hsl(225, 21%, 49%)';
                deleted.style.backgroundColor = 'hsl(225, 21%, 49%)';
                reset.style.backgroundColor = 'hsl(225, 21%, 49%)';
                reset.style.color = 'white';
                reset.style.borderBottom = '2px solid hsl(225, 21%, 49%)';


            })

        }
        arr.filter((item) => {
            return item != value;
        }).forEach((value) => {
            value.style.opacity = "0";
        })
    })
})














// calculator code

const calculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: false,
    operator: null
}

console.log(calculator.displayValue.slice(0))

function updateDisplay() {
    input.value = calculator.displayValue;
}

updateDisplay();

gridCalculator.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('reset')) {
        console.log('reset', target.value);
        Reset();
        updateDisplay();
        return;
    }
    if (target.classList.contains('operator')) {
        console.log('operator', target.value);

        handleOperator(target.value);
        inputOperators(target.value)
        updateDisplay();
        return;
    }

    if (target.classList.contains('dot')) {
        console.log('dot', target.value);
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('del')) {
        console.log('del', target.value);
        del();
        updateDisplay();

        return;
    }

    if (target.classList.contains('equal')) {
        handleOperator();
        updateDisplay()
        return;
        // updateDisplay();
    }
    console.log(input.value)
    inputDigit(target.value);
    updateDisplay();
    console.log('digit', target.value);

});



function inputDigit(digit) {
    const { displayValue, secondOperand } = calculator;

    if (secondOperand === true) {
        calculator.displayValue = digit;
        calculator.secondOperand = false;
    } else if (digit === '0') {
        calculator.displayValue = displayValue + parseInt(digit);

    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot) {

    if (calculator.secondOperand === true) {
        calculator.displayValue = '0.'
        calculator.secondOperand = false;
        return;
    }
    if (!calculator.displayValue.includes('.')) {
        calculator.displayValue += dot;
    }
}

function inputOperators(operator) {
    if (!calculator.displayValue.includes(operator)) {
        calculator.displayValue += operator;
    }
}

function handleOperator(nextoperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    while (operator && calculator.secondOperand) {
        calculator.operator = nextoperator;
        // if (calculator.secondOperand === nextoperator) {
        //     calculator.secondOperand = false;
        // }
        console.log(calculator);

        return;
    }

    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }
    // while (calculator.secondOperand === operator) {
    //     calculator.secondOperand = false;
    // }
    calculator.operator = nextoperator;
    calculator.secondOperand = true;

    console.log(nextoperator)
    console.log(inputValue);
    console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === 'x') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

function Reset() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.operator = null;
    calculator.secondOperand = false;
}

function del() {
    var counter = '';
    if (calculator.displayValue) {
        calculator.displayValue = calculator.displayValue.substring(0, calculator.displayValue.length - 1);
        console.log(calculator.displayValue);


    }

    if (calculator.displayValue === '') {
        calculator.displayValue = '0'
    }
}