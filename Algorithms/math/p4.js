// function powerofTwo(n) {
//     if (n < 2) {
//         return false
//     }
//     if (n === 1) {
//         return true
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }

// const num = 88

// const res = powerofTwo(num)

// console.log(`the number ${num} is ${res ? `true` : `is false`}`)




// --------------------------------------------------------------------------------------------------------------------------------------

function power(n) {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}


const num = 88

const res = power(num)

console.log(`the number ${num} is ${res ? `true` : `is false`}`)

