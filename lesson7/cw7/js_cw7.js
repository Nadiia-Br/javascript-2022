//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Cars(model, producer, year, speed, motor) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.motor = motor;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     };
//     this.info = function () {
//         console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.speed}, об'єм двигуна - ${this.motor}`);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed = this.speed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let ourCar = new Cars('BMW', 'Germant', 2010, 190, 2.0);
// console.log(ourCar);
// ourCar.drive();
// ourCar.info();
// ourCar.increaseMaxSpeed(15);
// ourCar.changeYear(2018)
// ourCar.addDriver('Max')
// console.log(ourCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Cars2 {
//     model
//     producer
//     year
//     speed
//     motor
//
//     constructor(model, producer, year, speed, motor) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.motor = motor;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     };
//
//     info() {
//         console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.speed}, об'єм двигуна - ${this.motor}`);
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.speed = this.speed + newSpeed;
//     };
//
//     changeYear(newValue) {
//         this.year = newValue;
//     };
//
//     addDriver(driver) {
//         this.driver = driver;
//     };
// }
//
// let ourCar = new Cars2('BMW', 'Germant', 2010, 190, 2.0);
// console.log(ourCar);
// ourCar.drive();
// ourCar.info();
// ourCar.increaseMaxSpeed(15);
// ourCar.changeYear(2018)
// ourCar.addDriver('Max')
// console.log(ourCar);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// / За допомоги циклу знайти яка попелюшка повинна бути з принцом.


class Popelushka {

    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let  popelushkas = [
    new Popelushka ('Ira', 18,37),
    new Popelushka ('Katya', 21,39),
    new Popelushka ('Sasha', 20,37),
    new Popelushka ('Olga', 19,40),
    new Popelushka ('Vera', 23,41),
    new Popelushka ('Masha', 21,38),
    new Popelushka ('Nastia', 18,35),
    new Popelushka ('Sonya', 17,40),
    new Popelushka ('Leria', 24,39),
    new Popelushka ('Ann', 26,41),
]

console.log(popelushkas);

class Prince{

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Artur', 25,41);
let prince2 = new Prince('Artem', 22,39);

let  pair = (popelushkas, prince) => {
    for (let item of popelushkas) {
        if (item.size === prince.shoe) {
            return `Принце, ось твоя попелюшка: ${item.name}`
        }
    }
}
console.log(pair(popelushkas, prince))


// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


let popelushkaPrince = popelushkas.find((item) => item.size === prince.shoe);
console.log(popelushkaPrince);

let popelushkaPrince2 = popelushkas.find((item) => item.size === prince2.shoe);
console.log(popelushkaPrince2);