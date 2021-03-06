/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let substring = '';
    try {
        if (someStr == '') throw "is empty"
        if (isNaN(someStr) === false) 
        {
            someStr.toString();
            throw "is a number insted of a string" 
        }
        if (endIndex < startIndex) 
            {
                temp = endIndex;
                endIndex = startIndex;
                startIndex = temp;
                throw "index number should be less than end number"
            }
        for (startIndex; startIndex < endIndex; startIndex++) {
            substring += someStr[startIndex];
        }
        return substring;
    }
    catch (err) {
        console.log(`input ${err}`);
    }
    
        


}
    console.log(substring('', 0, 3));
    console.log(substring(1234, 0, 3));
    console.log(substring('hello', 3, 0));
    console.log(substring('hello', 0, 3))

