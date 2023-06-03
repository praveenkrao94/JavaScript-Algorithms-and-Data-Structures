// recursive fibondsssssssacci


function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const res = fibonacci(6)

console.log(res)

// _------------------------------------------------------------------------------------------------------------------------------------------]]

// function fibb(n) {
//     if (n <= 1) {
//         return n
//     }

//     let fib = [0, 1]

//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib
// }

// const res = fibb(6)
// console.log(res)