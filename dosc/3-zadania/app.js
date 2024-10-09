class User {
    constructor(nick, name, surname, email, role) {
        this.nick = nick;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.loginDates = [];
        this.active = true;
    }

    logIn() {
        const currentDate = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());
        this.loginDates.push(currentDate);
    }

    showLoginDates() {
        this.loginDates.forEach(date => console.log(date));
    }

    showDetails() {
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }

    toggleActive() {
        this.active = !this.active;
    }
}


const users = [
    new User('nick1', 'Paweł', 'Kowalski', 'pawel.kowalski@gmail.com', 'editor'),
    new User('nick2', 'Anna', 'Bomba', 'anna.bomba@gmail.com', 'reader'),
    new User('nick3', 'Piotr', 'Winiarski', 'piotr.winiarski@gmail.com', 'admin')
];

users[0].logIn();
users[0].showLoginDates();
users[0].showDetails();
users[0].toggleActive();

console.log("________")

users[1].logIn();
users[1].showDetails();
users[1].showDetails();
users[1].toggleActive();

console.log("________")

users[2].logIn();
users[2].showDetails();
users[2].showDetails();
users[2].toggleActive();



//ZAD 2

class Fighter {
    constructor(name) {
        this.name = name;
        this.life = 20;
        this.power = 3;
    }

    attack(who) {
        if (Math.random() < 0.5) {
            who.life -= this.power;
            log.push(`${this.name} zaatakował ${who.name}. ${who.name} ma życia ${who.life} .`);
        } else {
            log.push(`${this.name} nie trafił ataku ${who.name}.`);
        }
    }
}

const names = [ "Bobma", "Czopek", "Johhny mielony", "Łopata", "Rząłądkowa", "Somersby", "Garage", "Capitan Jack", "Jack Daniels", "Marcin", "Jajo", "Ten Mocny"];
const fighters = [];
const log = [];


names.forEach(name => fighters.push(new Fighter(name)));

let leftFighter = null;
let rightFighter = null;

function getFighter() {
    return fighters.length > 0 ? fighters.shift() : null;
}

function loop() {

    if (!leftFighter && !rightFighter && fighters.length === 0) {
        log.push("Koniec turnieju! Brak zawodników.");
        console.log(log.join("\n"));
        return false;
    }


    if (!leftFighter || leftFighter.life <= 0) {
        leftFighter = getFighter();
        if (!leftFighter) {
            log.push("Wojownik po prawej wygrał!");
            console.log(log.join("\n"));
            return false;
        }
        leftFighter.life = 20;  
    }


    if (!rightFighter || rightFighter.life <= 0) {
        rightFighter = getFighter();
        if (!rightFighter) {
            log.push("Wojownik po lewej wygrał!");
            console.log(log.join("\n"));
            return false;
        }
        rightFighter.life = 20; 
    }


    console.clear();
    if (Math.random() < 0.5) {
        leftFighter.attack(rightFighter);
    } else {
        rightFighter.attack(leftFighter);
    }


    console.log(log.join("\n"));


    if (leftFighter.life <= 0) {
        log.push(`${leftFighter.name} zaostał pokonany.`);
        leftFighter = null; 

    if (rightFighter.life <= 0) {
        log.push(`${rightFighter.name} został pokonany.`);
        rightFighter = null;
    }


    setTimeout(() => loop(), 100);
}

loop();



//ZAD 3

String.prototype.sortText = function(char) {
    return this.split(char).sort().join(char);
}

console.log("JULKA-WIKTOR-WOJTEK-FINLANDIA".sortText('-'));

//ZAD 4

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

console.log("Ala ma kota".reverse());

//ZAD 5

Array.prototype.sum = function() {
    return this.reduce((acc, num) => acc + num, 0);
}

Array.prototype.sortNr = function() {
    return this.sort((a, b) => a - b);
}

console.log([1, 2, 3].sum());
console.log([1, 1.2, 11, 22, 2.1].sortNr());

}