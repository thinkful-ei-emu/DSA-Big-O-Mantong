/*
1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number of 
sheep you have. 
The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.
Input: 3
Output:
3: Another sheep jump over the fence
2: Another sheep jump over the fence
1: Another sheep jump over the fence
All sheep jumped over the fence
*/

/*
 * @function countSheep
 * @desc     Recursive program that counts how many sheep jumps over the fence. 
 * @param    {num} num - the number sheep 
 * @returns  none
 * @display  displays how many sheep jumped over the fence
 */

function countSheep(num){
  for (let i=num; i >= 0; i--){
    if(i===0)
    {
      console.log('All sheep jumped over the fence');
    } 
    else{
      console.log(`${i}: Another sheep jump over the fence`);
    }  
    
  }
  return '';
}
console.log(countSheep(3));

//2
const powerCalculatorRec = function(base, exponent){
  let result=1;
  if(exponent < 0){
    return 'exponent should be >= 0';
  }
  if(exponent === 0){
    return 1;
  }else {
      
    for (let i=0; i < exponent; i++)
      result  *= base; 
  }
  return result;
};
console.log(powerCalculatorRec(10,4));

//3
function reverseString(str) {
  let newWord = '';
  for (let i=str.length-1; i >= 0; i--){
    
    newWord += str[i];
  }
  return newWord;
}
console.log(reverseString('abc'));

//4

function triangle(n) {
  if (n < 2) 
    return n;
  for (let i = 0; i < n; i++){
    return (1+n)*n/2;
  }    
   
}
console.log(triangle(8));

//5
function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx == -1) 
    return [str];
  for (let i= 0; i < str.length; i++){
      
  }
    
}
