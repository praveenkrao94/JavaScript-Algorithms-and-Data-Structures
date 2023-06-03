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


    insert(value, index) {
        if (index < 0 || index > this.size) {
            return console.log('either the index entered is valid and the size doesmatch ')
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }

            node.next = prev.next
            prev.next = node
            this.size++
        }
    }


    removeindex(index) {
        if (index < 0 || index > this.size) {
            return console.log('either the index entered is valid and the size doesmatch ')
        }

        let removenode
        if (index === 0) {
            removenode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next                             // advance the prev to one by one
            }
            removenode = prev.next
            prev.next = removenode.next
        }
        this.size--
        return removenode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return console.log('no Value in the list to remove')
        }

        if (this.head.value === value) {
            this.head = this.head.next
        } else {
            let prev = this.head

            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removenode = prev.next
                prev.next = removenode.next
                this.size--
                return value
            }
            return null
        }

    }
    search(value) {
        if (this.isEmpty()) {
            return -1
        }

        let cur = this.head
        let i = 0
        while (cur) {
            if (cur.value === value) {
                return i
            }
            cur = cur.next
            i++
        }

        return "value not found"
    }

    // reverse//

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
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

}



const list = new LinkedList()

console.log(`list is empty? ${list.isEmpty() ? 'Yes is it' : 'No its not'}`,)
console.log(`list size `, list.getSize())
list.print()


list.insert(10, 0)
list.print()
list.insert(20, 0)
list.print()
list.insert(30, 1)
list.print()
list.insert(40, 3)
list.print()
// list.removeValue(40)
list.print()


list.prepend(50)
list.prepend(60)
list.print()

// list.search(20)
console.log(list.search(300))
list.reverse()
list.print()

