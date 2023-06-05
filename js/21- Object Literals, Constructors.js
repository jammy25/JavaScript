console.log("Welcome to tut-21");

// Object Literal for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: "80",
    run: function () {
        console.log("car is running")
    }

}
// console.log(car)
// console.log(car.run())

// Concstructor
// we have already seen constructor like --> new Date()

function GeneralCar(givenName, givenSpeed) {
    this.name = givenName,
        this.topSpeed = givenSpeed,
        this.run = function () {
            console.log(`${this.name} is running`)
        }
    this.analyze = function () {
        console.log(`This car is ${200 - this.topSpeed} slower than Mercedes`)
    }
}

car1 = new GeneralCar(`Maruti Alto`, '90kmph');
car2 = new GeneralCar(`Nissan`, '180');
console.log(car1, car2);
console.log(car2.analyze())