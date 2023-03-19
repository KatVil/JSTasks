for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

  for (let i = 2; i <= 100; i++) {
    if (i % 3 == 0) {
      alert( i );
    }
  }

  const func = () => {
    let arr = [];
    for (let i = 1; i <= 50; i=i+5) {
          alert( i );
          arr.push(i);
      }
    return arr;
  }
  console.log(func());