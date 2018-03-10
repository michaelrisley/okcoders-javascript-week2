console.log("----------------------")

var bottles = 99

while (bottles != 0) 
	{
	console.log(bottles +" bottles of beer on the wall");
	console.log(bottles +" bottles of beer");
	console.log("you take one down, you pass it around");
	bottles = bottles - 1;
	console.log(bottles +" bottles of beer on the wall");
	console.log("");
	}

// You can also use "beers--" which is exactly the same as "bottles = bottles - 1". You can also use beer++ for the reverse
