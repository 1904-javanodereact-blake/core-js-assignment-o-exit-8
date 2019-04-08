/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(someNum) {
    
    //base case
    if(someNum === 1)
    return 1;
  return someNum*factorial(someNum-1);    
}

console.log(factorial(5));