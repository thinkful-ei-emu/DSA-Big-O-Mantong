// function TOH(n, source, dest, temp){
//   if (n===1){
//     print(source,dest);
//   }


  
//   TOH(n-1,source,temp,dest);
//   TOH(n-1,temp,dest,source);
// }

// function print(S,D){
//   console.log(`${S} -> ${D}`);
// }

// TOH(3,'A','C','B');

function stepsToSolveHanoiT(height, srcP, desP, bufferP) {
  if (height >= 1) {
  
    // Move a tower of height-1 to the buffer peg, using the destination peg.
    stepsToSolveHanoiT(height - 1, srcP, bufferP, desP);
  
    // Move the remaining disk to the destination peg.
    console.log('Move disk from Tower ', srcP, ' to Tower ', desP);
  
    // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
    stepsToSolveHanoiT(height - 1, bufferP, desP, srcP);
  }
  if (height === 0) 
    return;
}
  
stepsToSolveHanoiT(3, 'A', 'C', 'B');