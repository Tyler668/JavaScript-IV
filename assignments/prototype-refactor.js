 

// Prototype Refactor



  // === GameObject Class ===
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


 // === CharacterStats Class ===

class CharacterStats extends GameObject{
    constructor(charAttrs) {
        super(charAttrs);
        this.healthPoints = charAttrs.healthPoints;
    }

    takeDamage(){
        return `${this.name} took damage!`;
    }
};


 // === Humanoid Class ===

//Calculates random damage for the attack 1-5 ----------|
function damageRoll(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//------------------------------------------------------|

class Humanoid extends CharacterStats{
    constructor(charAttrs){
        super(charAttrs);
        this.team = charAttrs.team,
        this.weapons = charAttrs.weapons,
        this.language = charAttrs.language
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}!`;
    }

    attack(target) {
        const atkDamage = damageRoll(6);
        target.healthPoints = target.healthPoints - atkDamage;
        return `${this.name} attacked ${target.name}, dealing ${atkDamage} damage!`;
    }

};

// Hero and Villain Classes ===

class Hero extends Humanoid {
    constructor(charAttrs){
        super(charAttrs)
    }

}

class Villain extends Humanoid {
    constructor(charAttrs){
        super(charAttrs)
    }
};


// Test Objects ===

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

// End Test Objects ===


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


// The Fight! ===
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

