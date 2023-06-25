console.log("Welcome to tut-23");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `This company is great, regards ${this.name}`
    }
    joiningYear() {
        return 2023 - this.experience
    }
    static add(a, b) {
        return a + b
    }
}

let kishan = new Employee("Kishan", 6, "SDE-3");
console.log(kishan);
console.log(kishan.slogan());
console.log(kishan.joiningYear())
console.log(Employee.add(22, 6))

// Inheritance - Let's inherit Employee class for Programmer class

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, Github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.Github = Github;
    }
    favoriteLanguage() {
        if (this.language == 'Python') {
            return 'Python'
        }
        else {
            return 'JavaScript'
        }
    }
    static multiply(a, b) {
        return a * b;
    }

}

let Anu = new Programmer('Anubhav', 3, 2, 'Java', 'Anu04')
console.log(Anu)
console.log(Anu.favoriteLanguage())
console.log(Programmer.multiply(19, 7))