
// --------------------------------------------------- Binary Search -------------------------------------------------------------

// function searchBinary(arr, target) {
//     if (arr === '') {
//         return console.log(`enter valid array`)
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

// const arr = [2, 4, 3, 8, 6, 9, 8, 10]

// let result = arr.sort((a, b) => a - b)

// console.log(searchBinary(result, 10))




// ----------------------------------------------------------------------------------------------------------------------------



// function findSearch(n, target) {
//     if (n === '') {
//         return console.log('enter a valid array')
//     }

//     for (let i = 0; i <= n.length; i++) {
//         if (n[i] === target) {
//             let half = n.Math.floor(n.length / 2)
//             let finalres = n.slice(half)
//             return finalres
//         }
//     }
//     return -1
// }

// const arr = [2, 4, 3, 8, 6, 9, 8, 10, 11]

// const arr1 = [2, 4, 3, 8, 6, 9, 8, 10]


// let result = arr.sort((a, b) => a - b)

// let result2 = arr1.sort((a, b) => a - b)

// console.log(searchBinary(result, 10))

// console.log(searchBinary(result2, 20))




// -----------------------------------------------------------------------------------------------------------------------------




function binary(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

const arr = [2, 4, 3, 8, 6, 9, 8, 10, 11];
const arr1 = [2, 4, 3, 8, 6, 9, 8, 10];

let sortedArr = arr.sort((a, b) => a - b);
let sortedArr1 = arr1.sort((a, b) => a - b);

console.log(binary(sortedArr, 10));
console.log(binary(sortedArr1, 20));



// ----------------------------------------------------------------------------------------------------------------------------------------


