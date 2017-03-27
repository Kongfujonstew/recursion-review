// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // declare a result variable
  var result = [];
  // declare the recurse function
  var recurse = function(node){
  	// compare each node with the target classname
  	if (node.classList.contains(className)){
  	// add that classname to the result array if it matches with the node
  		result.push(node);
  	}
  	  // check if that node has any children
  	if (node.children){	
  	// if it does, pass each node into the recurse function individually through a for loop
  		for (var i = 0 ; i < node.children.length ; i ++){
  			recurse(node.children[i]);
  		}
  	}
  }
  	recurse(document.body);
  	return result;
};
