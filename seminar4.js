// class Stream {
//     #value;
//     #nextvalue

//     static #count = 0
//     constructor(value, nextValue) {
//         this.#value = value
//         this.#nextvalue = nextValue
//         Stream.#count++
//     }

//     get value() {
//         return this.#value
//     }

//     get next() {
//         this.#value = this.#nextvalue(this.#value)
//         return this.#value
//     }

//     static get count() {
//         return Stream.#count
//     }
// }

// class ConstantStream extends Stream {
//     constructor(value) {
//         super(value, value => value)
//     }
// }

// class NextIntegerStream extends Stream {
//     constructor() {
//         super(0, value => value + 1)
//     }
// }

// const constant = new ConstantStream(1)
// const nextInteger = new NextIntegerStream()

// for (let i = 0; i < 10; i++) {
//     console.log(`constant[${i}] = ${constant.next}`)
//     console.log(`nextInteger[${i}] = ${nextInteger.next}`)

// }

// console.log(Stream.count)

// biectual care implementează un șir crescător având ca elemente toate numerele pare pornind de la o valoare dată.
//  Constructorul primește valoarea inițială a secvenței. Singura metodă este 'next' care calculează următoarea valoare din și

class evenStream {
    #streamOfNumbers = []
    #startingNumber
    #counter
    constructor(startingNumber) {
        this.#startingNumber = startingNumber % 2 === 0 ? startingNumber : startingNumber + 1
        this.#streamOfNumbers.push(this.#startingNumber)
        this.#counter = 1
    }

    get value() {
        return this.#streamOfNumbers
    }

    get length() {
        return this.#streamOfNumbers.length
    }

    get next() {
        //    if(this.#counter === 1 & evenStream.#streamOfNumbers[0] %2 === 1)
        //         evenStream.#streamOfNumbers.push(this.#startingNumber+1)
        //     else 
        //         evenStream.#streamOfNumbers.push(evenStream.#streamOfNumbers[this.#counter-1]+2)
        this.#counter++
        this.#streamOfNumbers.push(this.#streamOfNumbers[this.#streamOfNumbers.length - 1] + 2)
        return this
    }


}


let myStream = new evenStream(5)
let value = myStream.next.next.value

console.log(value)



// class Robot {
//     constructor(name) {
//         this.name = name

//     }

//     move() {
//         console.log(`${this.name} is moving`)
//     }

// }

// const r0 = new Robot('some robot')
// r0.move()

// class Weapon {
//     constructor(description) {
//         this.description = description
//     }

//     fire() {
//         console.log(`${this.description} is firing`)
//     }
// }

// const w0 = new Weapon('laser')
// w0.fire()

// class CombatRobot extends Robot {
//     constructor(name) {
//         super(name)
//         this.weapons = []
//     }

//     addWeapons(w) {
//         this.weapons.push(w)
//     }

//     fire() {
//         console.log('firing all weapons')
//         this.weapons.forEach(element => {
//             element.fire()
//         });
//     }
// }

// const r1 = new CombatRobot('some combat robot')
// r1.addWeapons(w0)
// r1.move()
// r1.fire()

// Robot.prototype.fly = function () {
//     console.log(`${this.name} is flying`)
// }

// r1.fly()


// După ce ați testat exemplul, implementați următoarea structură de tipuri. 
// Software este un tip care are metoda 'run'. Browser moștenește Software și poate adăuga și instala Plugin. Un Browser poate avea multiple Plugin.


class Software {
    constructor(name){
        this.name = name
    }

    run() {
        console.log(`This ${this.name} is working as expected`)
    }
}

class Pluginn {
    constructor(name){
        this.name = name
    }
    

    run()
    {
        console.log(`Plugin ${this.name} installed`)
    }
}

class Browser extends Software{
    constructor(name, plugins = []){
        super(name)
        this.plugins = plugins
    }

    showPlugins()
    {
        for(let plug of this.plugins)
            plug.run()
    }

    addPlugin(plug){
        this.plugins.push(new Pluginn(plug))
    }
}

let Chrome = new Browser("Chrome",[new Pluginn("AdBlock"), new Pluginn("MetaMask Desktop")])
Chrome.showPlugins()
Chrome.addPlugin("Youtube: Bring back dislike button")
Chrome.showPlugins()