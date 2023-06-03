// const arr = [-6, 20, 8, -2, 4]

// const res = arr.sort((a, b) => a - b)

// console.log(res)


// ------------------------------------------------------------------------------------------------------------------------------------
// Bubble sort

// function sortit(arr) {
//     let swapped
//     do {
//         swapped = false

//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 swapped = true
//             }
//         }

//     } while (swapped)
//     return arr
// }

// const arr = [-6, 20, 8, -2, 4]

// console.log(sortit(arr))




// ---------------------------------------------------------------- OR ---------------------------------------------------------------



function sortit(arr) {
    let swapped


    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swapped = true
            }
        }

    }
    return arr
}

const arr = [-6, 20, 8, -2, 4]

console.log(sortit(arr))




// --------------------------------------------------------------------------------------------------------------------------------------