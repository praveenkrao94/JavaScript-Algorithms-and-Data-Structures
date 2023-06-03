const obj = {
    name: "prveen",
    age: 29,
    "single": true,
    myname: function () {
        console.log(this.name)
    }
}

// console.log(obj.name)

// console.log(obj.age)

// console.log(obj['single'])

obj.job = "not yet"



delete obj.job


// console.log(obj.myname())

obj.name = "rao"



// -----------------------------------------------------------------------------------------------------------------------------------------

// Object.keys()

const objkeys = Object.keys(obj)

console.log(objkeys) //  [ 'name', 'age', 'single', 'myname' ]

//Object.values()

const objval = Object.values(obj)

console.log(objval) //  [ 'rao', 29, true, [Function: myname] ] 

// .entries

const arr = ['apple', 'orange', 'mango']

const entriess = Array.from(arr.entries())

console.log(entriess)  //  [ [ 0, 'apple' ], [ 1, 'orange' ], [ 2, 'mango' ] ]
