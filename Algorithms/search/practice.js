function addtwo(arr) {
    if (arr === '') {
        return -1
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j]
            if (arr.includes(sum)) {
                let store = arr.indexOf(sum)
                console.log(`Sum found: ${arr[i]} + ${arr[j]} = ${sum}`);
                console.log(`Indices: ${i} , ${j} and ${store}`);
            }

        }
    }
}


const arr = [3, 4, 5, 6, 3, 2, 5, 6, 7, 5];

console.log(addtwo(arr))