# INTERVIEW QUESTIONS

## Count the pairs

## Instructions
Given an array of elements, return the number of pairs. A pair is defined as two matching elements. 

A third matching element is not counted as part of a pair. 

There can be multiple pairs of a given input.

## Example
Test Case 1: [1,2,1,3,2,4,2,3,3,1,3,3]
Expected Output: 4
Explanation: There is one pair of 1s, one pair of 2s, and two pairs of 3s. 
For example, even though there are five 3s, there are only two pairs. 

Test Case 2:[1,2,3,4]
Expected Output: 0 

## Optimal Time
O(n)

Step: 1
What are you going to do?
iterate through the array 

How are you going to do it?
using a for loop 

Why are you going to do it?
check each index value


Step: 2
What are you going to do?
create an empty string 

How are you going to do it?
using a conditional statment 

Why are you going to do it?
so only pairs are counted 


Step: 3
What are you going to do?
compare index values with eachother 

How are you going to do it?
create a variable of the current itieration 

Why are you going to do it?
to check each index against each other and find pairs

Step: 4
What are you going to do?
create 'pairs' array to store the elements that are in pairs of two

How are you going to do it?
write a function that appends just elemetn in pairs to the 'pairs' array

Why are you going to do it?
to count the total number of pairs 

Step: 5
What are you going to do?
How are you going to do it?
Why are you going to do it?
