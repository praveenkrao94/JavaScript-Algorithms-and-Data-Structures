class Queue {
    constructor() {
        this.item = []
    }

    enqueue(element) {
        this.item.push(element)
    }

    dequeue() {
        return this.item.shift()
    }

    isEmpty() {
        return this.item.length === 0
    }
    peek() {
        if (!this.isEmpty()) {

            return this.item[0]
        }
        return null
    }

    size() {
        return this.item.length
    }

    print() {
        console.log(this.item.toString())
    }
}

const Que = new Queue

console.log(Que.isEmpty())

Que.enqueue(10)
Que.enqueue(20)
Que.enqueue(30)
console.log(Que.size())
Que.print()

console.log(Que.dequeue())
console.log(Que.peek())