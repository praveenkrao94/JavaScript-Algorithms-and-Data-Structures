// function seaach(arr, target) {
//     if (arr === '') {
//         return console.log(`enter a valid number`)
//     }

//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] === target) {
//             return 't'

//         }
//     }
//     return '-t'
// }

// const arr = [1, 2, 3, 4, 54, 5]

// const res = seaach(arr, 5)
// console.log(res)



// ----------------------------------------------------------------------------------------------------------------------



// function searchTarget(arr, target) {
//     if (arr.length === 0) {
//         console.log("Enter a valid array");
//         return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             console.log("Target found!");
//             return;
//         }
//     }

//     console.log("Target not found");
// }

// const arr = [1, 2, 't', 4, 'w', 54, 5, 'g'];
// const target = 'w';
// searchTarget(arr, target);



// --------------------------------------------------------------------------------------------------------------------------------


function findme(arr, target) {
    if (arr === '') {
        return console.log(`enter the valid array`)
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {

            return i
        }

    }
    return -1
}

const arr = [1, 2, 3, 4, 5, 6]

console.log(findme(arr, 6))

// ------------------------------------------------------------------------------------------------------------------------------------