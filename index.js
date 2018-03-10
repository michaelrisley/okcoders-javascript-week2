var beers = 99;

function printVerse(num) {

	var name = "bottles";
	if (num === 1) {name = "bottle";}

	console.log(num + " " + name + " of beer on the wall");
	console.log(num + " " + name + " bottles of beer")
	console.log("You take one down, you pass it around.");
	num--;
	console.log(num + " bottles of beer on the wall\n")
	return num;
}

while (beers > 0) {
	beers = printVerse(beers);
	}

// You can also use "beers--" which is exactly the same as "bottles = bottles - 1". You can also use beer++ for the reverse
// extra comment because I forgot to add a message to my commit
