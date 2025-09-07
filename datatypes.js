// DATATYPES IN JAVASCRIPT

/* 
   PRIMITIVE DATA TYPES
   1. Number => 2 to power of 53
   2. bigInt => for a very large number
   3. boolean => true/ false
   4. String = " "
   5. null => standalone value / representation of an empty value
   6  undefined => no value has been assigned yet
   7. symbol => define uniqueness
   8. object
   
   REFERENCE (NON PRIMITIVE DATATYPES) ---> reference to a memory.
   1. Arrays
   2. Objects
   3. Functions
   
   */

   // TYPEOF => returns the type of datatype
   // Note: typeof returns 'object' for null.

   let student_name = "ISHAN"
   let rollNum = 229303185

   console.log(typeof undefined) // returns undefined
   console.log(typeof null) // returns object
   console.log(typeof student_name)
   console.log(typeof rollNum)
   

//Objects come with a key - value pair within the curly braces.

let myObject = {
name:"Ishan",
age:22,
};

console.log(myObject.name);

// Arrays are just a collection of multiple values that are of the same datatype.

let fruits = ["apple", "orange", "banana", "melon"]
console.log(fruits[2]);

// WE CAN CREATE FUNCTIONS IN MULTIPLE WAYS, ONE IS USING A VARIABLE TO STORE THE FUNCTION:
const myFunction = function()
{
    console.log("this is my first function");
}
myFunction()

// We can create function by just naming the function name
function myFirstFunction()
{
    console.log("this is other way of creating a function");
}

myFirstFunction()


// Stacks and Heaps
/*
   Stacks ----> All primitive datatypes (number, string, bnoolean)...mainly creates a copy of the ref variables.
                Static memory allocation.
   Heaps --->  Non Primitive Datatypes are referenced to heap (array, objects) ... directly references to the data values.
                Dynamic Memory Allocatoin.
*/


// STRINGS
/*  WE CAN USE TWO DIFFERENT METHODS OF PRINTING OUR STRINGS
1. using the simple concat operator "+".
2. by using the backticks ``.
*/

let firstName = "Ishan";
let RegNum = 229303185;
 console.log("My name is" + " " + firstName + " " + "and my registration number is" + " "  + RegNum);

 // or we could just simply use the backticks and inject the variables using ${}.
 console.log(`My name is ${firstName} and my registration number is ${RegNum} and i used the backticks.`);

 // String as an OBJECT!!! key(index) - value(data) pairs 
 const object = new String('My Name Is Ishan');
 console.log(object);

 //using the key value to extract data from the String.
 console.log(object[3]); // prints N

 // NUMBERS

 let number = 350;

 // we can treat a number as an OBJECT too!!
 const objNum = new Number(100);
 console.log(objNum);

 // we can change this number to a string
 const numStr = objNum.toString();
 console.log(numStr);

 //now we can find the length of the characters of the number which we are treating as a String.
 const length= numStr.length;
 console.log(length); 

 // toFixed(decimal places) --returns a Number with decimal places && toPrecision()-- returns a String
const number1 = 12.2345;
console.log(number1.toFixed(2)); // 12.23

console.log(number1.toPrecision(3)); //12.2 --> (3 places) priority to the left from decimal then move right.
