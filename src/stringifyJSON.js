// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {  	
  //if obj is null
	if (obj === null){
		return 'null';
	}

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
  			result += stringifyJSON(obj[i]) + ','
  		}

  		return result + stringifyJSON(obj[obj.length - 1]) + ']';
  		//result += stringifyJSON(item[item.length-1]) + ']';
  		//add the last item in the array to result array (ob.length-1) + ']';
		}
	};
	// if it's an object
	if (typeof obj === 'object' ){
		var resultArr = [];
    var result ='';

		// use for loop to interate through every key and property of the object
		for (var key in obj){
		// result string += '{"' + key + '":' + recurse(object[key]) + '"}';
      if(typeof obj[key] === 'function'){
        result ='{}';
      }
      else if(obj[key] === undefined){
        continue;
      }
      else{
			resultArr.push('"' + key + '":' + stringifyJSON(obj[key])); 
			//result += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
		}
		result ='{' + resultArr.join(",") +'}';
    return result;
	}

  	
  // // if obj is undefined
  // if (obj === undefined){
  //   return '';
  // }

   // if obj is a function
  if (typeof obj === 'function'){
    return '{}';
  }

  // if obj is string
	if (typeof obj === 'string'){
		return '"' + obj + '"';
	}


	//else result string += obj;
	else {
		return '' + obj;
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

unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];
console.log(stringifyJSON(stringifiableObjects));
console.log(stringifyJSON(unstringifiableValues));
console.log('--------------------------------------------------------------------------')
console.log(JSON.stringify(stringifiableObjects));
console.log(JSON.stringify(unstringifiableValues));

