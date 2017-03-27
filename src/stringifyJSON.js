// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {  	
  	// if it's an array
	if (Array.isArray(obj)) {
		if (obj.length === 0) {
			return '[]';
		}
		else {
  		var result = '[';
  		// use a for loop to interate through every item of the array until length -2
  		for (var i = 0; i < obj.length - 1; i++) {
  			// result string += stringifyJSON(obj[i]) + ', ';
  			result += stringifyJSON(obj[i]) + ', '
  		}

  		return result + obj[obj.length - 1] + ']';
  		//result += stringifyJSON(item[item.length-1]) + ']';
  		//add the last item in the array to result array (ob.length-1) + ']';
		}
	};
	// if it's an object
	// if (typeof item === 'object'){
	// 	result += '{';
	// 	// use for loop to interate through every key and property of the object
	// 	for (var key in item){
	// 	// result string += '{"' + key + '":' + recurse(object[key]) + '"}';
	// 		result += key + ':' + stringifyJSON(item[key]) + ',';
	// 	}
	// 	result += '}';
	// }

  	


  	// if obj is string
	if (typeof obj === 'string'){
		return '"' + item + '"';
	}
	//if obj is null
	if (obj === null){
		return 'null';
	}

	//else result string += obj;
	else {
		return '' + stringifyJSON(obj);
	}



  //recurse(obj)
  // return the result string
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
