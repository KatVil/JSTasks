const pow = (x, n)=>{
    let res = x**n;
    return res;
  }
  console.log(pow(2,3));

  const pow1 = (x, n)=>{
    let res =Math.pow(x,n);
    return res;
  }
  console.log(pow1(2,3));


  // (3, 2) → 3 * 3 = 9, (3, 3) → 3 * 3 * 3 = 27
const pow0 = (x, n) =>{
  let res = 1;
  for(let i=1; i<=n; i++){
    res = res*x;
  }
  return res;
} 