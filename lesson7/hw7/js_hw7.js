// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let information = new User(5, 'Ihor', 'Kot', 'ihr@mail', 222555 );
console.log(information);


// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [
    new User (21, 'Ira', 'Kast', 'iira@mail', 123456),
    new User (26, 'Ivan', 'Shest', 'van@mail', 123436),
    new User (39, 'Nikita', 'Vist', 'nik@mail', 323456),
    new User (54, 'Olya','Lind', 'lind@mail', 128456),
    new User (15, 'Nadiia', 'Fenix', 'fenix@mail', 125456),
    new User (86, 'Vika', 'Dem', 'vdem@mail', 123417),
    new User (97, 'Serg', 'Kobch', 'kob@mail', 123296),
    new User (8, 'Varvara', 'Bond', 'bond@mail', 363456),
    new User (96, 'Katia', 'Kiki', 'kiki@mail', 145956),
    new User (17, 'Sasha', 'Leyl', 'ley@mail',  752956),
];

console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filtr = users.filter((item) => {
    if (item.id % 2 === 0){
    return item
    }});
console.log(filtr);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let usersSort = users.sort((a, b) =>(a.id - b.id));
console.log(usersSort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)