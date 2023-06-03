//  factorial of number 'n'


function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }

}
function len(end) {
    let start = 1
    for (let i = start; i <= end; i++) {
        let res = factorial(i)
        console.log(`the factorial is ${res}`)
    }
}

const endnumber = 5

len(endnumber)

// ----------------------------------------------------------------------------------------------------------------------------

function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        let res = n * factorial(n - 1)
        console.log(`the factorial number is ${res}`)
        return res
    }
}

factorial(5)


