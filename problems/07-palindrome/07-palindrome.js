/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
//import {reverseStr} from '../03-reverse-string'
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

function isPalindrome(someStr) {
    revStr = reverseStr(someStr);
    if (someStr === revStr)
        return true;
    else
        return false;
}

console.log(isPalindrome('dog'));
console.log(isPalindrome('madam'));
