// function makeSquared(number) {
// 	return function() {
// 		return number * number;
// 	}
// }

function makePower(power){
	return function(x){
		return Math.pow(x,power);
	}
}

// var nineSquared = makeSquared(9)
// var twelveSquared = makeSquared(12)

var squared = makePower(2);
var cubed = makePower(3);
var forthed = makePower(4);

console.log("Nine Squared is " + squared(9));
console.log("Twelve Cubed is " + cubed(12));
console.log("Five forthed is " + forthed(5));

