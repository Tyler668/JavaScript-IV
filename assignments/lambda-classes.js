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
            for(let i = 0; i< this.favSubjects.length; i++){
                console.log(`${i+1}` + '. ' + this.favSubjects[i]);
            }
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject){
        console.log(`${this.name} has has begun a Sprint Challenge on ${subject}`)
    }
}


class ProjectManager extends Instructor{
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(studentObj, subject){
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
    name: 'sydney',
    location: 'Texas',
    age: 23,
    favLanguage: 'CSS/HTML',
    specialty: 'Front-end',
    catchPhrase: `How was your day!?`
  });
  
  const roman = new ProjectManager({
    name: 'Roman',
    location: 'Somewhere',
    age: 30,
    favLanguage: 'C',
    specialty: 'bash',
    catchPhrase: `Let's get it!`
  });

  // Students ===
  const tyler = new Student({
    name: 'Tyler',
    className: 'WEB22',
    location: 'Connecticut',
    age: 22,
    favLanguage: 'JavaScript',
    specialty: 'Creating super bugs',
    catchPhrase: `Wot`,
    favSubjects:['Math','Anthropology','Philosophy','Physics']
  });

  const roger = new Student({
    name: 'Roger',
    className: 'WEB22',
    location: 'Utah',
    age: 25,
    favLanguage: 'English',
    specialty: 'Wearing Glasses',
    catchPhrase: `My day was pretty good`
  });


// Basic Speak Testing ===
//   tyler.speak();
//   roger.speak();
//   sydney.speak();
//   roman.speak();
//   brit.speak();
//   fred.speak();



// Student Testing ===
tyler.PRAssignment("Philosophy");
tyler.listsSubjects();
tyler.sprintChallenge("Basket Weaving");


console.log(sydney);