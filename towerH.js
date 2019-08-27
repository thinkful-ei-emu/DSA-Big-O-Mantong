function TOH(n, source, dest, temp){
  if (n===1){
    print(source,dest);
  }
  //TOH(n-1,source,temp,dest);
}

function print(source,dest){
  console.log(`${source} -> ${dest}`);
}

TOH(1);