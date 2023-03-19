// Напиши функцию, которая в массиве чисел находит и возвращает наименьшее число. Проверь работоспособность своей функции, добавив в массив отрицательные числа.
// [94, 2, 71, 10, 22, 71] —>  2
let arr1 = [94, 2, 71, -10, 22, 71, -250, 1500];
const func1 = (arr1) =>{
  let MinEl = arr1[0];
  for(i of arr1){
    if (i<MinEl){
      MinEl = i;
      //console.log('HI');
    } 
  }
  return MinEl;
}
console.log(func1(arr1));



/*
 minEl = arr[0];
  for(let i of arr){    
    if(arr[i]<minEl){
     let minElNew = arr[i];}
    else{
      i++;
    }
    return minElNew;
  }
}*/