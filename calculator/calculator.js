function add(a, b) {
	let added = a + b;
	return added;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	return array.reduce((total, current) => total + current, 0);
}

function multiply(array) {
	return array.length
	? array.reduce((a, b) => a * b)
	: 0;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(n) {
	if (n == 0) return 1;
	let product = 1;
	for(let i = n; i > 0; i--){
		product *= i;
	}
	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}