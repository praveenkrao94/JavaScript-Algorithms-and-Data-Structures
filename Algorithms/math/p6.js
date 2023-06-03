// factorial recursive

function fact(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * fact(n - 1)
    }


}

const res = 5

const fi = fact(res)

console.log(`the facc is ${fi}`)