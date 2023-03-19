//функция обрезает строку до нужнгй длины maxLength, все что дальше - сворачивает в виде "..."
inputString = 'Делается это очень легко через метод slice. Slice возвращает обрезанный массив, при этом никак не изменяя оригинал. Принимает он два аргумента: с какого индекса начать считывание массива и с какого закончить. Возвращает данные в этом промежутке. Со строками всё работает точно также.';
maxLength = 20;
const clampString = (inputString, maxLength) => {
  if (inputString.length <= maxLength){
    return inputString;
  }
  let newString = inputString.slice(0, maxLength);
  newString += '...';
  return newString;  
}
console.log(clampString(inputString, maxLength));
/*inputString = 'Делается это очень легко через метод slice. Slice возвращает обрезанный массив, при этом никак не изменяя оригинал. Принимает он два аргумента: с какого индекса начать считывание массива и с какого закончить. Возвращает данные в этом промежутке. Со строками всё работает точно также.';
maxLength = 20;
function clampString(inputString, maxLength) {
    if(inputString.length <= maxLength) {
        return inputString;
    }
    // Если первое условие ( длина строки меньше максимальной ) сработало, то следующий код не выполнится
 
    inputString = inputString.slice(0, maxLength);
    inputString += "...";
 
    return inputString;
}
console.log(clampString(inputString, maxLength));
*///const arrInp = [94, 2, 71, 10, 22, 71];
/*let strInp = 'функция обрезает массив (в исходнике была строка) до нужнгй длины maxLength, все что дальше - сворачивает в виде'
const maxLength = 1;
const FindNum = (strInp, maxLength) => {
  let arrNew = strInp.split(',');
  arrNew.slice(0, (maxLength+1));
  arrNew.push('...');
  let strFin = arrNew.join(' ');
  return strFin;
}
console.log(FindNum(strInp,maxLength));
/***/