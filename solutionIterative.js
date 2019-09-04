/*
12. Iterative version
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.
*/

/* 1. Counting Sheep 
* Big O: O(n) linear complexity
As the input size grows, so does the runtime. If the sheepcount is 1,
You call the recursive function 1 time, if the sheepcount is 100, call the recursive 
function 100 times. 
If the input is n, you call the recursive funciton n times, which makes this a linear runtime.
*/
function countSheepLoop(num){
    let counter = 0;
    for(let i=num; i>0; i--){
        console.log(`counting sheeps ${i}`);
        counter++;
    }
    console.log(`countSheepLoop counter: ${counter}`);
}

//2. Write a function called `powerCalculator()`
//**** O(n)****
const powerCalculator = function(base, exponent){
    // make sure exponent is > = 0
    if(exponent < 0){
        return 'exponent should be >= 0';
    }
    let result = 1;
    for(let i=0; i<exponent; i++){
        result *= base;
    }
    return result
}

//Exercise 3 - Reverse String
//The run time depends on how long the string it. Each character in the string 
//is visited once
//**** O(n)****

function reverse_tail(str) {
    let accumulator = "";
    let counter = 0;
    while (str !== "") {
    	accumulator = str[0] + accumulator;
    	str = str.slice(1);
        counter++;
    }
    console.log(`reverse_tail counter: ${counter}`);
    return accumulator;
}

//Exercise 4 - Triangular Number
/*
For this you have to consider all the input up to the nth number.
The larger the input is, the more numbers you have to add. Therefore,
the runtime is proportional to the input size.
*/
//**** O(n)****

function triangle(n) {
    let tot = 0;
    let counter = 0;
    for (var i = 1; i <= n; ++i) {
	    tot += i;
        counter++;
    }
    console.log(`triangle counter: ${counter}`);
    return tot;
}

//Exercise 5 - String Splitter
/*
You have to go though every character in the string to identify how to split
increasing the input size will increase the run time
*/
//**** O(n)****
function split(str, sep) {
    let ret = [];
    let counter = 0;
    while (true) {
        let idx = str.indexOf(sep);
        if (idx == -1) 
            break;
	    ret.push(str.slice(0, idx))
	    str = str.slice(idx + sep.length);
        counter++;
    }
    ret.push(str);
    console.log(`split counter: ${counter}`);
    return ret;
}
//Exercise 6 - Factorial
/*
You have to consider every number up to the number whose factorial you are
trying to find. If that number is a large number your number of operation increases
*/
//**** O(n)****

function factorialIterative(number){
    let counter = 0;
    let fact = 1;
    for (let i = 1; i <= number; i++){
        fact *= i;
        counter++;
    }
    console.log(`factorialIterative counter: ${counter}`);
    return fact;
}

//Exercise 7 - Fibonacci
/*
You have to consider every number up to the number whose Fibonacci sequence you are
trying to find. If that number is a large number your number of operation increases
*/
//**** O(n)****
function fibonacciIterative(number){
    let num1 = 1;
    let num2 = 0;
    let fib = null;
    let counter = 0;
    while(number > 0){
        fib = num1;
        num1 = num1+num2;
        num2 = fib;
        number--;
        counter++;
    }
    console.log(`fibonacciIterative counter: ${counter}`);
    return num2;

}

function main(){

    countSheepLoop(10);
    console.log(powerCalculator(10,2));
    console.log(reverse_tail('tauhida'));
    console.log(reverse_tail('tauhidaparveen'));
    console.log(triangle(3));
    console.log(triangle(6));
    console.log(split('1/27/2017', '/'));
    console.log(factorialIterative(5));
    console.log(fibonacciIterative(3));

}
main();