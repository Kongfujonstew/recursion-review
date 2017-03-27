// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // declare a return variable, which is a empty string
  var result = '';

  // declare a recurse function
  var recurse = function(item){
  	// if it's an object
  	if (Array.isArray(item)){
  		if(item.length === 0){
  			result += '[]';
  		}
  		else{
	  		result += '[';
	  		// use a for loop to interate through every item of the array until length -2
	  		for(var i = 0; i< item.length - 1; i++){
	  			// result string += stringifyJSON(obj[i]) + ', ';
	  			result += recurse(item[i]) + ', '
	  		}
	  		//result += stringifyJSON(item[item.length-1]) + ']';
	  		//add the last item in the array to result array (ob.length-1) + ']';
  		}
  	}	

  	if (typeof item === 'object'){
  		result += '{';
  		// use for loop to interate through every key and property of the object
  		for (var key in item){
  		// result string += '{"' + key + '":' + recurse(object[key]) + '"}';
  			result += key + ':' + recurse(item[key]) + ',';
  		}
  		result += '}';
  	}

  	// if it's an array


  	// if obj is string
  	if (typeof item === 'string'){
  		result += '"' + item + '"';
  	}
		//if obj is null
		if (item === null){
			result += 'null';
		}

		//else result string += obj;
		else {
			result += item;
		}
  }


  //recurse(obj)
  recurse(obj);
  // return the result string
  return result;
};





var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];

console.log(stringifyJSON(stringifiableObjects));
console.log('--------------------------------------------------------------------------')
console.log(JSON.stringify(stringifiableObjects));
