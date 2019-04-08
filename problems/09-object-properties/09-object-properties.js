/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
        someObj['name'] = 'unknown';
        someObj.volume = 0;
}

let someObj = {
    shape: 'default',
    weight: 0,
    area: 0,
    perimetor: 0
}
objectProperties(someObj);
console.log(someObj);