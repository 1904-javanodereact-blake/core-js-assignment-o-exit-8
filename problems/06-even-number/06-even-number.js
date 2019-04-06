/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    

    someNum /=2;
    console.log(someNum);
    let stringNum = someNum.toString();
    //check if somenumber has a decimal result
    if (stringNum.includes(".") === true)
        return false
    else
        return true;
}

console.log(`is this a even number: 
${isEven(99)}
and this one: ${isEven(2)} `);