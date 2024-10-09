//ZAD 1
console.log("\nZAD 1")

const rectangle = {

    height: 10,
    width: 10,

        showArea(){

            return this.height * this.width;

        }
}

const circle = {

    radius: 5,

        showArea(){


            return Math.PI * Math.pow(this.radius, 2);

        }
}



console.log("Kwadrat ma wysokość "+rectangle.height, "i szerokość "+rectangle.width)
console.log("Pole kwadratu to "+rectangle.showArea())

console.log("Koło ma promień "+circle.radius)
console.log("Pole koła to "+circle.showArea())



//ZAD 2 
console.log("\nZAD 2")

const currentUser = {

    name : "Marcin" ,
    surname : "Czopek" ,
    email : "marcinczopkiewicz47@gmail.com" ,
    www : "www.roblox.com" ,
    userType : "admin" , 
    isActive : false,



show() {

    console.log("Imie: "+this.name)
    console.log("Nazwisko: "+this.surname)
    console.log("Email: "+this.email)
    console.log("www: "+this.www)
    console.log("userType: "+this.userType)
    console.log("isActive: "+this.isActive)

},

setActive(active) {

    this.isActive = active;

    }
};

currentUser.show();
//ustawienie isActive na true i ponowne wyświetlenie
//currentUser.setActive(true);
//console.log("\nActive na true")
//currentUser.show();

//ZAD 3 
console.log("\nZAD 3 nie wiem jak je zrobic, NIKT TEGO NIE WIE")


//ZAD 4
console.log("\nZAD 4")

const spaceShip = {

    name : "Enterprise" ,
    currentLocation : "Earth" ,
    flyDistance : 0, 

    flyTo(place, distance){

        this.currentLocation = place;
        this.flyDistance += distance;

    },

    showInfo() {

        console.log("Informacje o statku: ");
        console.log("Statek: "+ this.name, "doleciał do miejsca: "+ this.currentLocation);
        console.log("Statek przeleciał już całkowity dystans: "+ this.flyDistance, "km");
    },



meetClingon() {

    let positive = 0;

    for(let i = 0; i < 100; i++) {
        if (Math.random() > 0.5) {
            positive++;
        }

    }

    if(positive >= 50){
        console.log("Statek: "+this.name, " będący w okolicy: "+this.currentLocation, "zwycięsko wyszedł ze spotkania z Klingonami")
    } else {
        console.warn("Statek: "+this.name, " będacy w okolicy: "+this.currentLocation, "został pokonany przez Klingonów")
        }
    }
};

spaceShip.flyTo("Mars", 55000);

spaceShip.showInfo();

spaceShip.meetClingon();

//ZAD 5
console.log("\nZAD 5")

const book = {

    users : [],

    addUser(name, age, phone) {

        const user = {

            name : name,
            age : age,
            phone : phone

        };

        this.users.push(user);

    },

    showUsers() {

        console.log("Wszyscy użytkownicy w książce: ");
        this.users.forEach((user, index) => {
            console.log(index + 1, "Imię: "+user.name, "Wiek: "+user.age, "Telefon: "+user.phone);
        });

    },

    findByName(name) {

        const user = this.users.find(user => user.name === name);
        if (user) {
            console.log("Znaledziono użytkownika: Imię: "+user.name, "Wiek: "+user.age, "Telefon: "+user.phone);            
        } else {
            console.log(false);
        }

    },

    findByPhone(phone) {
        const user = this.users.find(user => user.phone === phone);
        if (user) {
            console.log("Znaledziono użytkownika: Imię:"+user.name, "Wiek: "+user.age, "Telefon: "+user.phone);
        } else {
            console.log(false);
        }
    },

    getCount() {
        console.log("Liczba użytkowników w książce: "+this.users.length);
    }

};

book.addUser("Piotr", 37, "391 094 132")

book.showUsers();

book.findByName("Piotr")

//ZAD 6
console.log("\nZAD 6")

const tableGenerator = {

    randomNumber(max, min){

        return Math.floor(Math.random() * (max - min +1 )) + min;

    },

    generateIncTable(nr){

        const table = [];
        for(let i =0; i <= nr; i++){
            table.push(i);
        }
        return table;
    },

    generateRandomTable(lng, min, max){

        const table = [];
        for(let i = 0; i < lng; i++) {
            table.push(this.randomNumber(min, max));
        }
        return table;
    },

    generateTableFromText(str){
        if(typeof str !== 'string'){
            return [];
        }
        return str.split(' ');
    },

    getMaxFromTable(arr){
        return Math.max(arr);
    },

    getMinFromTable(arr){
        return Math.min(arr);
    },

    delete(arr, index){
        if(index >= 0 && index < arr.length){
            arr.splice(index, 1);
        }
        return arr;
    }

};

console.log(tableGenerator.randomNumber(1, 10));

console.log(tableGenerator.generateIncTable(5));

console.log(tableGenerator.generateRandomTable(4, 10, 100));

console.log(tableGenerator.generateTableFromText(" Klikał w swój komputer krążek na zielonym krześle "));

console.log(tableGenerator.getMaxFromTable(1,5,9,3,6));

console.log(tableGenerator.getMinFromTable(1,4,8,5,2))

console.log(tableGenerator.delete([1,2,3,4,5], 2));

//ZAD7 MAM JUŻ DOŚĆ ILE MOŻNA
console.log("\nZAD 7")

