

// ---------------------------------------------------------- Quick Sort -------------------------------------------------------------


function quicksort(arr) {

    if (arr.length <= 1) {
        return arr
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)]
}

const arr = [8, 3, 2, 10, 7, 6, 1, 9, 4, 5];

console.log(quicksort(arr))



