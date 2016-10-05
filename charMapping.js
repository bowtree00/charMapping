// Create an object that maps out character locations in a string

var myString = process.argv.slice(2);
console.log(myString);

var noSpaces = myString.join("");
console.log(noSpaces);


function characterMap(str) {
	var myObject = {};

	for (i = 0; i < str.length; i++) {
		if (!myObject[str[i]]) {
			myObject[str[i]] = [i];
		} else {
			myObject[str[i]].push(i);
		}
	}
return myObject;
}

console.log(characterMap(noSpaces))
console.log(Object.keys(characterMap(noSpaces)))