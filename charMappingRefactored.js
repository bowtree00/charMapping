var myString = process.argv.slice(2);
console.log(myString);

var noSpaces = myString.join("");
console.log(noSpaces);


function characterMap(str){
  var countObj = {};
  var i = 0;
  
  // NOTE: By using 'of' here, the for loop iterates
  // through each character in the string, and the variable 'key'
	// holds the character. i is iterated in the loop to count the indices
	// for each character
	
  for(key of str){
    if(key !== ' '){
      if(countObj[key]){
         countObj[key].push(i);
      } else {
        countObj[key] = [i];
      }
    }
    i++;
  }
  return countObj;
}

console.log(characterMap(noSpaces))
console.log(Object.keys(characterMap(noSpaces)))