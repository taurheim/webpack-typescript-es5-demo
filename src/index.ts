export class A {
    constructor() {
        console.log("A");
    }
}

export class B extends A {
    constructor() {
        super();
        console.log("B");
    }
}
console.log(new B());
