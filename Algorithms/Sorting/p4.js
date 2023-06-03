

// ----------------------------------------------------    MERGE SORT ----------------------------------------------------------------



function mergersort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2)

    const leftarray = arr.slice(0, mid)



    const Rightarray = arr.slice(mid)

    const callleft = mergersort(leftarray)
    const callright = mergersort(Rightarray)

    return mergersort2(callleft, callright)

}


function mergersort2(left, right) {

    const merger = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {

            merger.push(left.shift())
        } else {
            merger.push(right.shift())
        }
    }


    while (left.length) {
        merger.push(left.shift())
    }

    while (right.length) {
        merger.push(right.shift())
    }

    return merger

}


const arr = [5, 3, 8, 4, 2, 1, 6, 7];

console.log(mergersort(arr))




