// Напиши функцию, которая в массиве чисел находит и возвращает наименьшее число. Проверь работоспособность своей функции, добавив в массив отрицательные числа.
// [94, 2, 71, 10, 22, 71] —>  2
arr1 = [94, 2, 71, 10, 22, 71];
const func1 = (arr) =>{
  minEl = arr[0];
  for(let i of arr){    
    if(arr[i]<minEl){
     let minElNew = arr[i];}
    else{
      i++;
    }
    return minElNew;
  }
}
console.log(func1(arr1));



