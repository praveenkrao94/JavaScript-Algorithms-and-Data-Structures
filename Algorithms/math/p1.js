// find the seq for fibonacci on N


function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))



// function fib(n) {
//     let fibb = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         fibb[i] = fibb[i - 1] + fibb[i - 2]
//     }
//     return fibb
// }

// console.log(fib(2))