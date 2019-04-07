/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let reverseStr='';
    reverseStr.length = someStr.length;
  for(let i=0; i<=someStr.length-1; i++)
  {
    let char = someStr[(someStr.length-1)-i];
    reverseStr += char;
    
    //push(someStr[i]);
  }
  return reverseStr;
}

console.log(reverseStr("jehudi"));