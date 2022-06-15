let countDesigner = countDevs = countManags = 0;
function Designer(name, surname, baseSalary, workExp, coef) {
    this.name = name;
    this.surname = surname;
    this.baseSalary = baseSalary;
    this.workExp = workExp;
    if (workExp > 2 && workExp <= 5) {
        this.countedSalary = this.baseSalary + 200;
    }
    if (workExp > 5) {
        this.countedSalary = this.baseSalary * 1.2 + 500;
    }
    if (coef > 1 || coef < 0) {
        console.log("Write valid coefficient.");
        return false;
    }
    countDesigner++;
    this.coef = coef;
    this.countedSalary *= coef;
    return;
}
function Developer(name, surname, baseSalary, workExp) {
    this.name = name;
    this.surname = surname;
    this.baseSalary = baseSalary;
    this.workExp = workExp;
    if (workExp > 2 && workExp <= 5) {
        this.countedSalary = this.baseSalary + 200;
    }
    if (workExp > 5) {
        this.countedSalary = this.baseSalary * 1.2 + 500;
    }
    countDevs++;
    return;
}

function Manager(name, surname, baseSalary, workExp, Team) {
    this.name = name;
    this.surname = surname;
    this.baseSalary = baseSalary;
    this.workExp = workExp;
    this.Team = Team;
    if (workExp > 2 && workExp <= 5) {
        this.countedSalary = this.baseSalary + 200;
    }
    if (workExp > 5) {
        this.countedSalary = this.baseSalary * 1.2 + 500;
    }
    if (Team.length > 5 && Team.length <= 10) {
        this.countedSalary += 200;
    }
    if (Team.length > 10) {
        this.countedSalary += 300;
    }
    for (let i = 0; i < Team.length; i++) {
        if (typeof(this.Team) == Developer) {
        countDevs++;
        }
        if (typeof(this.Team) == Designer) {
            countDesigner++;
        }
    }
    if (countDevs > (countDevs + countDesigner) / 2) {
        this.countedSalary *= 1.1;
    }
    return;
}

function Department (manager) {
    this.manager = manager;
    this.workers = manager.Team;
    this.giveSalary = function() {
        for (let i = 0; i < this.manager.Team.length; i++) {
            console.log(this.manager.name + " " + this.manager.surname + " отримав " + this.manager.countedSalary + " шекелєй");
        }
        for (let i = 0; i < this.manager.Team.length; i++) {
            console.log(this.manager.Team[i].name + this.manager.Team[i].surname + " отримав " + this.manager.Team[i].countedSalary + " шекелєй"); 
        }
       
    }
}

let empl12 = new Designer("Andrii ", "Melnyk", 1000, 11, 0.8);
let empl11 = new Designer("Viktor ", "Sviriduk", 1000, 11, 0.8);
let empl5 = new Developer("Serdii", "Kukla", 1000, 11);
let empl6 = new Developer("Oleg ", "Zaika", 1000, 11);
let empl7 = new Developer("Daniil ", "Ovshin", 1000, 11);
let empl8 = new Designer("Sasha ", "Babka", 1000, 11, 0.8);
let empl9 = new Designer("Sonia ", "Kolkin", 1000, 11, 0.8);
let empl10 = new Developer("Katia ", "Stethem", 1000, 11);
let empl2 = new Developer("Rita ", "Enovkin", 1500, 5);
let empl4 = new Developer("Evgen ", "Nevzorov", 1300, 6);
let empl13 = new Developer("Valeriy ", "Sirkin", 1300, 6);
let empl3 = new Manager("Vova ", "Chan", 2000, 8, [empl13,empl11, empl2, empl4, empl10, empl9, empl8, empl7, empl6, empl5, empl12]);
let depart = new Department(emp3);

depart.giveSalary();