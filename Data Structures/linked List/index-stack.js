const LinkedList = require('./p3_stack')

class linkedListStack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
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

const stack = new linkedListStack()

console.log(stack.isEmpty())


stack.push(20)
stack.push(30)
stack.push(40)

stack.print()

console.log(stack.getSize())

console.log(stack.peek())

stack.pop()
stack.print()