class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static info = 'abc'
}

const dog = new Animal('dog', 1)


console.log(dog)