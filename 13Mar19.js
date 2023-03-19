//сгенерировать num чисел до 100 и отсортировать их 
//в порядке возрастания
let num = 20;
let max = 100;
const func1 = (num, max)=>{
  let arr = [];
  for (let i = 0; i<=max; i++){
    while ((arr.length < num) && (i<=max)){
        arr.push(i); 
    }        
    let a = 1;
    arr.sort( (max,a) => max - a );  
  }  
  return arr;
}
console.log(func1(num,max));