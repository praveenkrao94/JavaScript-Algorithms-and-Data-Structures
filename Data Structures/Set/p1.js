const set = new Set([1, 2, 3, 3, 4, 5])
for (let item of set) {
    console.log(item)
}

set.add(5)
set.add(9)

console.log(set.has(3))

set.delete(4)
console.log(set)

console.log(set.size)

set.clear()

console.log(set)
// console.log(set)