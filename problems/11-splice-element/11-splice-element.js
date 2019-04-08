/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  
  let splicedArray=[];
  splicedArray.length = index;
  for (let i=0; i<=index; i++)
  {
    splicedArray[i]=someArr[i];
  }
  return splicedArray;
}
let someArr =[1,2,3,4,5,6,7,8,9];
let spliceArr = spliceElement(someArr, 4);
console.log(spliceArr);
