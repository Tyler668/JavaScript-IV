// CODE here for your Lambda Classes


//Calculates random point allocation -20 to +20 ----------|
function pointRoll(max) {
    const num = Math.floor(Math.random() * Math.floor(max));
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    return num * plusOrMinus;
}
//--------------------------------------------------------|


class Person {
    constructor(attrs) {
        this.name = attrs.name,
            this.location = attrs.location,
            this.age = attrs.age
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}



class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today, we will be learning about ${subject}`);
    }
    grade(studentObj, subject) {
        console.log(`${studentObj.name} receives a perfect score on ${subject}`);
    }
    dolePoints(studentObj) {
        const delta = pointRoll(16);
        studentObj.grade = studentObj.grade + delta;
        console.log(`${this.name} assigned ${delta} points to ${studentObj.name}! ${studentObj.name}'s grade is now at ${studentObj.grade}`);
    }

    gradeGauntlet(studentObj) {
        while (studentObj.grade < 70 && studentObj.grade > 0) {
            this.dolePoints(studentObj);
            studentObj.graduate();
        }
    }

}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
        this.grade = attrs.grade;
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(`${i + 1}` + '. ' + this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has has begun a Sprint Challenge on ${subject}`)
    }

    graduate() {
        if (this.grade > 70) {
            console.log(`${this.name}'s grade has surpassed 70, and so they have graduated!`);
        }

        else if (this.grade < 0) {
            console.log(`Oof, ${this.name} somehow attained a negative grade overall`);
        }

        else{
            return ;
        }
    }


}


class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);

    }
}


// People ===

// Instructors ===
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const brit = new Instructor({
    name: 'Brit',
    location: 'Ottowa',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `You can do it!`
});


// Project Managers ===
const sydney = new ProjectManager({
    name: 'Sydney',
    gradClassName: 'WEB10',
    favInstructor: 'Brit',
    location: 'Texas',
    age: 23,
    favLanguage: 'CSS/HTML',
    specialty: 'Front-end',
    catchPhrase: `How was your day!?`
});

const roman = new ProjectManager({
    name: 'Roman',
    gradClassName: 'WEB10',
    favInstructor: 'Brit',
    location: 'Somewhere',
    age: 30,
    favLanguage: 'C',
    specialty: 'bash',
    catchPhrase: `Let's get it!`
});

// Students ===
const tyler = new Student({
    name: 'Tyler',
    grade: 35,
    className: 'WEB22',
    previousBackground: 'Nihilist',
    location: 'Connecticut',
    age: 22,
    favLanguage: 'JavaScript',
    specialty: 'Creating super bugs',
    catchPhrase: `Wot`,
    favSubjects: ['Math', 'Anthropology', 'Philosophy', 'Physics']
});

const roger = new Student({
    name: 'Roger',
    grade: 35,
    className: 'WEB22',
    location: 'Utah',
    age: 25,
    favLanguage: 'English',
    previousBackground: 'Glasses wearer',
    specialty: 'Wearing Glasses',
    catchPhrase: `My day was pretty good`
});


// Basic Speak Testing ===
tyler.speak();
roger.speak();
sydney.speak();
roman.speak();
brit.speak();
fred.speak();

// Student Testing ===
console.log(tyler);
tyler.PRAssignment("Philosophy");
tyler.listsSubjects();
tyler.sprintChallenge("Basket Weaving");

// Project Manager Testing ===
console.log(sydney);
console.log(roman);

sydney.standUp("Web22");
sydney.debugsCode(tyler, "pseudo classical instantiation");

//Instructor Testing === 
console.log(brit);
console.log(fred);

brit.demo('computery stuff');
brit.grade(tyler, 'tap dancing');


// The Grading Gauntlet ===
sydney.gradeGauntlet(tyler);
