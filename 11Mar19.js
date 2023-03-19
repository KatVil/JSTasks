const generateRange = (min, max, step) => {
    let arr1 = [];
    for(let i = min; i<max; i= i + step){
       arr1.push(i);
    }
    return arr1;
  }
  console.log(generateRange(1,9,2));