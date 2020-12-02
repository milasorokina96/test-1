module.exports = calcSum;

function getNumberFromUser(){
	let number;
	do {
		number = parseInt(prompt("Enter a number.."));
	} while(isNaN(number));
	return number;
}

function calcSum() {
	let sum = 0;

	return function(number) {
		return sum += number;
	}	
}

let sum = calcSum();
alert(sum(getNumberFromUser()));
alert(sum(getNumberFromUser()));
alert(sum(getNumberFromUser()));