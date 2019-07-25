/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game!`;
//   };

class GameObject {
    constructor(charAttrs) {
        this.createdAt = charAttrs.createdAt,
            this.name = charAttrs.name,
            this.dimensions = charAttrs.dimensions
    }
    destroy() {
        return `${this.name} was removed from the game!`;
    }
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage!`;
};

class CharacterStats {
    constructor(charAttrs) {
        super(charAttrs);
        this.healthPoints = char.healthPoints
    }

};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/


Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}!`;
};

Humanoid.prototype.attack = function (target) {
    const atkDamage = damageRoll(6);
    target.healthPoints = target.healthPoints - atkDamage;
    return `${this.name} attacked ${target.name}, dealing ${atkDamage} damage!`;
};


//Calculates random damage for the attack 1-5 ----------|
function damageRoll(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//------------------------------------------------------|

function Humanoid(char) {
    this.team = char.team,
        this.weapons = char.weapons,
        this.language = char.language,
        CharacterStats.call(this, char);
};

Hero.prototype = Object.create(Humanoid.prototype);

function Hero(char) {
    Humanoid.call(this, char);
};


Villain.prototype = Object.create(Humanoid.prototype);
function Villain(char) {
    Humanoid.call(this, char);
};
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

const wizard = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 20,
    name: 'Merlin',
    team: 'Mystic Tribe',
    weapons: [
        'Staff',
        'Book',
    ],
    language: 'Deep Speak',
});

const barbarian = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 20,
    name: 'Grognak',
    team: 'Plains Tribe',
    weapons: [
        'Hammer',
        'Axe',
    ],
    language: 'Common',
});



console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


//The fight:
while (wizard.healthPoints > 0 && barbarian.healthPoints > 0) {

    console.log(wizard.attack(barbarian));
    console.log("Grognak HP - " + barbarian.healthPoints + "    Merlin HP - " + wizard.healthPoints);

    console.log(barbarian.attack(wizard));
    console.log("Grognak HP - " + barbarian.healthPoints + "    Merlin HP - " + wizard.healthPoints);

}

if (wizard.healthPoints <= 0) {
    console.log(`${wizard.name} died!`);
}

if (barbarian.healthPoints <= 0) {
    console.log(`${barbarian.name} died!`);
}

