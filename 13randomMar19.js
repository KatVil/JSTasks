//сгенерировать num чисел до 100 и отсортировать их 
//в порядке возрастания
let num = 25;
let max = 100;
const func1 = (num, max)=>{
  let arr = [];
  let min = 1;
  for (let i=0; i<=max; i++){
    while ((arr.length <= num) && (i<=max)){
        i = (Math.random() * (max - min) + min).toFixed(2);
        // i = i.toFixed(2);
        arr.push(i);
        i++;
    } 
    arr.sort( (max, min) => max - min );  
    return arr;
  }
}
console.log(func1(num,max));