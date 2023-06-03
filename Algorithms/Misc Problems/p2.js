
// ---------------------------------------------------- Climing Staircase ---------------------------------------------------------


function climb(n) {
    const noofways = [1, 2]
    for (let i = 2; i <= n; i++) {
        noofways[i] = noofways[i - 1] + noofways[i - 2]
    }
    return noofways[n - 1]
}

console.log(climb(3))
console.log(climb(4))
console.log(climb(5))