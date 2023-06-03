// prime number

// function isprime(n) {
//     if (n === 0) {
//         return true
//     }

//     if (n <= 1) {
//         return false
//     } else {
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) {
//                 return false
//             }
//         }

//     }
//     return true
// }


// let arr = [1, 2, 3, 4, 5, 6, 6, 76, 76, 4, 5, 6, 7, 8]

// let prime = []

// for (i = 0; i <= arr.length; i++) {
//     if (isprime(arr[i])) {
//         prime.push(arr[i])
//     }
// }

// console.log(`the list of prime number are ${prime}`)

function isprime(n) {
    if (n < 2) {
        return false
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
        }
    }
    return true
}



console.log(isprime(4))