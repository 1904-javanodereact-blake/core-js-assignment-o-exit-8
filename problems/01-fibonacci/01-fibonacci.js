/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

  let prePreFib = 0;
  let preFib = 1;
  let fibonacci = 1;
  let fibonacciSequence=[n-1];

    for (let i=1; i<=n; i++)
    {
      //saving sequence
      fibonacciSequence[n] = fibonacci;

      fibonacci = prePreFib + preFib;
      
      prePreFib = preFib;
      preFib = fibonacci;  
      console.log(fibonacciSequence[n]); 
    
    }
    
}
console.log(fib(12));