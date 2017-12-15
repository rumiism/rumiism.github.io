var ciyClass = ["Class A", 1, "Class C"];
var oneClass = "Class D";

console.log(ciyClass);

//to get total value of the array

console.log(ciyClass.length)

console.log (ciyClass [5]);

ciyClass.push ("CLass D");

//add value to end of array variable;

console.log (ciyClass);

//remove last value of an array
ciyClass.pop ();

console.log (ciyClass)

//add value to first index of array variable
ciyClass.unshift ("Class A+")

console.log (ciyClass);

ciyClass.shift()

console.log (ciyClass);

ciyClass.splice (2,1,"Class B");

console.log(ciyClass);

//["Class A, "Class A+, 1, "Class B", "Class C"]