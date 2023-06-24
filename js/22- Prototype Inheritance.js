console.log("Welcome to tut-22")

const proto = {

    slogan: function () {
        return `This company is the best`;
    },
    changename: function (newName) {
        this.name = newName
    }
};

// This creates kishan object
// const kishan = Object.create(proto);
// kishan.name = `Kishan`;
// kishan.role = `Programmer`;
// kishan.changename(`Kishan2`);
// console.log(kishan);


// This also creates kishan object
const kishan1 = Object.create(proto, {
    name: { value: "Kishan", writable: true },
    role: { value: "Programmer" },
})

kishan1.changename(`Kishan3`);
// console.log(kishan1);


// Employee Constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor
let harryObj = new Employee("Kishan", 356800, 25);
// console.log(harryObj)
// console.log(harryObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the Prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let Amit = new Programmer("Amit", 2, 0, `JavaScipt`);
console.log(Amit);