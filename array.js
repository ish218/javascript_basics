
// Array - it is an object that can contain different number of elements under a same variable name.
// NOTE --> Javascript arrays are resizable i.e. they are dynamic.
// Array copies are treated as Soft Copy, that is they share the same reference point.

// (way-1) declaration of arrays :
const myArray = [1,3,5,7,true,"ishan",false];   /* the array can contain elements of different types like 
                                                int, boolean, string. */

 // (way -2) using the 'Array' keyword:
 const myArray2 = new Array(1,2,3,4);
 console.log(myArray2[2]);

 // Array Methods 

 // 1. push() - adding elements
 myArray.push(6);
 console.log(myArray);

 //2. pop() - removes the last element
 myArray.pop();
 console.log(myArray);

//3. includes() - checks whether the array contains a given element RETURN TYPE --> Boolean
console.log(myArray.includes(7));
console.log(myArray.includes(20));

//4. indexOf() - returns the index of the element , Returns -1 if no match is found.
console.log(myArray.indexOf(5));

//5. IMP --> join() - changes the Array into String.
const arrString = myArray.join();
console.log(arrString);

/*6. slice() and splice() --> (i)slice() returns the range of elements excluding the last index, splice() returns
                               the entire range including start and end index.
                              (ii) splice() manipulates the original array by removing the elements from the og array
                               but slice just returns the range of the array.
                              */


                               
// we can also push one array into another and the pushed array is treated as one single element.

const marvel = ["ironman", "thor", "spiderman"];
const dc = ["superman", "batman", "aquaman"];
marvel.push(dc);
dc.push(marvel);
console.log(marvel);
console.log(dc);

//We can also use concat() to join the two arrays. Concat() always returns a new array.
const mergeArray = marvel.concat(dc);
console.log(mergeArray);
console.log(marvel[3][2]); //  marvel array's third element's index 2 element i.e. aquaman

//We can also usofe SPREAD(...) in place of concat(), which spreads the values of all the arrays and returns them all.
const spreadArray = [...marvel, ...dc];
console.log(spreadArray);

// Changing any data type (object, string etc) to ARRAY Using the From() method.
const str = "Ishan";
console.log(Array.from(str));

console.log(Array.from({name:"Ishan"})); //returns an empty set, we'll need to specify whether key or value has to array.

// Array.of() --> this method is also used to convert the set of elements to an array.
let a=100;
let b=1000;
let c="bubu";

console.log(Array.of(a,b,c));

