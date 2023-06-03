// ------------------------------------------------------- linked list with tail ----------------------------------------------------------


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }


    getsize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removefromFront() {
        if (this.isEmpty()) {
            return null
        } else {
            const value = this.head.value
            this.head = this.head.next
            this.size--
            return value
        }
    }

    removefromEnd() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value

    }


    print() {
        if (this.isEmpty()) {
            console.log(`list is empty`)
        } else {
            let curr = this.head
            let listvalues = " "
            while (curr) {
                listvalues += `${curr.value}`
                curr = curr.next
            }

            console.log(listvalues)
        }
    }
}


const list = new LinkedList()

console.log(list.isEmpty())

list.prepend(10)
list.prepend(30)
list.prepend(20)
list.prepend(50)
list.print()
list.append(100)
list.print()


list.removefromFront()
list.print()
list.removefromEnd()
list.print()


