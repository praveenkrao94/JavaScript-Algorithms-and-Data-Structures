class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {                          // 16
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node                    // point the head to new  node 
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }


    append(value) {
        const node = new Node(value) /// this is how to add a node
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log(`list is empty`)
        } else {
            let cur = this.head
            let listvalue = ''
            while (cur) {
                listvalue += ` ${cur.value}`
                cur = cur.next
            }
            console.log(listvalue)
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return console.log('either the index entered is valid and the size doesmatch ')
        } else {
            if (index === 0) {
                this.prepend(value)
            }
        }
    }




}



const list = new LinkedList()

console.log(`list is empty? ${list.isEmpty() ? 'Yes is it' : 'No its not'}`,)
console.log(`list size `, list.getSize())
list.print()
list.prepend(50)
list.append(10)
list.print()
list.append(20)
list.append(30)
list.prepend(100)
list.append(123)
list.print()


