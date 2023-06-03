// ---------------------------------------------------- Insetion sort  -----------------------------------------------------

// t works by dividing the array into two parts: a sorted subarray and an unsorted subarray. Initially, the sorted subarray contains only the first element of the array, and the rest of the elements are in the unsorted subarray.

// ex:
// arr [11 ,4 ,5 6,67 ,7]

// Output :,arr [11 ,4 ,5 6,7,67]





function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] < current) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current


    }

    return arr


}
// Example usage:
const unsortedArray = [8, 20, -2, 5, -6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
