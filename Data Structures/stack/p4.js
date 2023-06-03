// ----------------------------------------------- Circular Queue ------------------------------------------------------------------------


class circularQ {
    constructor(capacity) {
        this.item = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity   // this to direct it back tro 0
            this.item[this.rear] = element
            this.currentLength = this.currentLength + 1
            if (this.front === -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        } else {
            const ditem = this.item[this.front]
            this.item[this.front] = null
            this.front = (this.front + 1) % this.capacity
            this.currentLength = this.currentLength - 1
            if (this.isEmpty()) {
                this.front = -1
                this.rear = -1
            }
            return ditem
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.item[this.front]
        }
        return null
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty')
        } else {
            let i
            let str = ''
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.item[i] + " "
            }
            str += this.item[i]
            console.log(str)
        }
    }
}


const cque = new circularQ(5)

console.log(cque.isEmpty())

cque.enqueue(10)
cque.enqueue(20)
cque.enqueue(30)
cque.enqueue(40)
cque.enqueue(50)


console.log(cque.isFull())
cque.print()

console.log(cque.dequeue())

console.log(cque.peek())

cque.print()

cque.enqueue(60)

cque.print()