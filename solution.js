/*===============================Exercise 11=====================
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:
There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly 
stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to 
begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) 
where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be 
moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the 
other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
| Rod A          | Rod B     | Rod C         | 
|----------------|-----------|---------------|
|      ----      |           |               | 
|   ---------    |           |               | 
| -------------  |           |               | 
A->C
A->B
C->B
A->C
B->A
B->C
A->C
| Rod A          | Rod B     | Rod C          | 
|----------------|-----------|----------------|
|                |           |     ----       | 
|                |           |   ---------    | 
|                |           | -------------  | 
*/

//start with just 1 disk - if you had one disk, then you woudl move from A->C
//think about how you would do that.
//Then think about how you would do this with 2 disks
// towerOfHanoi(2, 'A', 'C', 'B'); 
const towerOfHanoi = function(n, source, dest, temp){
    if(n===1){
        printMove(source, dest);
    }
    else{
        towerOfHanoi(n-1, source, temp, dest);
        towerOfHanoi(1, source, dest, temp);
        towerOfHanoi(n-1, temp, dest, source);
    }
};
let count = 1;
const printMove = function(source, dest){
    console.log(`${count} Move from ${source} to ${dest}`);
    count++;
};

function main(){
    towerOfHanoi(4, 'A', 'C', 'B');
}
main();

/*
Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
1 Move from A to C
2 Move from A to B
3 Move from C to B
4 Move from A to C
5 Move from B to A
6 Move from B to C
7 Move from A to C
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm?
7
15
31
2^3 = 8
2^4 = 16
2^5 = 32
O(2^n) -> exponential
*/
/*=======================Exercise 13=============================================
/*Exercise 1 - Counting Sheep
* Big O: O(n) linear complexity
As the input size grows, so does the runtime. If the sheepcount is 1,
You call the recursive function 1 time, if the sheepcount is 100, call the recursive 
function 100 times. 
If the input is n, you call the recursive funciton n times, which makes this a linear runtime.
*/
function countSheep(num){
    //stopping condition of base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    } 
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        console.log(`${num}: Another sheep jump over the fence`);
        countSheep(num-1);
    }
}

/* Exercise 2. Write a function called `powerCalculator()` that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
* `powerCalculatorRec(10,2)`  should return `100`
* `powerCalculatorRec(10,-2)`  should return `exponent should be >= 0`
* Big O: O(n) linear complexity
*/

const powerCalculatorRec = function(base, exponent){
    if(exponent < 0){
        return 'exponent should be >= 0';
    }
    else {
        //base case
            if(exponent === 0){
                return 1;
            }
            return base * powerCalculatorRec(base,--exponent); 
        }
}

/* O(n)
Exercise 3 - Reverse String
Write a program that reverses a string. Take a string as input, 
reverse the string, and return the new string.
Input: 'tauhida'
Output: adihuat
*/

function reverseString(str) {
    if (str.length < 2) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}

/* O(n)
Exercise 4 - Triangular Number
Calculates the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
                          *
            *           *    *
*     |   *   *  |   *    *    *  |
 1st     2nd             3rd             nth?  
 1st trianular number = 1
2nd = (1+2) = 3
3rd = (1+2+3) = 6 
5th = (1+2+3+4+5) = 15
Input: 5
Output: 15
*/

function triangle(n) {
    if (n < 2) 
        return n;
    return n + triangle(n - 1);
}

/*
Exercise 5 - String Splitter
Big O: O(n) linear complexity
*/

function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1) 
        return [str];
		//you don't have to return an array, you can return a string as an array of 
		//character 
		//return str;
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))

/*Exercise 6 - Factorial
*/

function factorial(n) {  
    // Base Case - when n is equal to 0, we stop the recursion
    if (n === 0) {
      return 1;
    }
    // This is our Recursive Case
    // It will run for all other conditions except when n is equal to 0
    return n * factorial(n - 1);
}

/*
Exercise 7 - Fibonacci
  
  Write a recursive program that prints the fibonacci sequence of a given number. 
  The fibonnaci sequence a series of numbers in which each number is the sum of the 
  two preceding numbers. 
  For example the 7th fibonacci number in a fibonaci sequence is  13. 
  The sequence looks as follows: 1 1 2 3 5 8 13.
  
  Input: 7
  Output: 13
  */
 function fibonacci(n) {
    // Base case
    if (n <= 0) {
      return 0;
    }
    // Base case
    if (n <= 2) {
      return 1;
    }	
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);	
  }
/*
Exercise 8 - Org chart
This is 0(n) - All it is doing is going to each node and printing them - so the recursive 
calls goes through each node, and any child within it and prints them. Each item in the input is visited once.
As the input grows, so will the run time because there will be more items to visit to print them. Therefore, the
runtime of this algorithm depends on the number of input and will grow as the input grows making it linear 0(n).
*/



/*
Exercise 9 - Anagrams
Big O: O(n!) - Factorial time
You have to consider the permutation for all letters that are in a string. Depending 
on the size of the string, you have to work on each charater to match it with each of the other
characters. If the string is 4 characters long, the permutation for that would be 
4! => 4*3*2*1 = 24. If the string is n characters long, the permutation for that would be n! making
this runtime O(n!)
*/

/* Exercise 10
Big O: O(log(n)) - Logarithmic
With each operation, you are dividing the input by half and half of the input is 
sent as paramenter to the next recursive call. In each operation, the input is divided
in half making it log time.
  */

 function binaryRep(input){
    if(input<=0){
        return '';
    } 
    let binary = Math.floor(input%2);
    return binaryRep(Math.floor(input/2)) + binary

}