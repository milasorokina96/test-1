function calcSum() {
	let sum = 0;

	return function(number) {
		return sum += number;
	}	
}
let sum = calcSum();
module.exports = sum;