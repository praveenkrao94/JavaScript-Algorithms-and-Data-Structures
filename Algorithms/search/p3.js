// ----------- Recussive Binary search ----------------------------///


function recursiveSearch(arr, target) {
    return binarySearch(arr, target, 0, arr.length - 1)
}


function binarySearch(arr, target, start, end) {

    if (start > end) {
        return -1
    }

    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end)
    } else {

        return binarySearch(arr, target, start, mid - 1)
    }

}


const arr = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(recursiveSearch(arr, 8))


