// -------------------------------------- Queue Part 2 --------------------------------------------------------

class Queue {
    constructor() {
        this.item = []
        this.rear = 0
        this.front = 0
    }

    enqueue(element) {
        this.item[this.rear] = element
        this.rear++
    }

    dequeue() {
        const fitem = this.item[this.front]
        delete this.item[this.front]
        this.front++
        return fitem
    }

    isEmpty() {
        return this.rear - this.front === 0
    }

    peek() {
        return this.item[this.front]
    }

    size() {
        return this.rear - this.front
    }

    print() {

        console.log(this.item)
    }
}

const que = new Queue()

console.log(que.isEmpty())
que.enqueue(4)
que.enqueue(5)
que.enqueue(6)

que.print()

console.log(que.dequeue())
console.log(que.peek())