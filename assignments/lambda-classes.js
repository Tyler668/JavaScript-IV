// CODE here for your Lambda Classes


class Person{
    constructor(attrs){
        this.name = attrs.name,
        this.location = attrs.location,
        this.age = attrs.age
        // this.favLaguage = attrs.favLaguage,
        // this.catchPhrase = attrs.catchPhrase,
        //this.specialty = attrs.specialty
    }

    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

