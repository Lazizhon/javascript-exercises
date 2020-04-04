function add(numberOne, numberTwo) {
	return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
	return numberOne - numberTwo
}

function sum(el) {
	let sum = 0;
	el.forEach(element => {
		sum += element;
	});
	return sum;
}

function multiply(el) {
	let sum = 1;
	el.forEach(element => {
		sum *= element;
	});
	return sum;
}

function power(inputOne, inputTwo) {
	let powerSum = inputOne;
	for (let i = 0; i < inputTwo - 1; i++) {
		powerSum *= inputOne;
	}
	return powerSum
}

function factorial(factorInput) {
	let factorialStarter = 1;
  for (let i=1; i <= factorInput; i++){
    factorialStarter *=i
  }
    return factorialStarter;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}