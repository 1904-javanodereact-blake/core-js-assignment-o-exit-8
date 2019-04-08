/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {

    for (let i = 0; i <= numArray.length; i++) {

        for (let j = 0; j < numArray.length - i; j++) {
            if (numArray[j] > numArray[j + 1]) {
                let smallest = numArray[j + 1];
                numArray[j + 1] = numArray[j];
                numArray[j] = smallest;
            }
        }

    }
}
let someArray = [50, 8, 3, 10, 9,];
bubbleSort(someArray)
let array = someArray.toString();
console.log(array);