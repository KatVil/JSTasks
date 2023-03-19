function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  //or with geom progression:
  function sumTo(n) {
    return n * (n + 1) / 2;
  }
  
  alert( sumTo(100) );
