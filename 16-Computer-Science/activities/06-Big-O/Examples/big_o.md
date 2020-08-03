# Big O Analysis

Express the running times of the following algorithms in Big O notation. Justify your responses.

Some of these are just review. A few apply Big O to algorithms we saw before.

Assume the _worst case_ running time—i.e., consider only the _maximum_ number of instructions the algorithm could take.

What is the running time of...

* Selection sort? 

* Insertion sort?

* Linear search?

* Binary search?

* Finding duplicates in an array?

two ways to push element to the begining of an array
===========================================
var numbers = [31.9, 35.3, 42.4, 42.4, 60.8]
numbers.upshift(44);

==============================================
for (var i=myArray.length; i>=0; i--){
    myArray[i] = myArray[i-1]
}
myArray[0] = -1;