// We can typecast any datatype into the datatype of our choice using the datatype and the variable

// e.g. let isLoggedin = 1
//      let boolean_loggedin = Boolean(isLoggedin)  => returns true ...changes 1 into its boolean form

/* 
values    into number
"1234" => 1234
"true" => 1
"false" => 0
"absc123" => NaN
"NULL" => 0
"Undefined" => NaN
"ishan" => NaN
*/

let number = "12334"
let alphabets = "qbcd1123"

let alphabets_number = Number(alphabets)

let flag = false;
console.log(typeof flag)
let flag_number = Number(flag)
console.log(flag_number)

let num = Number(number) // string typecasted into number

console.log(typeof number) 
console.log(typeof num)
console.log(typeof(num)) // can be used as a method too
console.log(typeof(alphabets_number))
console.log(alphabets_number)


                                            // COMPARISONS OF DATATYPES

       // COMPARISON(<,>,<=,>=) AND EQUALITY CHECK(==) ACT DIFFERENTLY
       /* 
          The comparison operators first convert the null to a number i.e. 0 while equality check does not.
          null == 0 ...false
          null >= 0 ... true --> converted to 0 first then compared.
          null < 0 ... false     
          
          ** Difference between ==  and === operator.
             
             == checks the equality of two operands
             === checks the equality and as well as datatype of the operands.

             ("2" == 2) --> true
             ("2" === 2) --> false, string and number are not same.

             */