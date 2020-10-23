let display = document.querySelector('.inner-display');
display.textContent = '0';

let num1 = '';
let num2 = '';
let operator = '';

let decimalBtn = document.querySelector('button[value="."]');

let buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', getValue));

function getValue(e) {
	let buttonValue = e.target.value;

	if (buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' || buttonValue === '÷') {
		if (num1) { // nested if so if user presses operator first, it doesn't fire. Makes sure first button is a #
			operator = buttonValue;
			display.textContent = operator;
		}
	} else if (buttonValue === '=') {
		if(num1 && num2) {
			operate(num1, num2, operator);
		} else {
			display.textContent = num1;
		}
	} else if (buttonValue === 'clear') {
		clear();
	} else if (num1 && operator) {
		num2 += buttonValue; 
		display.textContent = num2;
	} else {
		num1 += buttonValue; 
		display.textContent = num1;
	}
}

function operate() {
	let result;
	let number1 = parseFloat(num1);
	let number2 = parseFloat(num2);

	if(operator === '+') {
		result = number1 + number2;
	} else if(operator === '-') {
		result = number1 - number2;
	} else if(operator === 'x') {
		result = number1 * number2;
	} else if(operator === '÷') {
		if(number1 === 0 || number2 === 0) {
			result = "Can't divide by zero";
		} else {
			result = number1 / number2;
		}
	}
	display.textContent = result;

	num1 = result;
	operator = '';
	num2 = '';
}

function clear() {
	display.textContent = '0';
	num1 = '';
	num2 = '';
	operator = '';
}