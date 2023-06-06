const LinkedList = require('./p3_stack')

class linkedListQueue {
    constructor() {
        this.list = new LinkedList()
    }

    enqueue(value) {
        this.list.append(value)
    }

    dequeue() {
        return this.list.removefromFront()
    }

    peek() {
        return this.list.head.value

    }

    isEmpty() {
        return this.list.isEmpty()

    }

    getSize() {
        return this.list.getsize()
    }

    print() {
        return this.list.print()
    }


}

const Queue = new linkedListQueue()

console.log(Queue.isEmpty())


Queue.enqueue(20)
Queue.enqueue(30)
Queue.enqueue(40)

Queue.print()

console.log(Queue.getSize())

console.log(Queue.peek())

Queue.dequeue()
Queue.print()

