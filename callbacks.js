// function makeSquared(number) {
// 	return function() {
// 		return number * number;
// 	}
// }

// var nineSquared = makeSquared(9)
// var twelveSquared = makeSquared(12)


// function makePower(power){
// 	return function(x){
// 		return Math.pow(x,power);
// 	}
// }

// var squared = makePower(2);
// var cubed = makePower(3);
// var forthed = makePower(4);

// console.log("Nine Squared is " + squared(9));
// console.log("Twelve Cubed is " + cubed(12));
// console.log("Five forthed is " + forthed(5));

function forEach(array, callback) {
	for(var x=0;x<array.length;x++) {
		callback(array[x]);
	}
}

var students = ['Tom', 'Jill', 'Jan'];

forEach(students, function(name){console.log(name +" was here")});