




class car {
    #owner;
    constructor(x,y,z) {
        this.name = x,
        this.brand = y,
        this.#owner = z
    }

    showprivatevariable() {
        return `this is private variable ${this.#owner}`
    }
}


let c1 = new car ("defender", "landrover", "Nishad_Ahmad");
console.log('🚀 ~ c1 :', c1 );

console.log(`c1:`, c1.showprivatevariable());