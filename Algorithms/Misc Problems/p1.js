// --------------------------------------  Cartesian Product --------------------------------------------------------------------------


function cart(arr1, arr2) {
    const temp = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            temp.push([arr1[i], arr2[j]])
        }
    }

    return temp
}

const arr1 = [1, 2]

const arr2 = [2, 3, 4]

console.log(cart(arr1, arr2))