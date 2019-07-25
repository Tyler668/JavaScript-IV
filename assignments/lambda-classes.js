// CODE here for your Lambda Classes


class Person{
    constructor(attrs){
        this.name = attrs.name,
        this.location = attrs.location,
        this.age = attrs.age
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}



class Instructor extends Person{
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLaguage = attrs.favLaguage;
        this.catchPhrase = attrs.catchPhrase
    }
    demo(subject){
        console.log(`Today, we will be learning about ${subject}`);
    }
    grade(studentObj, subject){
        console.log(`${studentObj.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
        listsSubjects(){
            for(i = 0; i< this.favSubjects.length; i++){
                console.log(i + '. ' + this.favSubjects[i]);
            }
        
    }

}